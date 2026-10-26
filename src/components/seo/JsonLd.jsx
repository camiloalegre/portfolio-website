import siteConfig from '../../data/site-config.json';
import socialLinks from '../../data/social-links.json';

export default function JsonLd() {
  const sameAsUrls = socialLinks
    .map((s) => s.url)
    .filter((url) => url.startsWith('http'));

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lima',
      addressCountry: 'Peru'
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    sameAs: sameAsUrls,
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidad César Vallejo'
    },
    knowsAbout: [
      'Industrial Engineering',
      'Investment Analytics',
      'Data Analytics',
      'Data Engineering',
      'Machine Learning',
      'Google Cloud Platform',
      'BigQuery',
      'Power BI',
      'Looker Studio',
      'SQL',
      'Python',
      'Data Warehousing',
      'Data Modeling'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
