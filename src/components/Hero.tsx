import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, TrendingUp, Users, Target, Award, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  const parallaxOffset = scrollY * 0.3;

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: Users, value: '5+', label: 'Years Exp' },
    { icon: Award, value: '240%', label: 'Avg Growth' },
    { icon: TrendingUp, value: '500K+', label: 'Monthly Reach' },
    { icon: Target, value: '95%', label: 'Success Rate' },
  ];

  const handleDownloadResume = () => {
    window.print();
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32 md:pt-28"
      style={{ background: 'var(--bg-dark)' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 136, 0.15), transparent 70%)',
        }}
      />

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite',
          }}
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-0.5 opacity-60"
        style={{
          background: 'var(--gradient-1)',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
          animation: 'scan 3s linear infinite',
        }}
      />

      <div className="absolute inset-0">
        {mounted && [...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs opacity-20"
            style={{
              color: 'var(--primary)',
              fontFamily: "'Fira Code', monospace",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['01', '10', '{', '}', '<', '>'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full mb-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                border: '2px solid var(--primary)',
                boxShadow: '0 4px 15px rgba(0,255,136,0.2)',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                }}
              />
              <Sparkles size={18} style={{ color: 'var(--primary)' }} className="animate-pulse" />
              <span style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.75rem', fontFamily: "'Orbitron', sans-serif", letterSpacing: '1.5px' }}>
                {resumeData.personalInfo.title.toUpperCase()}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              <span style={{ color: 'var(--text-primary)' }}>Hi, I'm </span>
              <span
                className="animate-gradient"
                style={{
                  background: 'var(--gradient-1)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                }}
              >
                {resumeData.personalInfo.fullName.split(' ')[0].toUpperCase()}
              </span>
              <br />
              <span style={{ color: 'var(--text-primary)', fontSize: '0.6em' }}>
                {resumeData.personalInfo.tagline}
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 mb-6 text-sm" style={{ fontFamily: "'Fira Code', monospace" }}>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Digital Marketing</span>
              <span style={{ color: 'var(--primary)' }}>|</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Analytics</span>
              <span style={{ color: 'var(--primary)' }}>|</span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>Strategy</span>
            </div>

            {/* <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              {resumeData.professionalSummary.substring(0, 200)}...
            </p> */}
            <p className="text-lg mb-8 leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              I blend creative marketing with data-driven operations to help brands grow smarter. From strategic planning to team leadership, I deliver results backed by analytics.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative p-4 rounded-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                    border: '2px solid var(--border)',
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg mb-2 flex items-center justify-center mx-auto"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                        border: '2px solid var(--primary)',
                      }}
                    >
                      <stat.icon size={20} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div className="text-2xl font-bold mb-1"
                      style={{
                        background: 'var(--gradient-1)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 rounded-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--gradient-1)',
                  color: 'var(--bg-dark)',
                  boxShadow: '0 4px 15px rgba(0, 255, 136, 0.3)',
                }}
                data-testid="download-resume-hero-btn"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                    animation: 'shine 1.5s infinite',
                  }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  <Download size={20} className="group-hover:translate-y-1 transition-transform" />
                  Download Resume
                </span>
              </button>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                style={{
                  background: 'transparent',
                  color: 'var(--primary)',
                  border: '2px solid var(--primary)',
                }}
                data-testid="get-started-btn"
              >
                <span className="flex items-center justify-center gap-2">
                  Let's Connect
                  <ArrowRight size={20} />
                </span>
              </button>
            </div> */}
          </div>

          <div className={`transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
            <div className="relative">
              <div className="relative p-8 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                  border: '2px solid var(--primary)',
                  boxShadow: '0 10px 40px rgba(0,255,136,0.3), inset 0 0 30px rgba(0,255,136,0.1)',
                }}
              >
                <div className="absolute inset-0"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,136,0.03) 2px, rgba(0,255,136,0.03) 4px)',
                  }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: '#ff4757' }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: '#ffd43b' }} />
                      <div className="w-3 h-3 rounded-full" style={{ background: '#51cf66' }} />
                    </div>
                    <div className="text-sm font-bold" style={{ color: 'var(--text-primary)', fontFamily: "'Fira Code', monospace" }}>
                      GROWTH METRICS
                    </div>
                  </div>

                  {['Facebook Page Growth', 'Facebook Ads ROI', 'Community Engagement', 'Website Performance'].map((item, i) => (
                    <div key={item} className="p-4 rounded-lg transition-all duration-300 hover:translate-x-2"
                      style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      <div className="text-sm mb-2" style={{ color: 'var(--text-secondary)', fontFamily: "'Fira Code', monospace" }}>
                        {item}
                      </div>
                      <div className="text-sm font-bold mb-2" style={{ color: '#51cf66' }}>
                        OPTIMIZED
                      </div>
                      <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-darker)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${85 + i * 3}%`,
                            background: 'var(--gradient-1)',
                            boxShadow: '0 0 10px var(--primary)',
                            animation: 'pulse 2s ease-in-out infinite',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {mounted && [...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(0,255,136,0.1)',
                    border: '2px solid var(--primary)',
                    color: 'var(--primary)',
                    ...(i === 0 && { top: '10%', right: '-5%' }),
                    ...(i === 1 && { bottom: '20%', right: '-8%' }),
                    ...(i === 2 && { top: '50%', left: '-8%' }),
                    ...(i === 3 && { bottom: '10%', left: '-5%' }),
                    animation: `float ${4 + i}s ease-in-out infinite`,
                  }}
                >
                  {[<TrendingUp key="1" size={24} />, <Users key="2" size={24} />, <Target key="3" size={24} />, <Sparkles key="4" size={24} />][i]}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: '2px solid var(--primary)' }}>
          <div className="w-1 h-3 rounded-full animate-scroll" style={{ background: 'var(--primary)' }} />
        </div>
        <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Scroll to explore</span>
      </div>
    </section>
  );
}
