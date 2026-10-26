'use client';

import { ArrowUp, Mail, Palette } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from '../ui/Icons';
import socialLinks from '../../data/social-links.json';
import siteConfig from '../../data/site-config.json';
import styles from '../../styles/footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Linkedin': return <LinkedinIcon size={18} />;
      case 'Github': return <GithubIcon size={18} />;
      case 'Instagram': return <InstagramIcon size={18} />;
      case 'Palette': return <Palette size={18} />;
      case 'Mail': return <Mail size={18} />;
      default: return <GithubIcon size={18} />;
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brandInfo}>
          <h3 className={styles.brandTitle}>The Data Observatory</h3>
          <p className={styles.brandDesc}>
            Data analytics, investment insights, and cloud data solutions built with Python, SQL, and Google Cloud.
          </p>
        </div>

        <div className={styles.socialRow}>
          {socialLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={styles.socialIcon}
              title={item.name}
              aria-label={item.name}
            >
              {getIcon(item.icon)}
            </a>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} {siteConfig.name}. Designed & built with Next.js & Vanilla CSS.
          </div>

          <button onClick={scrollToTop} className={styles.scrollTopBtn} aria-label="Scroll back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
