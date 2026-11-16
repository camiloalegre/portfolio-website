
'use client';

import { useEffect } from 'react';

export default function ProjectViewTracker({ project }) {
  useEffect(() => {
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    window.dataLayer.push({
      event: 'view_project',
      project_id: project.id,
      project_name: project.title,
      project_category: project.category,
    });
  }, [project]);

  return null;
}
