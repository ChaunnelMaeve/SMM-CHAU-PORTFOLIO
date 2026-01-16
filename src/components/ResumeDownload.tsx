import { Download, FileText, Printer } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function ResumeDownload() {
  const handleDownload = () => {
    // Print functionality - opens browser print dialog
    // User can save as PDF from there
    window.print();
  };

  const handleViewResume = () => {
    // Scroll to top to show full resume
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="resume-download" className="py-16 relative overflow-hidden" style={{ background: 'var(--bg-darker)' }}>
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.3), transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className="p-12 rounded-2xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
              border: '2px solid var(--primary)',
              boxShadow: '0 10px 40px rgba(0,255,136,0.2)',
            }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{
                background: 'var(--gradient-1)',
                boxShadow: '0 0 30px rgba(0,255,136,0.5)',
              }}
            >
              <FileText size={32} style={{ color: 'var(--bg-dark)' }} />
            </div>

            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif", color: 'var(--text-primary)' }}>
              Download My Resume
            </h2>
            
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Get a PDF copy of my complete resume with detailed work experience, skills, and achievements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="group relative px-8 py-4 rounded-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--gradient-1)',
                  color: 'var(--bg-dark)',
                  boxShadow: '0 4px 15px rgba(0, 255, 136, 0.3)',
                }}
                data-testid="download-resume-btn"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shine 1.5s infinite',
                  }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  Download Resume (PDF)
                </span>
              </button>

              <button
                onClick={handleViewResume}
                className="px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'transparent',
                  color: 'var(--primary)',
                  border: '2px solid var(--primary)',
                }}
                data-testid="view-resume-btn"
              >
                <span className="flex items-center justify-center gap-2">
                  <Printer size={20} />
                  View Full Resume
                </span>
              </button>
            </div>

            <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-sm" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
                  <span>Updated January 2025</span>
                </div>
                <div className="hidden md:block" style={{ color: 'var(--border)' }}>|</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
                  <span>Email: {resumeData.personalInfo.email}</span>
                </div>
                <div className="hidden md:block" style={{ color: 'var(--border)' }}>|</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary)' }} />
                  <span>Phone: {resumeData.personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}