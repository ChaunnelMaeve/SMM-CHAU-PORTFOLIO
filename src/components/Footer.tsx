import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border)' }}>
      <div className="container mx-auto px-6 relative z-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div
              className="text-xl font-black"
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
            {/* <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(0, 255, 136, 0.1)',
                    border: '1px solid var(--border)',
                    color: 'var(--primary)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gradient-1)';
                    e.currentTarget.style.color = 'var(--bg-dark)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)';
                    e.currentTarget.style.color = 'var(--primary)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div> */}
          </div>
          
          <div className="text-center md:text-right text-sm" style={{ color: 'var(--text-secondary)' }}>
            <p>&copy; 2024 Chaunnel - Social Media Specialist. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
