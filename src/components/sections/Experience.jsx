'use client';

import { Briefcase } from 'lucide-react';
import experienceData from '../../data/experience.json';
import styles from '../../styles/experience.module.css';
import FadeIn from '../ui/FadeIn';

export default function Experience() {
  const professionalExperience = experienceData.filter((exp) => exp.type !== 'additional');
  const additionalExperience = experienceData.filter((exp) => exp.type === 'additional');

  return (
    <section id="experience" className="section">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <div className="sectionBadge">
              <Briefcase size={14} />
              <span>Career History</span>
            </div>
            <h2 className="sectionTitle">Enterprise Experience</h2>
            <p className="sectionSubtitle">
              Data analytics, cost control, quality assurance, and reporting experience.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className={styles.timeline}>
            {professionalExperience.map((exp, idx) => (
              <div key={idx} className={styles.timelineItem}>
                <div className={styles.timelineDot} />

                <div className={styles.experienceCard}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.roleTitle}>{exp.role}</h3>
                      <div className={styles.companyName}>{exp.company}</div>
                    </div>

                    <div className={styles.metaInfo}>
                      <div className={styles.period}>{exp.period}</div>
                      <div className={styles.location}>{exp.location}</div>
                    </div>
                  </div>

                  {exp.summary && <p className={styles.summary}>{exp.summary}</p>}

                  {exp.highlights.length > 0 && (
                    <ul className={styles.highlightsList}>
                      {exp.highlights.map((item, hIdx) => (
                        <li key={hIdx} className={styles.highlightItem}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.skills.length > 0 && (
                    <div className={styles.skillsCluster}>
                      {exp.skillsLabel && <span className={styles.skillsLabel}>{exp.skillsLabel}</span>}
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className={styles.skillPill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {additionalExperience.length > 0 && (
          <FadeIn delay={0.3}>
            <div className={styles.additionalSection}>
              <h3 className={styles.additionalTitle}>Additional Experience</h3>
              <div className={styles.additionalGrid}>
                {additionalExperience.map((item) => (
                  <article key={`${item.company}-${item.role}`} className={styles.experienceCard}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h4 className={styles.roleTitle}>{item.role}</h4>
                        <div className={styles.companyName}>{item.company}</div>
                      </div>
                      <div className={styles.metaInfo}>
                        <div className={styles.period}>{item.period}</div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
