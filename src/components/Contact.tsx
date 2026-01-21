import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Facebook, Twitter, Instagram, Linkedin, Youtube, Video, Calendar } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Me',
    value: 'cruzchaunnel@gmail.com',
    description: 'Send me an email anytime',
    link: 'mailto:cruzchaunnel@gmail.com',
  },
  {
    icon: Linkedin,
    title: 'Connect on LinkedIn',
    value: 'Let\'s Network',
    description: 'Professional networking & opportunities',
    link: 'https://linkedin.com/in/chaunnel',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Remote',
    description: 'Available for remote collaborations worldwide',
    link: '#',
  },
];

const socialMedia = [
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@chaunnel',
    link: '#',
    color: '#E4405F',
  },
  {
    icon: Video,
    name: 'TikTok',
    handle: '@chaunnel',
    link: '#',
    color: '#000000',
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    handle: 'chaunnel',
    link: '#',
    color: '#0A66C2',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    handle: '@chaunnel',
    link: '#',
    color: '#1DA1F2',
  },
  {
    icon: Facebook,
    name: 'Facebook',
    handle: '@chaunnel',
    link: '#',
    color: '#1877F2',
  },
  {
    icon: Youtube,
    name: 'YouTube',
    handle: '@chaunnel',
    link: '#',
    color: '#FF0000',
  },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
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
      id="contact"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: 'var(--bg-dark)' }}
      data-testid="contact-section"
    >
      
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contactCircuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="rgba(0, 255, 136, 0.5)"/>
              <circle cx="90" cy="30" r="2" fill="rgba(0, 255, 136, 0.5)"/>
              <circle cx="30" cy="90" r="2" fill="rgba(0, 212, 255, 0.5)"/>
              <circle cx="90" cy="90" r="2" fill="rgba(0, 212, 255, 0.5)"/>
              <line x1="30" y1="30" x2="90" y2="30" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
              <line x1="30" y1="30" x2="30" y2="90" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
              <line x1="90" y1="30" x2="90" y2="90" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1"/>
              <line x1="30" y1="90" x2="90" y2="90" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactCircuit)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs"
            style={{
              color: 'var(--primary)',
              fontFamily: "'Fira Code', monospace",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrixRain ${12 + Math.random() * 8}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['01', '10', '0x', 'FF'][Math.floor(Math.random() * 4)]}
          </div>
        ))}
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
              06
            </span>
            <div className="h-px flex-1 max-w-32" style={{ background: 'var(--gradient-1)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span style={{ color: 'var(--text-primary)' }}>Let's </span>
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Connect
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Ready to grow your social media presence? Connect with me on your favorite platform or reach out directly.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* <div
            className={`transition-all duration-1000 mb-16 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                  border: '2px solid var(--primary)',
                }}
              >
                <MessageSquare size={24} style={{ color: 'var(--primary)' }} />
              </div>
              <h3
                className="text-3xl font-bold"
                style={{
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                FOLLOW ME
              </h3>
            </div>

            <p className="text-center text-lg mb-12 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Stay updated with social media tips, trends, and success stories
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {socialMedia.map((social, index) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredSocial(index)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    background: hoveredSocial === index
                      ? `linear-gradient(135deg, ${social.color}15 0%, ${social.color}05 100%)`
                      : 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                    border: hoveredSocial === index ? `2px solid ${social.color}` : '2px solid var(--border)',
                    transitionDelay: `${index * 100}ms`,
                  }}
                  data-testid={`social-${social.name.toLowerCase()}`}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: social.color,
                      boxShadow: `0 0 20px ${social.color}`,
                    }}
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                    style={{
                      background: `radial-gradient(circle, ${social.color}20 0%, transparent 70%)`,
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: hoveredSocial === index
                          ? social.color
                          : 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                        border: `3px solid ${hoveredSocial === index ? social.color : 'var(--primary)'}`,
                        boxShadow: `0 10px 30px ${hoveredSocial === index ? social.color : 'rgba(0,255,136,0.2)'}40`,
                      }}
                    >
                      <social.icon
                        size={36}
                        style={{
                          color: hoveredSocial === index ? (social.name === 'TikTok' ? 'var(--primary)' : '#ffffff') : 'var(--primary)',
                        }}
                      />
                    </div>

                    <h4
                      className="font-black text-xl mb-2 transition-colors duration-300"
                      style={{
                        color: hoveredSocial === index ? social.color : 'var(--text-primary)',
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      {social.name}
                    </h4>

                    <p
                      className="text-sm font-medium transition-colors duration-300"
                      style={{
                        color: hoveredSocial === index ? social.color : 'var(--text-secondary)',
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      {social.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div> */}

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                  border: '2px solid var(--primary)',
                }}
              >
                <Mail size={24} style={{ color: 'var(--primary)' }} />
              </div>
              <h3
                className="text-3xl font-bold"
                style={{
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                CONTACT INFO
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  href={method.link}
                  className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                    border: '2px solid var(--border)',
                    transitionDelay: `${index * 100}ms`,
                  }}
                  data-testid={`contact-${method.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'var(--gradient-1)',
                      boxShadow: '0 0 20px var(--primary)',
                    }}
                  />

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)',
                    }}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                        border: '3px solid var(--primary)',
                        boxShadow: '0 5px 20px rgba(0,255,136,0.2)',
                      }}
                    >
                      <method.icon size={28} style={{ color: 'var(--primary)' }} />
                    </div>

                    <h4
                      className="font-bold text-lg mb-2"
                      style={{
                        color: 'var(--text-primary)',
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      {method.title}
                    </h4>

                    <p className="text-sm mb-2 font-medium" style={{ color: 'var(--primary)' }}>
                      {method.value}
                    </p>

                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      {method.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
