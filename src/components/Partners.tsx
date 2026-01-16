import { useEffect, useRef, useState } from 'react';

const partners = [
  { id: 1, name: 'Innovate Tech', color: '#6366F1' },
  { id: 2, name: 'Digital Wave', color: '#EC4899' },
  { id: 3, name: 'Cloud Nine', color: '#14B8A6' },
  { id: 4, name: 'Nexus AI', color: '#F59E0B' },
  { id: 5, name: 'Vertex Labs', color: '#8B5CF6' },
  { id: 6, name: 'Quantum Flow', color: '#06B6D4' },
  { id: 7, name: 'Peak Systems', color: '#10B981' },
  { id: 8, name: 'Prism Studios', color: '#EF4444' },
  { id: 9, name: 'Sonic Media', color: '#3B82F6' },
  { id: 10, name: 'Orbit Digital', color: '#F97316' },
];

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ background: 'var(--bg-dark)' }}
    >
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes float-up {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .partners-scroll {
          animation: scroll-left 40s linear infinite;
        }

        .partners-scroll:hover {
          animation-play-state: paused;
        }

        .partner-logo {
          animation: float-up 3s ease-in-out infinite;
        }
      `}</style>

      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="partnersPattern" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
              <circle cx="75" cy="75" r="1" fill="rgba(0, 255, 136, 0.5)"/>
              <line x1="0" y1="75" x2="150" y2="75" stroke="rgba(0, 255, 136, 0.2)" strokeWidth="0.5"/>
              <line x1="75" y1="0" x2="75" y2="150" stroke="rgba(0, 255, 136, 0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#partnersPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span style={{ color: 'var(--text-primary)' }}>Trusted By </span>
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Partnering with innovative companies worldwide
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[var(--bg-dark)] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[var(--bg-dark)] to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden">
            <div className="partners-scroll flex gap-8 w-max">
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="partner-logo flex-shrink-0"
                  style={{
                    animationDelay: `${(index % partners.length) * 0.15}s`,
                  }}
                >
                  <div
                    className="group relative w-48 h-32 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                    style={{
                      background: `linear-gradient(135deg, ${partner.color}15 0%, ${partner.color}05 100%)`,
                      border: `2px solid ${partner.color}40`,
                      boxShadow: `0 8px 20px ${partner.color}15`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                      style={{
                        background: `radial-gradient(circle, ${partner.color}30 0%, transparent 70%)`,
                      }}
                    />

                    <div
                      className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl"
                      style={{
                        background: `linear-gradient(90deg, ${partner.color}00, ${partner.color}, ${partner.color}00)`,
                        boxShadow: `0 0 15px ${partner.color}`,
                      }}
                    />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-3">
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${partner.color}40 0%, ${partner.color}20 100%)`,
                          border: `2px solid ${partner.color}`,
                          boxShadow: `0 4px 15px ${partner.color}30`,
                        }}
                      >
                        <span
                          className="text-2xl font-black"
                          style={{
                            color: partner.color,
                            fontFamily: "'Orbitron', sans-serif",
                            textShadow: `0 0 10px ${partner.color}80`,
                          }}
                        >
                          {partner.name.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>

                      <div className="text-center">
                        <h3
                          className="font-bold text-sm"
                          style={{
                            color: partner.color,
                            fontFamily: "'Orbitron', sans-serif",
                            textShadow: `0 0 8px ${partner.color}60`,
                          }}
                        >
                          {partner.name}
                        </h3>
                        <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                          Partner
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div
          className={`mt-16 p-8 rounded-2xl text-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,136,0.08) 0%, rgba(0,212,255,0.08) 100%)',
            border: '2px solid var(--primary)',
            boxShadow: '0 8px 32px rgba(0,255,136,0.15)',
          }}
        >
          <p className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Ready to Join Our Partners?
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Let's create something extraordinary together
          </p>
        </div> */}
      </div>
    </section>
  );
}
