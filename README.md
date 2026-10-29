# Camilo Alegre Huaman — Portfolio

A responsive personal portfolio website showcasing my work as an Industrial Engineer and Data Analyst, with a focus on data analytics, data engineering, investment analytics, Google Cloud Platform (GCP), and Machine Learning.

The website also reflects my creative background as a digital artist, combining analytical thinking with visual storytelling.

## Built With

- **Next.js** — App Router and React
- **CSS Modules** — Component-based styling
- **Framer Motion** — Animations and interactive transitions
- **Three.js** — 3D visual elements
- **JSON** — Data-driven portfolio content for projects, experience, education, certifications, and skills
- **Supabase** *(optional)* — Contact form data storage
- **Resend** — Contact form email delivery

## Run Locally

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/camiloalegre/portfolio-website.git
cd portfolio-website
npm install
npm run dev
```

Open https://camiloalegre-portfolio.vercel.app to view the site.

## Contact Form Email

The contact form submits to the server-side Next.js route at `/api/contact`. The route sends the message with Resend to the email address configured in `src/data/site-config.json`:

`camiloalegre11@gmail.com`

Configure these server-side environment variables:

- `RESEND_API_KEY` — Your Resend API key. Keep it private; do not use a `NEXT_PUBLIC_` prefix or commit it to Git.
- `RESEND_FROM_EMAIL` — The sender address. For example, `Portfolio Contact <contact@your-verified-domain.com>`.

The visitor's email address is used as `Reply-To`, not as the sender. Resend must authorize the sender address; the recipient is set by the site's `email` value in `src/data/site-config.json`.

### Resend Setup

1. Create an account at [Resend](https://resend.com/).
2. For production, add and verify a domain in Resend, then publish the DNS records Resend provides. Use a sender on that verified domain for `RESEND_FROM_EMAIL`.
3. Create an API key in Resend and set `RESEND_API_KEY`.
4. For a quick test before verifying a domain, set `RESEND_FROM_EMAIL=onboarding@resend.dev`. Resend restricts this testing sender to the account owner's email address; it is not for sending to arbitrary recipients or production use.
5. For local development, create `.env.local` in the project root:

   ```dotenv
   RESEND_API_KEY=re_your_resend_api_key
   RESEND_FROM_EMAIL=onboarding@resend.dev
   ```

   Replace the placeholder with your own key. Never commit `.env.local` or share your API key. Restart the development server after changing environment variables.
6. In Vercel, go to **Project Settings → Environment Variables**, add both variables for the desired deployment environments, and redeploy.

The contact form can only send email when both Resend variables are configured. If they are missing, the API responds that the email service is not configured. Resend errors are returned as a failed submission; the form also provides the site's direct email address as a fallback.

### Optional Supabase Integration

Supabase is optional and is only used to store a copy of submitted contact details. Configure:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Create a `contacts` table with columns matching the submitted fields: `name`, `email`, `request_type`, `message`, `source_page`, and `created_at`. Configure Row Level Security so the application can insert submissions without granting public read access.

Email delivery and database storage are separate operations. A successful submission means Resend accepted the email; it does not guarantee that Supabase stored the contact record. Supabase storage failures are logged on the server and do not undo a successfully sent email.

## Project Structure

```text
portfolio-website/
├── src/
│   ├── app/           # App Router pages, metadata, and API routes
│   ├── components/    # Portfolio sections and reusable UI
│   ├── data/          # Portfolio content and configuration
│   └── styles/        # Global styles and CSS Modules
├── public/
│   └── images/        # Static images and visual assets
├── package.json
└── README.md
```

*Note: This is a simplified overview. The actual repository may contain additional files and directories.*

## Customization

Portfolio content is managed through JSON files in `src/data/`. These files contain information such as projects, professional experience, education, certifications, skills, and site configuration.

The components and CSS Modules can be modified to customize the layout, visual appearance, animations, and responsive behavior.

## Deployment

The website can be deployed to [Vercel](https://vercel.com/).

For production deployments, configure the required environment variables in the Vercel project settings. New commits pushed to the connected GitHub repository can trigger deployments according to the project's deployment configuration.

## License and Attribution

This project is based on the portfolio website created by **[Souhrid Dey](https://github.com/Souhrid-Dey)**:

**Original repository:** [Souhrid-Dey/portfolio-website](https://github.com/Souhrid-Dey/portfolio-website)

The original project is distributed under the MIT License. The original copyright notice and license terms must be retained in accordance with that license.

This portfolio has been customized to reflect my professional background, projects, visual identity, and personal interests. The original author is credited for the source project and is not implied to endorse or be affiliated with this customized version.

See the repository's `LICENSE` file for the applicable license terms.

## Author

**Camilo Alegre Huaman**

Industrial Engineer | Data Analyst | Data Engineering

- **GitHub:** [camiloalegre](https://github.com/camiloalegre)
- **LinkedIn:** [camiloalegre11](https://www.linkedin.com/in/camiloalegre11/)

---

Built to showcase my work in data analytics, engineering, and the intersection of technology and creativity.