import { Briefcase, TrendingUp, Award, Target } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ProfessionalSummary() {
  const highlights = [
    { icon: Briefcase, label: '5+ Years', sublabel: 'Experience' },
    { icon: TrendingUp, label: '240%', sublabel: 'Avg Growth' },
    { icon: Target, label: '500K+', sublabel: 'Monthly Reach' },
    { icon: Award, label: 'Data-Driven', sublabel: 'Strategies' },
  ];

  return (
    <section id="summary" className="py-24 relative overflow-hidden" style={{ background: 'var(--bg-darker)' }}>
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
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
              border: '2px solid var(--primary)',
            }}
          >
            <Briefcase size={18} style={{ color: 'var(--primary)' }} />
            <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', fontFamily: "'Orbitron', sans-serif", letterSpacing: '1.5px' }}>
              PROFESSIONAL SUMMARY
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span style={{ color: 'var(--text-primary)' }}>About </span>
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
              Chaunnel
            </span>
          </h2>

          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
            {resumeData.professionalSummary}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="relative p-6 rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                  border: '2px solid var(--border)',
                  transitionDelay: `${index * 100}ms`,
                }}
                data-testid={`highlight-${item.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)',
                  }}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center mx-auto"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                      border: '2px solid var(--primary)',
                    }}
                  >
                    <item.icon size={24} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div className="text-2xl font-bold mb-1"
                    style={{
                      background: 'var(--gradient-1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {item.label}
                  </div>
                  <div className="text-xs" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                    {item.sublabel}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}