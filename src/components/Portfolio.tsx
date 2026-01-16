import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      id="portfolio"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: 'var(--bg-darker)' }}
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="none" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs"
            style={{
              color: 'var(--secondary)',
              fontFamily: "'Fira Code', monospace",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrixRain ${12 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['0x', '1x', 'FF', 'A3', 'B7', 'C2'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-0 w-full h-0.5 opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
            animation: 'pulse 3s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-2/3 left-0 w-full h-0.5 opacity-10"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--secondary), transparent)',
            animation: 'pulse 3s ease-in-out infinite',
            animationDelay: '1.5s',
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
              03
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
              Work
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Successful social media campaigns that delivered real results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(`/portfolio/${project.id}`)}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity z-10"
                style={{
                  border: '2px solid var(--primary)',
                  boxShadow: '0 0 40px rgba(0, 255, 136, 0.4)',
                }}
              />

              <div className="aspect-[4/3] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: hoveredIndex === index
                      ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.85) 0%, rgba(0, 212, 255, 0.85) 100%)'
                      : 'linear-gradient(to top, rgba(5, 8, 16, 0.95) 0%, rgba(5, 8, 16, 0.7) 50%, transparent 100%)',
                    opacity: hoveredIndex === index ? 0.95 : 1,
                  }}
                />

                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <div
                    className={`transition-all duration-500 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                      style={{
                        background: hoveredIndex === index ? 'rgba(5, 8, 16, 0.8)' : 'rgba(0, 255, 136, 0.2)',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      {project.category}
                    </div>
                  </div>

                  <h3
                    className="text-2xl font-black mb-2 transition-colors duration-300"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: hoveredIndex === index ? 'var(--bg-dark)' : 'var(--text-primary)',
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className={`mb-4 transition-all duration-500 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{
                      color: hoveredIndex === index ? 'var(--bg-dark)' : 'var(--text-secondary)',
                      fontWeight: hoveredIndex === index ? 600 : 400,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    className={`transition-all duration-500 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                  >
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group/btn"
                      style={{
                        background: hoveredIndex === index ? 'var(--bg-dark)' : 'rgba(0, 255, 136, 0.1)',
                        border: hoveredIndex === index ? '2px solid var(--bg-dark)' : '1px solid var(--primary)',
                        color: 'var(--primary)',
                      }}
                    >
                      <span className="text-sm font-bold">View Project</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
