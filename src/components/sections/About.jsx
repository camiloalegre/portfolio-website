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
                focused on <strong>Data Engineering and AI-driven solutions</strong>.
              </p>

              <p>
                My experience involves transforming raw data into reliable, actionable insights to support
                business decision-making. I work with <strong>Python, SQL, and Google Cloud Platform (GCP) </strong> 
                to build ETL workflows, integrate and validate data, and automate data processes. I also develop
                and maintain interactive dashboards and reports using <strong>Looker Studio and Power BI</strong>,
                enabling performance monitoring and data-driven decisions.
              </p>

              <p>
                Building on this experience, I am expanding my expertise in
                <strong>Data Engineering, Artificial Intelligence, Large Language Models (LLMs), and Machine Learning</strong>.
                My goal is to build scalable data pipelines and intelligent systems that connect reliable data
                infrastructure with practical AI applications.
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
