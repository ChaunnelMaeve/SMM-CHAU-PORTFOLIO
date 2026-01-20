import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, rgba(0, 255, 136, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 136, 0.03) 3px),
              repeating-linear-gradient(90deg, rgba(0, 255, 136, 0.03) 0px, transparent 1px, transparent 2px, rgba(0, 255, 136, 0.03) 3px),
              repeating-linear-gradient(45deg, transparent 0px, transparent 10px, rgba(0, 212, 255, 0.03) 10px, rgba(0, 212, 255, 0.03) 11px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 100px 100px',
          }}
        />
      </div>

      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs"
            style={{
              color: 'var(--primary)',
              fontFamily: "'Fira Code', monospace",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrixRain ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['01', '10', '11', '00', '{', '}', '<', '>', '0x', 'FF'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-0 w-full h-px opacity-20"
          style={{
            background: 'var(--gradient-1)',
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
            animation: 'scan 4s linear infinite',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="text-xl font-bold"
              style={{ color: 'var(--primary)', fontFamily: "'Fira Code', monospace" }}
            >
              02
            </span>
            <div className="h-px flex-1 max-w-32" style={{ background: 'var(--gradient-1)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span style={{ color: 'var(--text-primary)' }}>My </span>
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Services
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-center" style={{ color: 'var(--text-secondary)' }}>
            Complete social media solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className="relative h-full p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.03) 0%, rgba(0,212,255,0.03) 100%)',
                  border: '2px solid var(--border)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'var(--gradient-1)',
                    boxShadow: '0 0 20px var(--primary)',
                  }}
                />

                <div
                  className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    width: '200%',
                    height: '200%',
                    background: 'radial-gradient(circle, rgba(0,255,136,0.15) 0%, transparent 60%)',
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                        border: '3px solid var(--primary)',
                        boxShadow: '0 5px 20px rgba(0,255,136,0.2)',
                      }}
                    >
                      <service.icon size={32} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div
                      className="text-3xl font-bold opacity-20"
                      style={{ fontFamily: "'Fira Code', monospace", color: 'var(--text-secondary)' }}
                    >
                      0{index + 1}
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-black mb-3 transition-all duration-300 group-hover:translate-x-1"
                    style={{
                      background: 'var(--gradient-1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: "'Orbitron', sans-serif",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group/btn hover:scale-105"
                    style={{
                      background: 'rgba(0, 255, 136, 0.1)',
                      border: '1px solid rgba(0, 255, 136, 0.3)',
                      color: 'var(--primary)',
                    }}
                  >
                    <span className="text-sm font-bold">Learn More</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
