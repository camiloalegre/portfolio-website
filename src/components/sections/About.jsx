'use client';

import Image from 'next/image';
import { UserCheck } from 'lucide-react';
import siteConfig from '../../data/site-config.json';
import styles from '../../styles/about.module.css';
import FadeIn from '../ui/FadeIn';

export default function About() {
  return (
    <section id="about" className={`section ${styles.aboutSection}`}>
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <div className="sectionBadge">
              <UserCheck size={14} />
              <span>Profile & Trajectory</span>
            </div>
            <h2 className="sectionTitle">Behind the Observatory</h2>
            <p className="sectionSubtitle">
              Industrial engineering, analytics, and practical data solutions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.aboutGrid}>
            {/* Avatar Column */}
            <div className={styles.avatarColumn}>
              <div className={styles.avatarCard}>
                <Image
                  src="/images/avatar.png"
                  alt="Camilo Alegre Huaman"
                  className={styles.avatarImg}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                />
                <div className={styles.avatarOverlay}>
                  <span className={styles.avatarName}>Camilo Alegre Huaman</span>
                  <span className={styles.avatarRole}>Industrial Engineer & Data Analyst</span>
                </div>
              </div>
            </div>

          {/* Narrative Column */}
          <div className={styles.contentColumn}>
            <div className={styles.narrative}>
              <p>
                I am an <strong>Industrial Engineer and Data Analyst</strong> based in Lima, Peru,
                interested in investment analytics and using data to support practical business decisions.
                My work combines analytical problem-solving with experience in reporting, cost control,
                quality processes, and data preparation.
              </p>

              <p>
                I build data workflows and analytical solutions with <strong>Python, SQL, BigQuery,
                and Google Cloud Platform</strong>, and create dashboards in Power BI and Looker Studio.
                I am also interested in applying <strong>Machine Learning</strong> to predictive analytics
                and investment-focused questions.
              </p>

              <p>
                I hold a degree in <strong>Industrial Engineering</strong> from Universidad César Vallejo,
                where I received a PRONABEC scholarship and graduated in the top third of my class.
              </p>
            </div>

            <div className={styles.statsGrid}>
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <div className={styles.statSub}>{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
