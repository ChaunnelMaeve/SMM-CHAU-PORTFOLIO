import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--bg-dark)' }}>
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footerCircuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
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
          <rect width="100%" height="100%" fill="url(#footerCircuit)" />
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

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div
              className="text-2xl font-black mb-4"
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: "'Orbitron', sans-serif",
              }}
            >
              CHAUNNEL
            </div>
            <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Social Media Specialist helping brands grow their online presence and connect with their audience.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,212,255,0.1) 100%)',
                    border: '2px solid var(--border)',
                    color: 'var(--primary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gradient-1)';
                    e.currentTarget.style.color = 'var(--bg-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(0,255,136,0.1) 0%, rgba(0,212,255,0.1) 100%)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4
              className="font-bold mb-6"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
              }}
            >
              SERVICES
            </h4>
            <ul className="space-y-3">
              {['Instagram', 'TikTok', 'LinkedIn', 'Content Creation'].map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="transition-all duration-300 hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold mb-6"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
              }}
            >
              PORTFOLIO
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'About Me', href: '#about' },
                { label: 'My Work', href: '#portfolio' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-all duration-300 hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-bold mb-6"
              style={{
                color: 'var(--text-primary)',
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '0.875rem',
                letterSpacing: '0.1em',
              }}
            >
              LEGAL
            </h4>
            <ul className="space-y-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:translate-x-1"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
            opacity: 0.3,
          }}
        />

        <div className="pt-8 text-center" style={{ color: 'var(--text-secondary)' }}>
          <p>&copy; 2024 Chaunnel - Social Media Specialist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
