import React from 'react';
import modules from '../Modules.json'; // JSON ফাইল ইম্পোর্ট

interface Module {
  title: string;
  description: string;
  dateRange: string;
  weekRange: string;
}

const Project: React.FC = () => {
  // Filter only modules with Project or Homework
  const projectModules = (modules as Module[]).filter(
    (mod) =>
      mod.description.includes('✅ Project') || mod.description.includes('✅ Homework')
  );

  // Extract projects/homeworks from description
  const extractProjects = (desc: string) =>
    desc
      .split('\n')
      .filter(
        (line) =>
          line.trim().startsWith('✅ Project') || line.trim().startsWith('✅ Homework')
      )
      .map((line) =>
        line
          .replace(/^✅ (Project|Homework)(\s*\d*)?:?\s*/i, '') // Matches '✅ Project 1:' or '✅ Homework:'
          .trim()
      );

  // Flatten list of all projects
  const allProjects = projectModules.flatMap((mod) => extractProjects(mod.description));

  return (
    <section id="project" className="section" style={{ maxWidth: 900, margin: 'auto', marginTop:"20px",  }}>
      <h2
        style={{
          textAlign: 'center',
          color: '#0d47a1',
          fontWeight: '700',
          fontSize: '2.5rem',
          marginBottom: '2rem',
        }}
      >
        Projects from Course Modules
      </h2>

      {projectModules.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>
          No projects found in the modules.
        </p>
      )}

      <div style={{ display: 'grid', gap: '1.75rem' }}>
        {projectModules.map((mod, index) => {
          const projects = extractProjects(mod.description);
          return (
            <div
              key={index}
              style={{
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                borderRadius: '12px',
                padding: '1.5rem 2rem',
                backgroundColor: '#f9fafd',
                borderLeft: '5px solid #0d47a1',
              }}
            >
              <h3 style={{ color: '#0d47a1', fontWeight: 700, marginBottom: '0.75rem' }}>
                {mod.title}
              </h3>
              <p style={{ fontWeight: 500, color: '#555', marginBottom: '1rem' }}>
                <strong>Schedule:</strong> {mod.dateRange} &bull; {mod.weekRange}
              </p>

              <ul style={{ paddingLeft: '1.25rem', color: '#444', fontSize: '1rem', lineHeight: 1.5 }}>
                {projects.map((project, i) => (
                  <li key={i} style={{ marginBottom: '0.6rem' }}>
                    {project}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Beautiful Modern Summary */}
      <div
        style={{
          marginTop: '4rem',
          padding: '2rem',
          borderRadius: '20px',
          background: '#f5f9ff',
          boxShadow: 'inset 3px 3px 8px #d6e4f0, inset -3px -3px 8px #ffffff',
          fontFamily: 'Segoe UI, sans-serif',
          color: '#0d47a1',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 700,
            marginBottom: '1.5rem',
          }}
        >
          📝 Project & Homework Summary
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              padding: '1.25rem 2rem',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              boxShadow: '0 6px 18px rgba(0, 0, 0, 0.07)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#0d47a1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '180px',
            }}
          >
            Total: <span style={{ marginLeft: '0.5rem', color: '#1565c0' }}>{allProjects.length} Project</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem',
          }}
        >
          {allProjects.length > 0 ? (
            allProjects.map((item, index) => (
              <span
                key={index}
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#e3f2fd',
                  color: '#0d47a1',
                  borderRadius: '30px',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  boxShadow: '2px 2px 6px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                }}
              >
                {item}
              </span>
            ))
          ) : (
            <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>No projects available.</p>
          )}
        </div>
      </div>


    </section>
  );
};

export default Project;
