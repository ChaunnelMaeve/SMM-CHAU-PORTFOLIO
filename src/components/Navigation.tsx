import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'portfolio', 'about', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = ['home', 'services', 'portfolio', 'about', 'testimonials', 'contact'];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className="relative rounded-2xl px-6 py-4 backdrop-blur-xl transition-all duration-300"
          style={{
            background: isScrolled
              ? 'rgba(5, 8, 16, 0.95)'
              : 'rgba(5, 8, 16, 0.8)',
            border: `1px solid ${isScrolled ? 'rgba(0, 255, 136, 0.3)' : 'rgba(0, 255, 136, 0.2)'}`,
            boxShadow: isScrolled
              ? '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 60px rgba(0, 255, 136, 0.15)'
              : '0 4px 16px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="flex justify-between items-center">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-3 group transition-all duration-300"
            >
              <div className="relative">
                <Shield
                  size={28}
                  style={{ color: 'var(--primary)' }}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    border: '2px solid var(--primary)',
                    borderRadius: '50%',
                    animation: 'pulseRing 2s ease-out infinite',
                  }}
                />
              </div>
              <span
                className="text-2xl font-black"
                style={{
                  fontFamily: "'Orbitron', sans-serif",
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                CHAUNNEL
              </span>
            </button>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                  style={{
                    color: activeSection === item ? 'var(--primary)' : 'var(--text-secondary)',
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'rgba(0, 255, 136, 0.1)',
                    }}
                  />
                  <span className="relative capitalize font-medium text-sm">
                    {item}
                  </span>
                  {activeSection === item && (
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ background: 'var(--primary)' }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              className="md:hidden relative p-2 rounded-lg transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'rgba(0, 255, 136, 0.1)',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                color: 'var(--primary)',
              }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full mt-4 px-6 animate-slideDown"
        >
          <div
            className="rounded-2xl p-6 backdrop-blur-xl"
            style={{
              background: 'rgba(5, 8, 16, 0.95)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="relative px-4 py-3 rounded-lg transition-all duration-300 text-left"
                  style={{
                    background: activeSection === item ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
                    color: activeSection === item ? 'var(--primary)' : 'var(--text-secondary)',
                    borderLeft: activeSection === item ? '3px solid var(--primary)' : '3px solid transparent',
                  }}
                >
                  <span className="capitalize font-medium">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
