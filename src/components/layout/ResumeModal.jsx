'use client';

import { useEffect } from 'react';
import { X, FileText, Mail } from 'lucide-react';
import { LinkedinIcon } from '../ui/Icons';
import styles from '../../styles/resumemodal.module.css';
export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        <div className={styles.iconWrapper}>
          <FileText size={28} />
        </div>

        <span className={styles.badge}>Status: In Live Refresh</span>

        <h3 className={styles.title}>Resume Currently Updating</h3>

        <p className={styles.description}>
          Camilo is building data-driven solutions and expanding his expertise in
          <strong> Google Cloud Platform (GCP), Data Engineering, and Machine Learning</strong>,
          with a focus on automated data pipelines, business intelligence, and
          <strong> AI-powered investment analytics</strong> through his Investment AI Lab project.
        </p>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statVal}>3+ Years</div>
            <div className={styles.statLabel}>Data Analytics & Engineering</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>GCP + AI</div>
            <div className={styles.statLabel}>Cloud Data & Investment Analytics</div>
          </div>
        </div>

        <div className={styles.actions}>
          <a
            href="https://www.linkedin.com/in/camiloalegre11/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.actionBtn} ${styles.primaryAction}`}
          >
            <LinkedinIcon size={18} />
            <span>View Complete Profile on LinkedIn</span>
          </a>

          <a
            href="mailto:camiloalegre11@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%94%20Resume%20Request"
            className={`${styles.actionBtn} ${styles.secondaryAction}`}
          >
            <Mail size={18} />
            <span>Request Direct PDF via Email</span>
          </a>
        </div>

        <p className={styles.footerNote}>
          Tip: All project repositories, notebooks, and code benchmarks are linked below in the project observatory.
        </p>
      </div>
    </div>
  );
}
