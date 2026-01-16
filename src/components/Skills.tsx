import { Code, BarChart3, Palette, Users2, Wrench } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const categoryIcons: Record<string, any> = {
  'Digital Marketing': Code,
  'Analytics & Data': BarChart3,
  'Creative & Design': Palette,
  'Management & Leadership': Users2,
  'Technical Skills': Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                border: '2px solid var(--primary)',
              }}
            >
              <Code size={18} style={{ color: 'var(--primary)' }} />
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', fontFamily: "'Orbitron', sans-serif", letterSpacing: '1.5px' }}>
                SKILLS & EXPERTISE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <span style={{ color: 'var(--text-primary)' }}>Technical </span>
              <span
                className="animate-gradient"
                style={{
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                }}
              >
                Proficiency
              </span>
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              Expertise across marketing, analytics, design, and technical domains
            </p>
          </div>

          <div className="space-y-12">
            {resumeData.skills.map((skillCategory, categoryIndex) => {
              const IconComponent = categoryIcons[skillCategory.category] || Code;
              
              return (
                <div
                  key={skillCategory.category}
                  className="p-8 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.03) 0%, rgba(0,212,255,0.03) 100%)',
                    border: '2px solid var(--border)',
                  }}
                  data-testid={`skill-category-${skillCategory.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                        border: '2px solid var(--primary)',
                      }}
                    >
                      <IconComponent size={20} style={{ color: 'var(--primary)' }} />
                    </div>
                    <h3 className="text-2xl font-bold"
                      style={{
                        background: 'var(--gradient-1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {skillCategory.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <div key={skill.name} className="group" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                            {skill.name}
                          </span>
                          <span className="text-sm font-bold" style={{ color: 'var(--primary)' }}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-darker)' }}>
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${skill.level}%`,
                              background: 'var(--gradient-1)',
                              boxShadow: '0 0 10px rgba(0,255,136,0.5)',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}