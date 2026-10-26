'use client';

import { GraduationCap, Award } from 'lucide-react';
import educationData from '../../data/education.json';
import certifications from '../../data/certifications.json';
import styles from '../../styles/education.module.css';
import FadeIn from '../ui/FadeIn';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <div className="sectionBadge">
              <GraduationCap size={14} />
              <span>Academic Credentials</span>
            </div>
            <h2 className="sectionTitle">Education & Specialization</h2>
            <p className="sectionSubtitle">
              Industrial Engineering education and professional learning.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.educationGrid}>
            {educationData.map((item, idx) => {
              const isFeatured = idx === 0;

              return (
                <div
                  key={idx}
                  className={`${styles.educationCard} ${isFeatured ? styles.featuredCard : ''}`}
                >
                  <div>
                    <div className={styles.badgeGroup}>
                      <span className={styles.gradeBadge}>{item.grade}</span>
                      <span className={styles.periodBadge}>{item.period}</span>
                    </div>

                    <h3 className={styles.degreeTitle}>{item.degree}</h3>
                    <div className={styles.institution}>{item.institution}</div>
                    {item.location && <div className={styles.location}>{item.location}</div>}
                  </div>

                  <ul className={styles.highlightsList}>
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className={styles.highlightItem}>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className={styles.skillsGroup}>
                    {item.skills.map((skill, sIdx) => (
                      <span key={sIdx} className={styles.skillPill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div id="certifications" className={styles.certifications}>
            <div className="sectionHeader">
              <div className="sectionBadge">
                <Award size={14} />
                <span>Professional Development</span>
              </div>
              <h3 className="sectionTitle">Certifications & Courses</h3>
            </div>
            <div className={styles.educationGrid}>
              {certifications.map((certification) => (
                <article key={certification.name} className={styles.educationCard}>
                  <div className={styles.badgeGroup}>
                    <span className={styles.periodBadge}>{certification.year}</span>
                  </div>
                  <h4 className={styles.degreeTitle}>{certification.name}</h4>
                  <div className={styles.institution}>{certification.issuer}</div>
                  {certification.credentialId && (
                    <div className={styles.location}>Credential ID: {certification.credentialId}</div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
