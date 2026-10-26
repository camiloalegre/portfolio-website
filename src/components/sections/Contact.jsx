'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageSquare, CheckCircle, AlertCircle, Loader2, Link as LinkIcon, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from '../ui/Icons';
import siteConfig from '../../data/site-config.json';
import styles from '../../styles/contact.module.css';
import FadeIn from '../ui/FadeIn';
import DataCore3D from '../ui/DataCore3D';

/**
 * Contact Section Component
 * 
 * Renders the communication hub of the portfolio, featuring direct contact details 
 * and an interactive form. Form submissions are processed securely via a Next.js 
 * API route (`/api/contact`), pushing directly into a Supabase PostgreSQL database.
 * 
 * @returns {JSX.Element} The Contact section
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Data Analytics / Engineering Role',
    message: ''
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending your message...' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          request_type: formData.subject,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus({
          state: 'success',
          message: 'Thank you! Your message was received. Camilo will respond promptly.'
        });
        setFormData({
          name: '',
          email: '',
          subject: 'Data Analytics / Engineering Role',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Submission failed');
      }
    } catch (err) {
      setStatus({
        state: 'error',
        message: `Could not submit online. Please email directly at ${siteConfig.email}.`
      });
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <div className="sectionBadge">
              <Mail size={14} />
              <span>Initiate Transmission</span>
            </div>
            <h2 className="sectionTitle">Establish Contact</h2>
            <p className="sectionSubtitle">
              Open to opportunities in data analytics, investment analytics, and data engineering.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.contactGrid}>
            {/* Direct Connect Info */}
            <div className={styles.contactInfo}>
              <div style={{ marginBottom: '1.5rem', position: 'relative', zIndex: 10 }}>
                <h3 className={styles.infoTitle}>Let’s Build Something Impactful</h3>
                <p className={styles.infoDesc}>
                  Whether you would like to discuss <strong>data analytics</strong>, <strong>investment analytics</strong>,
                  or a data engineering opportunity, I’d love to connect.
                </p>
              </div>

              {/* Data Core Canvas - Bounded with overflow hidden and mobile breakpoint scaling */}
              <div className={styles.canvasWrapper}>
                <DataCore3D />
              </div>

              <div className={styles.detailsList}>
                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <Mail size={20} />
                  </div>
                  <div className={styles.detailText}>
                    <div className={styles.detailLabel}>Direct Email</div>
                    <a href={`mailto:${siteConfig.email}`} className={styles.detailValue}>
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {siteConfig.phone && (
                  <div className={styles.detailCard}>
                    <div className={styles.detailIcon}>
                      <Phone size={20} />
                    </div>
                    <div className={styles.detailText}>
                      <div className={styles.detailLabel}>Phone</div>
                      <a href={`tel:${siteConfig.phone.replaceAll(' ', '')}`} className={styles.detailValue}>
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                )}

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <MapPin size={20} />
                  </div>
                  <div className={styles.detailText}>
                    <div className={styles.detailLabel}>Current Location</div>
                    <span className={styles.detailValue}>
                      {siteConfig.location}
                    </span>
                  </div>
                </div>

                <div className={styles.detailCard}>
                  <div className={styles.detailIcon}>
                    <LinkedinIcon size={20} />
                  </div>
                  <div className={styles.detailText}>
                    <div className={styles.detailLabel}>Professional Network</div>
                    <a
                      href="https://www.linkedin.com/in/camiloalegre11/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.detailValue}
                    >
                      linkedin.com/in/camiloalegre11
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send a Direct Transmission</h3>

              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Jenkins"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. s.jenkins@enterprise.com"
                    className={styles.input}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="subject" className={styles.label}>Topic / Inquiring Role</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={styles.select}
                  >
                    <option value="Data Analytics / Engineering Role">Data Analytics / Engineering Role</option>
                    <option value="Investment Analytics">Investment Analytics</option>
                    <option value="Project Collaboration">Project Collaboration</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share details about the role, project, or timeline..."
                    className={styles.textarea}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'loading'}
                  className={`btnPrimary ${styles.submitBtn}`}
                >
                  {status.state === 'loading' ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {status.state === 'success' && (
                  <div className={`${styles.statusMessage} ${styles.statusSuccess}`}>
                    {status.message}
                  </div>
                )}

                {status.state === 'error' && (
                  <div className={`${styles.statusMessage} ${styles.statusError}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
