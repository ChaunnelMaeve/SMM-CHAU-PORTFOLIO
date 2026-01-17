import { Briefcase, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 md:py-24 relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                border: '2px solid var(--primary)',
              }}
            >
              <Briefcase size={16} className="sm:w-[18px] sm:h-[18px]" style={{ color: 'var(--primary)' }} />
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.65rem', fontFamily: "'Orbitron', sans-serif", letterSpacing: '1.5px' }} className="sm:text-xs">
                WORK EXPERIENCE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 px-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <span style={{ color: 'var(--text-primary)' }}>Professional </span>
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
                Journey
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5" style={{ background: 'var(--border)' }} />

            <div className="space-y-8 sm:space-y-10 md:space-y-12">
              {resumeData.workExperience.map((job, index) => (
                <div
                  key={job.id}
                  className="relative pl-12 sm:pl-16 md:pl-20 group"
                  data-testid={`experience-${job.id}`}
                >
                  {/* Timeline Dot */}
                  <div
                    className="absolute left-1.5 sm:left-2.5 md:left-5 top-4 sm:top-6 md:top-8 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                    style={{
                      background: index === 0 ? 'var(--gradient-1)' : 'var(--bg-card)',
                      border: '2px sm:border-[3px] solid var(--primary)',
                      boxShadow: index === 0 ? '0 0 20px rgba(0,255,136,0.5)' : 'none',
                    }}
                  >
                    {index === 0 && (
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ background: 'var(--bg-dark)' }} />
                    )}
                  </div>

                  <div
                    className="p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl transition-all duration-300 hover:translate-x-1 sm:hover:translate-x-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,255,136,0.03) 0%, rgba(0,212,255,0.03) 100%)',
                      border: '2px solid var(--border)',
                    }}
                  >
                    <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1.5 sm:mb-2" style={{ color: 'var(--text-primary)', fontFamily: "'Fira Code', monospace" }}>
                          {job.position}
                        </h3>
                        <div className="text-base sm:text-lg font-semibold mb-2 sm:mb-3"
                          style={{
                            background: 'var(--gradient-1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                          }}
                        >
                          {job.company}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Calendar size={14} className="sm:w-4 sm:h-4" style={{ color: 'var(--primary)' }} />
                          <span>{job.duration}</span>
                        </div>
                        {job.location && (
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <MapPin size={14} className="sm:w-4 sm:h-4" style={{ color: 'var(--primary)' }} />
                            <span>{job.location}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2" style={{ color: 'var(--primary)' }}>
                        <CheckCircle2 size={14} className="sm:w-4 sm:h-4" />
                        KEY RESPONSIBILITIES & ACHIEVEMENTS
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" style={{ background: 'var(--primary)' }} />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {job.achievements && job.achievements.length > 0 && (
                      <div className="mb-4 sm:mb-6">
                        <h4 className="text-xs sm:text-sm font-bold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2" style={{ color: 'var(--secondary)' }}>
                          <Award size={14} className="sm:w-4 sm:h-4" />
                          ACHIEVEMENTS
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {job.achievements.map((achievement, idx) => (
                            <div
                              key={idx}
                              className="p-2 sm:p-3 rounded-md sm:rounded-lg text-xs sm:text-sm"
                              style={{
                                background: 'rgba(0,255,136,0.05)',
                                border: '1px solid var(--border)',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              {achievement}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {job.skills && job.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {job.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold"
                            style={{
                              background: 'rgba(0,255,136,0.1)',
                              color: 'var(--primary)',
                              border: '1px solid var(--primary)',
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
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