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

Open [https://camiloalegre-portfolio.vercel.app]([http://localhost:3000](https://camiloalegre-portfolio.vercel.app)) to view the website.

## Contact Form Email

The contact form uses Resend to send messages to the email address configured in `src/data/site-config.json`:

`camiloalegre11@gmail.com`

Configure the following server-side environment variables:

- `RESEND_API_KEY` — A Resend API key authorized to send emails.
- `RESEND_FROM_EMAIL` — A sender address authorized by Resend, such as `Portfolio Contact <contact@your-verified-domain.com>`.

The visitor's email address is used as `Reply-To`, not as the sender.

### Resend Setup

1. Create an account at [Resend](https://resend.com/).
2. Verify a sending domain and configure the DNS records provided by Resend.
3. Create an API key and configure `RESEND_API_KEY`.
4. In Vercel, navigate to **Project Settings → Environment Variables** and add both variables to the appropriate deployment environments.
5. Redeploy the application to apply the configuration.

For local development, create a `.env.local` file in the project root and add the variables there. Never commit API keys or other secrets to Git.

### Optional Supabase Integration

Supabase can be configured for contact form data storage using:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Create the `contacts` table expected by the existing integration before enabling storage. Keep the table's access policies appropriately configured.

Email delivery and database storage are separate operations. A successful email submission should not be interpreted as proof that the contact record was stored successfully.

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
├── .env.example
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
