import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, Quote, Calendar, Building2, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = portfolioData.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, [projectId]);

  useEffect(() => {
    if (project && project.images.length > 1) {
      const interval = setInterval(() => {
        setActiveImageIndex((current) => (current + 1) % project.images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-dark)' }}>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Project Not Found
          </h2>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-lg font-bold"
            style={{
              background: 'var(--gradient-1)',
              color: 'var(--bg-dark)',
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20" style={{ background: 'var(--bg-dark)' }}>
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projectGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgba(0, 255, 136, 0.5)"/>
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
              <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projectGrid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <button
          onClick={() => navigate('/')}
          className={`group flex items-center gap-2 mb-12 px-6 py-3 rounded-lg transition-all duration-500 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,212,255,0.1) 100%)',
            border: '2px solid var(--primary)',
            color: 'var(--primary)',
          }}
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold">Back to Home</span>
        </button>

        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-3">
            <div
              className={`mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div
                className="inline-block px-4 py-2 rounded-full mb-4"
                style={{
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '1px solid var(--primary)',
                  color: 'var(--primary)',
                  fontFamily: "'Fira Code', monospace",
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                }}
              >
                {project.category}
              </div>
              <h1
                className="text-5xl md:text-6xl font-black mb-4"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {project.title}
              </h1>
              <p className="text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>
            </div>

            <div
              className={`rounded-2xl overflow-hidden mb-12 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                border: '3px solid var(--primary)',
                boxShadow: '0 20px 60px rgba(0, 255, 136, 0.3)',
              }}
            >
              <div className="relative aspect-video">
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === activeImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                {project.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className="transition-all duration-300"
                        style={{
                          width: index === activeImageIndex ? '32px' : '12px',
                          height: '12px',
                          borderRadius: '6px',
                          background: index === activeImageIndex ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                          boxShadow: index === activeImageIndex ? '0 0 20px rgba(0, 255, 136, 0.8)' : 'none',
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div
              className={`space-y-12 transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <section>
                <h2
                  className="text-3xl font-black mb-6"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--text-primary)',
                  }}
                >
                  Project Overview
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {project.overview}
                </p>
              </section>

              <section>
                <h2
                  className="text-3xl font-black mb-6"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--text-primary)',
                  }}
                >
                  The Challenge
                </h2>
                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,107,107,0.1) 0%, rgba(255,107,107,0.05) 100%)',
                    border: '2px solid rgba(255,107,107,0.3)',
                  }}
                >
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.challenge}
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className="text-3xl font-black mb-6"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--text-primary)',
                  }}
                >
                  Our Solution
                </h2>
                <div
                  className="p-6 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,212,255,0.1) 100%)',
                    border: '2px solid var(--primary)',
                  }}
                >
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.solution}
                  </p>
                </div>
              </section>

              <section>
                <h2
                  className="text-3xl font-black mb-6"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--text-primary)',
                  }}
                >
                  Results Achieved
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:translate-x-2"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{result}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section
                className="p-8 rounded-2xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,212,255,0.1) 100%)',
                  border: '2px solid var(--primary)',
                  boxShadow: '0 10px 40px rgba(0,255,136,0.2)',
                }}
              >
                <Quote
                  className="absolute top-8 right-8 opacity-10"
                  size={80}
                  style={{ color: 'var(--primary)' }}
                />
                <div className="relative z-10">
                  <h2
                    className="text-2xl font-black mb-6"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: 'var(--text-primary)',
                    }}
                  >
                    Client Testimonial
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--text-secondary)' }}>
                    "{project.testimonial.text}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-1 h-16 rounded-full"
                      style={{ background: 'var(--gradient-1)' }}
                    />
                    <div>
                      <div
                        className="font-bold text-lg mb-1"
                        style={{
                          color: 'var(--text-primary)',
                          fontFamily: "'Orbitron', sans-serif",
                        }}
                      >
                        {project.testimonial.author}
                      </div>
                      <div
                        className="text-sm"
                        style={{
                          color: 'var(--primary)',
                          fontFamily: "'Fira Code', monospace",
                        }}
                      >
                        {project.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="sticky top-32 space-y-6">
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                  border: '2px solid var(--border)',
                }}
              >
                <h3
                  className="text-xl font-black mb-6"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--text-primary)',
                  }}
                >
                  Project Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(0, 255, 136, 0.1)',
                        border: '1px solid var(--primary)',
                      }}
                    >
                      <Building2 size={20} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>
                        CLIENT
                      </div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                        {project.client}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(0, 255, 136, 0.1)',
                        border: '1px solid var(--primary)',
                      }}
                    >
                      <Briefcase size={20} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>
                        INDUSTRY
                      </div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                        {project.industry}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(0, 255, 136, 0.1)',
                        border: '1px solid var(--primary)',
                      }}
                    >
                      <Calendar size={20} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <div className="text-xs font-bold mb-1" style={{ color: 'var(--text-secondary)' }}>
                        DURATION
                      </div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
                        {project.duration}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                  border: '2px solid var(--border)',
                }}
              >
                <h3
                  className="text-xl font-black mb-4"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--text-primary)',
                  }}
                >
                  Services Provided
                </h3>
                <div className="space-y-2">
                  {project.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
                      <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                  border: '2px solid var(--border)',
                }}
              >
                <h3
                  className="text-xl font-black mb-4"
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    color: 'var(--text-primary)',
                  }}
                >
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: 'rgba(0, 255, 136, 0.1)',
                        border: '1px solid var(--primary)',
                        color: 'var(--primary)',
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    navigate('/', { state: { scrollTo: 'contact' } });
                    setTimeout(() => {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }
                }}
                className="group relative w-full px-8 py-4 rounded-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--gradient-1)',
                  color: 'var(--bg-dark)',
                  boxShadow: '0 4px 15px rgba(0, 255, 136, 0.3)',
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shine 1.5s infinite',
                  }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  Start Your Project
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
