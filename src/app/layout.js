import './globals.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ParallaxBackground from '../components/ui/ParallaxBackground';
import JsonLd from '../components/seo/JsonLd';
import siteConfig from '../data/site-config.json';
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    'Camilo Alegre Huaman',
    'Data Analyst',
    'Investment Analytics',
    'Data Engineering',
    'Google Cloud Platform',
    'BigQuery',
    'Power BI',
    'Machine Learning',
    'Lima Peru'
  ],
  authors: [{ name: siteConfig.name, url: 'https://github.com/camiloalegre' }],
  creator: siteConfig.name,
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'Camilo Alegre — Data Observatory',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body suppressHydrationWarning>
        <ParallaxBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
