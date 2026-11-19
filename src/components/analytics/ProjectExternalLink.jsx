
'use client';

export default function ProjectExternalLink({
  href,
  project,
  children,
  className,
}) {
  const handleClick = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'click_project_external',
      project_id: project.id,
      project_name: project.title,
      link_url: href,
      link_text: typeof children === 'string' ? children : '',
      link_domain: new URL(href).hostname,
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
