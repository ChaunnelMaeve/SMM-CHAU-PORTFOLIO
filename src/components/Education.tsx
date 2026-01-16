import { GraduationCap, Calendar, MapPin, Award, Trophy } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-darker)' }}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                border: '2px solid var(--primary)',
              }}
            >
              <GraduationCap size={18} style={{ color: 'var(--primary)' }} />
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', fontFamily: "'Orbitron', sans-serif", letterSpacing: '1.5px' }}>
                EDUCATION & CERTIFICATIONS
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <span style={{ color: 'var(--text-primary)' }}>Academic </span>
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
                Background
              </span>
            </h2>
          </div>

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
              <GraduationCap size={28} style={{ color: 'var(--primary)' }} />
              Education
            </h3>
            <div className="space-y-6">
              {resumeData.education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-8 rounded-xl transition-all duration-300 hover:translate-x-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                    border: '2px solid var(--border)',
                  }}
                  data-testid={`education-${edu.id}`}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-bold mb-2"
                        style={{
                          background: 'var(--gradient-1)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {edu.degree}
                      </h4>
                      <div className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        {edu.institution}
                      </div>
                      {edu.department && (
                        <div className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                          {edu.department}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} style={{ color: 'var(--primary)' }} />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} style={{ color: 'var(--primary)' }} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {edu.description}
                    </p>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h5 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--primary)' }}>
                        <Trophy size={16} />
                        LEADERSHIP & ACHIEVEMENTS
                      </h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--primary)' }} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
              <Award size={28} style={{ color: 'var(--primary)' }} />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {resumeData.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 rounded-xl transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                    border: '2px solid var(--border)',
                  }}
                  data-testid={`certification-${cert.id}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                        border: '2px solid var(--primary)',
                      }}
                    >
                      <Award size={24} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {cert.name}
                      </h4>
                      <div className="text-sm mb-2"
                        style={{
                          background: 'var(--gradient-1)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {cert.issuer} • {cert.date}
                      </div>
                      <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {cert.description}
                      </p>
                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 rounded text-xs font-semibold"
                              style={{
                                background: 'rgba(0,255,136,0.1)',
                                color: 'var(--primary)',
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}