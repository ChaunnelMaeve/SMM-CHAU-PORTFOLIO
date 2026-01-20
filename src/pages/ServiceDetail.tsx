import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const service = servicesData.find(s => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setIsVisible(true), 100);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg-dark)' }}>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Service Not Found
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

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen pt-32 pb-20" style={{ background: 'var(--bg-dark)' }}>
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="serviceGrid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="rgba(0, 255, 136, 0.5)"/>
              <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
              <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#serviceGrid)" />
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

        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-6 mb-8">
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                border: '3px solid var(--primary)',
                boxShadow: '0 10px 40px rgba(0,255,136,0.3)',
              }}
            >
              <ServiceIcon size={48} style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <h1
                className="text-5xl md:text-6xl font-black mb-2"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {service.title}
              </h1>
              <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div
            className={`lg:col-span-2 space-y-12 transition-all duration-1000 delay-200 ${
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
                Overview
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {service.longDescription}
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
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg transition-all duration-300 hover:translate-x-2"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <CheckCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{benefit}</span>
                  </div>
                ))}
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
                Our Process
              </h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div
                    key={index}
                    className="relative p-6 rounded-xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                      border: '2px solid var(--border)',
                    }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1"
                      style={{ background: 'var(--gradient-1)' }}
                    />
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: 'var(--gradient-1)',
                          color: 'var(--bg-dark)',
                          fontFamily: "'Fira Code', monospace",
                          fontWeight: 'bold',
                          fontSize: '1.25rem',
                        }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold mb-2"
                          style={{
                            color: 'var(--text-primary)',
                            fontFamily: "'Orbitron', sans-serif",
                          }}
                        >
                          {step.step}
                        </h3>
                        <p style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* <section
              className="p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,212,255,0.1) 100%)',
                border: '2px solid var(--primary)',
                boxShadow: '0 10px 40px rgba(0,255,136,0.2)',
              }}
            >
              <h2
                className="text-3xl font-black mb-6 flex items-center gap-3"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'var(--text-primary)',
                }}
              >
                <TrendingUp size={32} style={{ color: 'var(--primary)' }} />
                Case Study
              </h2>
              <div className="mb-4">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    color: 'var(--primary)',
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  {service.caseStudy.client}
                </h3>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Challenge
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{service.caseStudy.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    Solution
                  </h4>
                  <p style={{ color: 'var(--text-secondary)' }}>{service.caseStudy.solution}</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                  Results
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {service.caseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 p-3 rounded-lg"
                      style={{
                        background: 'rgba(0, 255, 136, 0.1)',
                        border: '1px solid var(--primary)',
                      }}
                    >
                      <CheckCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section> */}
          </div>

          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div
              className="p-8 rounded-2xl sticky top-32"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                border: '2px solid var(--border)',
              }}
            >
              <h3
                className="text-2xl font-black mb-6"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'var(--text-primary)',
                }}
              >
                Service Includes
              </h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
                    <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3
                className="text-xl font-bold mb-4"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  color: 'var(--text-primary)',
                }}
              >
                Platforms & Tools
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {service.platforms.map((platform, index) => (
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
                    {platform}
                  </span>
                ))}
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
                  Get Started
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
