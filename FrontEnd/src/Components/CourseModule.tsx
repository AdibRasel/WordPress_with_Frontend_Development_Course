import React, { useRef, useState, useEffect } from 'react';
import modules from '../Modules.json'; // import JSON file

interface Module {
  title: string;
  description: string;
  dateRange: string;
  weekRange: string;
}

const CourseModule: React.FC = () => {
  const totalClasses = 4 * 12;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    modules.forEach((_, index) => {
      const el = contentRefs.current[index];
      if (el) {
        if (openIndex === index) {
          el.style.height = el.scrollHeight + 'px';
        } else {
          el.style.height = '0px';
        }
      }
    });
  }, [openIndex]);

  return (
    <section
      id="course-module"
      style={{
        minHeight: '100vh',
        padding: '4rem 1.5rem',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        fontFamily: "'Poppins', sans-serif", marginTop:"20px" 
      }}
    >
      <div className="container" style={{ maxWidth: 900 }}>
        <h2
          style={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '2.8rem',
            marginBottom: '0.4rem',
            color: '#0d47a1',
            letterSpacing: '2px',
          }}
        >
          Course Modules
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: '#555',
            fontSize: '1.15rem',
            marginBottom: '3rem',
            fontWeight: 500,
          }}
        >
          Starting from <strong>June 15, 2025</strong> &bull; Duration:{' '}
          <strong>3 Months</strong> &bull; 4 Classes per Week &bull; Total:{' '}
          <strong>{totalClasses} Classes</strong>
        </p>

        <div
          style={{
            boxShadow:
              '0 8px 24px rgba(0,0,0,0.12), 0 12px 16px rgba(0,0,0,0.08)',
            borderRadius: '12px',
            backgroundColor: '#fff',
            overflow: 'hidden',
          }}
        >
          {modules.map((module: Module, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  borderBottom: index !== modules.length - 1 ? '1px solid #e0e0e0' : 'none',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                }}
                aria-expanded={isOpen}
              >
                <div
                  onClick={() => toggle(index)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1.25rem 1.75rem',
                    backgroundColor: isOpen ? '#e3f2fd' : '#fafafa',
                    transition: 'background-color 0.3s ease',
                    borderRadius: isOpen ? '12px 12px 0 0' : '12px',
                    boxShadow: isOpen
                      ? 'inset 0 0 10px rgba(13, 71, 161, 0.2)'
                      : 'none',
                    fontWeight: 600,
                    fontSize: '1.2rem',
                    color: '#0d47a1',
                    userSelect: 'none',
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(index);
                    }
                  }}
                >
                  <span>{module.title}</span>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: '#666',
                      fontWeight: 500,
                      gap: '12px',
                    }}
                  >
                    <span>{module.dateRange}</span>
                    <span style={{ fontWeight: 'bold' }}>|</span>
                    <span>{module.weekRange}</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="#0d47a1"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        marginLeft: '8px',
                      }}
                      viewBox="0 0 24 24"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </div>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  style={{
                    height: isOpen ? undefined : '0px',
                    overflow: 'hidden',
                    transition: 'height 0.4s ease',
                    backgroundColor: '#fafafa',
                    borderRadius: '0 0 12px 12px',
                  }}
                >
                  <div
                    style={{
                      padding: '1rem 2rem 1.5rem',
                      color: '#444',
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-line', // to respect new lines
                      userSelect: 'text',
                    }}
                  >
                    {module.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseModule;
