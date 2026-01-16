import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Emma Rodriguez',
    role: 'Founder, Bloom Beauty Co.',
    image: 'https://images.pexels.com/photos/3765152/pexels-photo-3765152.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Chaunnel transformed our Instagram from crickets to a thriving community. We went from 2K to 45K followers, and we are finally seeing real revenue from social media!',
    rating: 5,
  },
  {
    name: 'Mike Thompson',
    role: 'Owner, CoreFit Training',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'We went from zero to a major local presence on TikTok. Chaunnel understood the platform perfectly and created content that resonated with exactly the audience we wanted to reach.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'Marketing Consultant',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
    content: 'Chaunnel helped me turn LinkedIn into my best marketing channel. I now have more qualified leads than I can handle, and I am finally seen as the authority I have worked years to become.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: 'var(--bg-darker)' }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 136, 0.1) 2px, rgba(0, 255, 136, 0.1) 3px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 212, 255, 0.1) 2px, rgba(0, 212, 255, 0.1) 3px)
            `,
            backgroundSize: '60px 60px',
            animation: 'gridMove 30s linear infinite',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: '200px',
              height: '200px',
              border: '1px solid rgba(0, 255, 136, 0.1)',
              borderRadius: '50%',
              left: `${i % 2 === 0 ? Math.random() * 50 : 50 + Math.random() * 50}%`,
              top: `${Math.random() * 100}%`,
              animation: `pulse ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs"
            style={{
              color: 'var(--primary)',
              fontFamily: "'Fira Code', monospace",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrixRain ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {['[', ']', '{', '}', '<', '>'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(0, 212, 255, 0.2), transparent 50%)',
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
              05
            </span>
            <div className="h-px flex-1 max-w-32" style={{ background: 'var(--gradient-1)' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span style={{ color: 'var(--text-primary)' }}>Client </span>
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Testimonials
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Don't just take my word for it—hear from my satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? 'opacity-100 translate-x-0 relative'
                    : 'opacity-0 absolute inset-0 translate-x-10 pointer-events-none'
                }`}
              >
                <div
                  className="relative p-8 md:p-12 rounded-2xl overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,136,0.05) 0%, rgba(0,212,255,0.05) 100%)',
                    border: '2px solid var(--border)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <div
                    className="absolute top-0 right-0 w-64 h-64 opacity-5"
                    style={{
                      background: 'radial-gradient(circle, rgba(0,255,136,0.5) 0%, transparent 70%)',
                    }}
                  />

                  <Quote
                    className="absolute top-8 right-8 opacity-10"
                    size={80}
                    style={{ color: 'var(--primary)' }}
                  />

                  <div className="flex items-center mb-6 relative z-10">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-2xl object-cover"
                        style={{ border: '3px solid var(--primary)' }}
                      />
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity"
                        style={{
                          background: 'radial-gradient(circle, rgba(0,255,136,0.3) 0%, transparent 70%)',
                        }}
                      />
                    </div>
                    <div className="ml-6">
                      <h4
                        className="font-black text-xl mb-1"
                        style={{
                          fontFamily: "'Orbitron', sans-serif",
                          color: 'var(--text-primary)',
                        }}
                      >
                        {testimonial.name}
                      </h4>
                      <p
                        className="text-sm font-medium"
                        style={{
                          color: 'var(--primary)',
                          fontFamily: "'Fira Code', monospace",
                        }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div
                        key={i}
                        className="relative"
                        style={{ animation: `fadeIn 0.5s ease-out ${i * 0.1}s forwards`, opacity: 0 }}
                      >
                        <Star
                          size={24}
                          style={{
                            color: 'var(--primary)',
                            fill: 'var(--primary)',
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  <p
                    className="text-lg md:text-xl leading-relaxed relative z-10"
                    style={{ color: 'var(--text-secondary)', fontWeight: 400, lineHeight: '1.8' }}
                  >
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}

            <div className="absolute top-1/2 -translate-y-1/2 left-0 -translate-x-16 hidden lg:block">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '2px solid var(--primary)',
                  color: 'var(--primary)',
                }}
              >
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-0 translate-x-16 hidden lg:block">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(0, 255, 136, 0.1)',
                  border: '2px solid var(--primary)',
                  color: 'var(--primary)',
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{
                background: 'rgba(0, 255, 136, 0.1)',
                border: '2px solid var(--primary)',
                color: 'var(--primary)',
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className="transition-all duration-300"
                  style={{
                    width: index === activeIndex ? '32px' : '12px',
                    height: '12px',
                    borderRadius: '6px',
                    background: index === activeIndex ? 'var(--gradient-1)' : 'var(--border)',
                    boxShadow: index === activeIndex ? '0 0 20px rgba(0, 255, 136, 0.5)' : 'none',
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{
                background: 'rgba(0, 255, 136, 0.1)',
                border: '2px solid var(--primary)',
                color: 'var(--primary)',
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div
          className={`mt-16 p-8 rounded-2xl text-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            background: 'linear-gradient(135deg, rgba(0,255,136,0.08) 0%, rgba(0,212,255,0.08) 100%)',
            border: '2px solid var(--primary)',
            boxShadow: '0 8px 32px rgba(0,255,136,0.15)',
          }}
        >
          <p className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Ready to Join Our Partners?
          </p>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Let's create something extraordinary together
          </p>
        </div>
      </div>
    </section>
  );
}
