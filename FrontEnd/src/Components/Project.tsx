import React from 'react';
import modules from '../Modules.json'; // JSON ফাইল ইম্পোর্ট

interface Module {
  title: string;
  description: string;
  dateRange: string;
  weekRange: string;
}

const Project: React.FC = () => {
  // Filter modules with projects or homework in description
  const projectModules = (modules as Module[]).filter(
    (mod) => mod.description.includes('✅ Project:') || mod.description.includes('✅ Homework')
  );

  // Extract individual projects/homework from description lines
  const extractProjects = (desc: string) => {
    return desc
      .split('\n')
      .filter(line => line.trim().startsWith('✅ Project') || line.trim().startsWith('✅ Homework'))
      .map(line => line.replace(/✅ (Project|Homework):?\s*/i, '').trim());
  };

  // Collect all projects from all filtered modules into one array
  const allProjects = projectModules.flatMap(mod => extractProjects(mod.description));

  return (
    <section id="project" className="section" style={{ maxWidth: 900, margin: 'auto' }}>
      <h2 style={{ textAlign: 'center', color: '#0d47a1', fontWeight: '700', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Projects from Course Modules
      </h2>

      {projectModules.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666' }}>No projects found in the modules.</p>
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
              <h3 style={{ color: '#0d47a1', fontWeight: 700, marginBottom: '0.75rem' }}>{mod.title}</h3>
              <p style={{ fontWeight: '500', color: '#555', marginBottom: '1rem' }}>
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

      {/* Summary Section */}
      <div
        style={{
          marginTop: '3rem',
          padding: '1.5rem 2rem',
          backgroundColor: '#e3f2fd',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(13, 71, 161, 0.15)',
          color: '#0d47a1',
          fontWeight: 600,
          fontSize: '1.1rem',
          lineHeight: 1.5,
        }}
      >
        <p>
          Total Projects: <strong>{allProjects.length}</strong>
        </p>
        <p>
          Projects Summary:{' '}
          {allProjects.length > 0
            ? allProjects.join(', ')
            : 'No projects available.'}
        </p>
      </div>
    </section>
  );
};

export default Project;
