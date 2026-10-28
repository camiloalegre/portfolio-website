import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import siteConfig from '../../../data/site-config.json';
import { submitContactForm } from '../../../lib/supabase';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanSingleLine(value) {
  return value.replace(/[\u0000-\u001f\u007f]/g, ' ').trim();
}

function invalidRequest(message) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return invalidRequest('Request body must be valid JSON.');
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return invalidRequest('Request body must be a JSON object.');
  }

  const { name, email, request_type, message } = body;
  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string' ||
    (request_type !== undefined && typeof request_type !== 'string')
  ) {
    return invalidRequest('Name, email, and message must be strings.');
  }
  if (
    name.length > 100 ||
    email.length > 254 ||
    (request_type && request_type.length > 100) ||
    message.length > 3000
  ) {
    return invalidRequest('One or more fields exceed the allowed length.');
  }

  const cleanedName = cleanSingleLine(name);
  const cleanedEmail = cleanSingleLine(email).toLowerCase();
  const cleanedRequestType = cleanSingleLine(request_type || 'General Inquiry');
  const cleanedMessage = message
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, '')
    .trim();

  if (!cleanedName || !cleanedEmail || !cleanedMessage) {
    return invalidRequest('Name, email, and message are required.');
  }
  if (cleanedName.length > 100 || cleanedEmail.length > 254) {
    return invalidRequest('Name or email exceeds the allowed length.');
  }
  if (!EMAIL_PATTERN.test(cleanedEmail)) {
    return invalidRequest('Please provide a valid email address.');
  }
  if (!cleanedRequestType || cleanedRequestType.length > 100) {
    return invalidRequest('Request type must be 1 to 100 characters.');
  }
  if (cleanedMessage.length > 3000) {
    return invalidRequest('Message must be 3000 characters or fewer.');
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return NextResponse.json(
      { error: 'Contact email service is not configured.' },
      { status: 503 }
    );
  }

  const createdAt = new Date().toISOString();
  const payload = {
    name: cleanedName,
    email: cleanedEmail,
    request_type: cleanedRequestType,
    message: cleanedMessage,
    source_page: 'portfolio_api',
    created_at: createdAt
  };
  const idempotencyKey = request.headers.get('idempotency-key');
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send(
      {
        from,
        to: [siteConfig.email],
        replyTo: cleanedEmail,
        subject: `Nuevo contacto desde mi portafolio: ${cleanedRequestType}`,
        text: [
          'Nuevo mensaje recibido desde el formulario del portafolio.',
          '',
          `Nombre: ${cleanedName}`,
          `Correo: ${cleanedEmail}`,
          `Tipo de consulta: ${cleanedRequestType}`,
          `Fecha de envío (UTC): ${createdAt}`,
          '',
          'Mensaje:',
          cleanedMessage
        ].join('\n')
      },
      idempotencyKey ? { idempotencyKey } : undefined
    );

    if (error) {
      console.error('Resend rejected a contact email.');
      return NextResponse.json(
        { error: 'Could not send your message. Please try again later.' },
        { status: 502 }
      );
    }
  } catch {
    console.error('Contact email delivery request failed.');
    return NextResponse.json(
      { error: 'Could not send your message. Please try again later.' },
      { status: 502 }
    );
  }

  let storage = { stored: false };
  try {
    storage = await submitContactForm(payload);
  } catch {
    console.error('Contact email was sent, but Supabase storage failed.');
  }

  return NextResponse.json({ success: true, stored: storage.stored });
}
