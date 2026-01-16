import { useEffect, useRef, useState } from 'react';
import { Award, Users, TrendingUp, Target, ArrowRight, Zap, Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';

const stats = [
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Award, value: '5+', label: 'Years Experience' },
  { icon: TrendingUp, value: '50M+', label: 'Total Reach' },
  { icon: Target, value: '93%', label: 'Success Rate' },
];

const workHistory = [
  {
    title: 'Senior Social Media Strategist',
    company: 'Digital Growth Agency',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Leading social media campaigns for Fortune 500 clients, achieving an average 300% increase in engagement rates. Managing a team of 5 content creators and strategists.',
    achievements: [
      'Grew client Instagram following from 50K to 500K in 8 months',
      'Generated $2M+ in revenue through Facebook ad campaigns',
      'Developed viral TikTok strategy reaching 20M+ views'
    ]
  },
  {
    title: 'Social Media Manager',
    company: 'Creative Marketing Co.',
    location: 'New York, NY',
    period: '2020 - 2022',
    description: 'Managed multi-platform social media presence for 15+ e-commerce brands. Specialized in Instagram, TikTok, and LinkedIn growth strategies.',
    achievements: [
      'Increased average engagement rate by 250%',
      'Launched successful influencer partnership programs',
      'Created content strategies resulting in 10M+ impressions'
    ]
  },
  {
    title: 'Content Creator & Strategist',
    company: 'Startup Ventures',
    location: 'San Francisco, CA',
    period: '2019 - 2020',
    description: 'Built social media presence from scratch for multiple tech startups. Focused on brand storytelling and community engagement.',
    achievements: [
      'Established brand presence on 5 major platforms',
      'Grew combined following to 100K+ in first year',
      'Developed content calendar system adopted company-wide'
    ]
  }
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [showWorkHistory, setShowWorkHistory] = useState(false);
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

  useEffect(() => {
    if (isVisible) {
      const timers = stats.map((stat, index) => {
        const targetValue = parseInt(stat.value);
        const duration = 2000;
        const steps = 60;
        const increment = targetValue / steps;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= targetValue) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = targetValue;
              return newCounts;
            });
            clearInterval(timers[index]);
          } else {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(current);
              return newCounts;
            });
          }
        }, duration / steps);
      });

      return () => timers.forEach((timer) => clearInterval(timer));
    }
  }, [isVisible]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: 'var(--bg-dark)' }}
      data-testid="about-section"
    >
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="3" fill="rgba(0, 255, 136, 0.5)"/>
              <circle cx="150" cy="50" r="3" fill="rgba(0, 255, 136, 0.5)"/>
              <circle cx="50" cy="150" r="3" fill="rgba(0, 212, 255, 0.5)"/>
              <circle cx="150" cy="150" r="3" fill="rgba(0, 212, 255, 0.5)"/>
              <line x1="50" y1="50" x2="150" y2="50" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
              <line x1="50" y1="50" x2="50" y2="150" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
              <line x1="150" y1="50" x2="150" y2="150" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1"/>
              <line x1="50" y1="150" x2="150" y2="150" stroke="rgba(0, 212, 255, 0.3)" strokeWidth="1"/>
              <rect x="48" y="48" width="4" height="4" fill="rgba(0, 255, 136, 0.5)"/>
              <rect x="148" y="148" width="4" height="4" fill="rgba(0, 212, 255, 0.5)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-8">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs"
            style={{
              color: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)',
              fontFamily: "'Fira Code', monospace",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrixRain ${8 + Math.random() * 12}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['0x', '1', '0', 'A', 'F', 'B'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 30% 50%, rgba(0, 255, 136, 0.2), transparent 50%)',
        }}
      />

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
              04
            </span>
            <div className="h-px flex-1 max-w-32" style={{ background: 'var(--gradient-1)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span style={{ color: 'var(--text-primary)' }}>About </span>
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Me
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative">
              <div
                className="absolute -left-4 top-0 w-1 h-full opacity-50"
                style={{ background: 'var(--gradient-1)' }}
              />

              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                    border: '2px solid var(--primary)',
                  }}
                >
                  <Zap size={24} style={{ color: 'var(--primary)' }} />
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{
                    background: 'var(--gradient-1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  WHO I AM
                </h3>
              </div>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                I'm Chaunnel, a passionate social media specialist with over 5 years of experience helping
                brands and businesses grow their online presence. From viral TikToks to engaged Instagram
                communities, I've helped 200+ clients achieve remarkable results.
              </p>

              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                My approach combines creative content strategy, data-driven insights, and authentic
                community building. I don't just chase followers—I build engaged audiences that convert
                into loyal customers and brand advocates.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 rounded-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'var(--gradient-1)',
                    color: 'var(--bg-dark)',
                    boxShadow: '0 4px 15px rgba(0, 255, 136, 0.3)',
                  }}
                  data-testid="work-together-btn"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      animation: 'shine 1.5s infinite',
                    }}
                  />
                  <span className="relative flex items-center justify-center gap-2">
                    Let's Work Together
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={() => setShowWorkHistory(!showWorkHistory)}
                  className="group relative px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'transparent',
                    color: 'var(--primary)',
                    border: '2px solid var(--primary)',
                  }}
                  data-testid="work-history-btn"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    <Briefcase size={20} />
                    {showWorkHistory ? 'Hide' : 'View'} Work History
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-300 ${showWorkHistory ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>
              </div>

              {/* Work History Section */}
              <div 
                className={`transition-all duration-500 overflow-hidden ${
                  showWorkHistory ? 'max-h-[2000px] opacity-100 mt-8' : 'max-h-0 opacity-0'
                }`}
              >
                <div
                  className="p-6 rounded-2xl mb-6"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                    border: '2px solid var(--border)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase size={24} style={{ color: 'var(--primary)' }} />
                    <h4 
                      className="text-2xl font-bold"
                      style={{
                        color: 'var(--primary)',
                        fontFamily: "'Orbitron', sans-serif",
                      }}
                    >
                      Professional Experience
                    </h4>
                  </div>

                  <div className="space-y-6">
                    {workHistory.map((job, index) => (
                      <div
                        key={index}
                        className="relative pl-6 pb-6 border-l-2 last:pb-0"
                        style={{ borderColor: 'var(--border)' }}
                        data-testid={`work-history-${index}`}
                      >
                        {/* Timeline dot */}
                        <div
                          className="absolute -left-[9px] top-0 w-4 h-4 rounded-full"
                          style={{
                            background: 'var(--gradient-1)',
                            boxShadow: '0 0 10px var(--primary)',
                          }}
                        />

                        <div className="mb-3">
                          <h5 
                            className="text-xl font-bold mb-2"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {job.title}
                          </h5>
                          
                          <div className="flex flex-wrap gap-4 text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>
                            <div className="flex items-center gap-2">
                              <Briefcase size={16} style={{ color: 'var(--primary)' }} />
                              <span className="font-semibold">{job.company}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin size={16} style={{ color: 'var(--primary)' }} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar size={16} style={{ color: 'var(--primary)' }} />
                              <span>{job.period}</span>
                            </div>
                          </div>

                          <p className="text-base mb-3 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                            {job.description}
                          </p>

                          <div className="space-y-2">
                            <p className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>
                              Key Achievements:
                            </p>
                            <ul className="space-y-1">
                              {job.achievements.map((achievement, i) => (
                                <li 
                                  key={i}
                                  className="text-sm flex items-start gap-2"
                                  style={{ color: 'var(--text-secondary)' }}
                                >
                                  <span style={{ color: 'var(--primary)' }}>▸</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative p-8 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                  border: '2px solid var(--border)',
                  transitionDelay: `${index * 100}ms`,
                  backdropFilter: 'blur(10px)',
                }}
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'var(--gradient-1)',
                    boxShadow: '0 0 20px var(--primary)',
                  }}
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: 'radial-gradient(circle, rgba(0,255,136,0.1) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,255,136,0.15) 0%, rgba(0,212,255,0.15) 100%)',
                      border: '3px solid var(--primary)',
                      boxShadow: '0 5px 20px rgba(0,255,136,0.2)',
                    }}
                  >
                    <stat.icon size={28} style={{ color: 'var(--primary)' }} />
                  </div>

                  <div
                    className="text-4xl font-black mb-2"
                    style={{
                      background: 'var(--gradient-1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontFamily: "'Fira Code', monospace",
                    }}
                  >
                    {isVisible ? stat.value : '0'}
                  </div>

                  <div className="text-sm font-bold" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
