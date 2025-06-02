import React from 'react';
import modules from '../Modules.json';

interface Module {
  title: string;
  description: string;
  dateRange: string;
  weekRange: string;
}

const Project: React.FC = () => {
  const projectModules = (modules as Module[]).filter(
    (mod) => mod.description.includes('✅ Project:') || mod.description.includes('✅ Homework')
  );

  const extractProjects = (desc: string) => {
    return desc
      .split('\n')
      .filter(line => line.trim().startsWith('✅ Project') || line.trim().startsWith('✅ Homework'))
      .map(line => line.replace(/✅ (Project|Homework):?\s*/i, '').trim());
  };

  const allProjects = projectModules.flatMap(mod => extractProjects(mod.description));

  return (
    <section
      id="project"
      style={{
        maxWidth: 960,
        margin: '3rem auto',
        padding: '0 1rem',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: '#222',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#1976d2',
          fontWeight: 700,
          fontSize: '3rem',
          marginBottom: '3rem',
          letterSpacing: '1px',
        }}
      >
        Projects from Course Modules
      </h2>

      {projectModules.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '1.25rem', color: '#666' }}>
          No projects found in the modules.
        </p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {projectModules.map((mod, index) => {
          const projects = extractProjects(mod.description);
          return (
            <article
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '1.8rem 2.2rem',
                boxShadow: '0 10px 20px rgba(25, 118, 210, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 30px rgba(25, 118, 210, 0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 20px rgba(25, 118, 210, 0.1)';
              }}
            >
              <h3
                style={{
                  color: '#1976d2',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  marginBottom: '0.8rem',
                }}
              >
                {mod.title}
              </h3>
              <p
                style={{
                  fontWeight: 600,
                  color: '#555',
                  marginBottom: '1.4rem',
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                }}
              >
                {mod.dateRange} &bull; {mod.weekRange}
              </p>

              <ul
                style={{
                  paddingLeft: '1.4rem',
                  color: '#444',
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  listStyleType: 'none',
                }}
              >
                {projects.map((project, i) => (
                  <li
                    key={i}
                    style={{
                      position: 'relative',
                      marginBottom: '0.8rem',
                      paddingLeft: '1.5rem',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.3rem',
                        width: '0.8rem',
                        height: '0.8rem',
                        backgroundColor: '#1976d2',
                        borderRadius: '50%',
                      }}
                    />
                    {project}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      {/* Summary Section */}
      <section
        style={{
          marginTop: '4rem',
          backgroundColor: '#e3f2fd',
          borderRadius: '16px',
          padding: '2rem 2.5rem',
          boxShadow: '0 12px 25px rgba(25, 118, 210, 0.15)',
          color: '#0d47a1',
          fontWeight: 600,
          fontSize: '1.15rem',
          lineHeight: 1.6,
          textAlign: 'center',
          letterSpacing: '0.5px',
        }}
      >
        <p style={{ marginBottom: '0.6rem' }}>
          Total Projects: <strong>{allProjects.length}</strong>
        </p>
        <p style={{ maxWidth: 800, margin: '0 auto', fontWeight: 500, fontSize: '1rem', color: '#154c99' }}>
          Projects Summary: {allProjects.length > 0 ? allProjects.join(', ') : 'No projects available.'}
        </p>
      </section>
    </section>
  );
};

export default Project;
