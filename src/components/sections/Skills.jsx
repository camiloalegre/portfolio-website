'use client';

import { Terminal, Cpu, Database, Code, Layers, BarChart3, Palette, Languages } from 'lucide-react';
import skillsData from '../../data/skills.json';
import styles from '../../styles/skills.module.css';
import FadeIn from '../ui/FadeIn';
import TechOrbit from '../ui/TechOrbit';

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Machine Learning and AI': return <Cpu size={20} color="#60a5fa" />;
      case 'Analytics and Visualization': return <BarChart3 size={20} color="#fbbf24" />;
      case 'Cloud and Data Engineering': return <Database size={20} color="#3b82f6" />;
      case 'Databases': return <Database size={20} color="#38bdf8" />;
      case 'Creative Tools': return <Palette size={20} color="#f472b6" />;
      case 'Languages': return <Languages size={20} color="#34d399" />;
      case 'Programming and Data Processing': return <Code size={20} color="#34d399" />;
      default: return <Terminal size={20} color="#60a5fa" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <div className="sectionBadge">
              <Terminal size={14} />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="sectionTitle">Skills & Toolchain</h2>
            <p className="sectionSubtitle">
              Practical tools and technologies across analytics, data engineering, and creative work.
            </p>
          </div>

          <div className={styles.skillsGrid}>
            {skillsData.map((cat, idx) => (
              <div key={idx} className={styles.categoryCard}>
                <div className={styles.cardHeader}>
                  <div style={{ marginBottom: '0.6rem' }}>
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className={styles.categoryTitle}>{cat.category}</h3>
                  <p className={styles.categoryDesc}>{cat.description}</p>
                </div>

                <div className={styles.skillList}>
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`${styles.skillItem} ${skill.highlight ? styles.skillHighlight : ''}`}
                    >
                      <span className={styles.skillName}>{skill.name}</span>
                      {skill.detail && <span className={styles.skillLevel}>{skill.detail}</span>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </FadeIn>
      </div>
    </section>
  );
}
