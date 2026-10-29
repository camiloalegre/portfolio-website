'use client';

import { useState } from 'react';
import { Compass } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';
import projectsData from '../../data/projects.json';
import styles from '../../styles/projects.module.css';
import FadeIn from '../ui/FadeIn';

const CATEGORIES = [
  'All',
  'Data Pipeline',
  'Exploratory Data Analysis',
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const tier1Projects = filteredProjects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <FadeIn>
          <div className="sectionHeader">
            <div className="sectionBadge">
              <Compass size={14} />
              <span>Curated Portfolio Catalog</span>
            </div>
            <h2 className="sectionTitle">The Project Observatory</h2>
            <p className="sectionSubtitle">
              Selected work in investment data pipelines, health analytics, and price analysis.
            </p>
          </div>
        </FadeIn>

        {/* Filter Bar */}
        <div className={styles.filterBar}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterActive : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div key={selectedCategory}>
          {tier1Projects.length > 0 && (
            <FadeIn delay={0.1}>
              <div className={styles.heroGrid}>
                {tier1Projects.map((project) => (
                  <ProjectCard key={project.id} project={project} tier={1} />
                ))}
              </div>
            </FadeIn>
          )}

        </div>
      </div>
    </section>
  );
}
