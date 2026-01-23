import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { creativeWorkData, CreativeWorkItem } from '../data/creativeWorkData';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';

export default function CreativeWork() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<CreativeWorkItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const designs = creativeWorkData.filter(item => item.type === 'design');
  const videos = creativeWorkData.filter(item => item.type === 'video');

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

  const handleItemClick = (item: CreativeWorkItem, index: number) => {
    setSelectedItem(item);
    setSelectedIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setSelectedIndex(-1);
  };

  const handlePrevious = () => {
    if (selectedItem?.type === 'design' && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedItem(designs[selectedIndex - 1]);
    }
  };

  const handleNext = () => {
    if (selectedItem?.type === 'design' && selectedIndex < designs.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedItem(designs[selectedIndex + 1]);
    }
  };

  return (
    <section
      id="creative-work"
      ref={sectionRef}
      className="py-20 relative"
      style={{ background: 'var(--bg-dark)' }}
      data-testid="creative-work-section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="creative-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M0 50L50 0M0 0L50 50" stroke="rgba(0, 255, 136, 0.3)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#creative-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            <span style={{ color: 'var(--text-primary)' }}>Creative </span>
            <span
              style={{
                background: 'var(--gradient-1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Showcase
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Graphic designs and video content that bring brands to life
          </p>
        </div>

        {/* Graphic Designs Section */}
        <div className="mb-20">
          <h3
            className="text-3xl font-bold mb-8 text-center"
            style={{
              color: 'var(--text-primary)',
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            Graphic Designs
          </h3>
          
          {/* Masonry/Pinterest Layout */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {designs.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleItemClick(item, index)}
                data-testid={`design-item-${item.id}`}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  style={{
                    border: '2px solid var(--primary)',
                    boxShadow: '0 0 30px rgba(0, 255, 136, 0.4)',
                  }}
                />

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  style={{ aspectRatio: item.aspectRatio || 'auto' }}
                />

                <div
                  className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.9) 0%, rgba(0, 212, 255, 0.9) 100%)',
                  }}
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4
                    className="text-xl font-bold mb-2 text-center"
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      color: 'var(--bg-dark)',
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm text-center font-semibold"
                    style={{ color: 'var(--bg-dark)' }}
                  >
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Section */}
        <div>
          <h3
            className="text-3xl font-bold mb-8 text-center"
            style={{
              color: 'var(--text-primary)',
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            Video Projects
          </h3>
          
          {/* Video Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((item, index) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(designs.length + index) * 100}ms` }}
                onClick={() => handleItemClick(item, index)}
                data-testid={`video-item-${item.id}`}
              >
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity z-10"
                  style={{
                    border: '2px solid var(--secondary)',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)',
                  }}
                />

                <div className="aspect-video relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, rgba(5, 8, 16, 0.95) 0%, rgba(5, 8, 16, 0.4) 50%, transparent 100%)',
                    }}
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                      style={{
                        background: 'rgba(0, 212, 255, 0.2)',
                        border: '2px solid var(--secondary)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Play
                        size={32}
                        className="ml-1"
                        style={{ color: 'var(--secondary)' }}
                        fill="var(--secondary)"
                      />
                    </div>
                  </div>

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <div
                      className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2"
                      style={{
                        background: 'rgba(0, 212, 255, 0.2)',
                        border: '1px solid var(--secondary)',
                        color: 'var(--secondary)',
                        fontFamily: "'Fira Code', monospace",
                      }}
                    >
                      {item.category}
                    </div>
                    <h4
                      className="text-lg font-bold"
                      style={{
                        fontFamily: "'Orbitron', sans-serif",
                        color: 'var(--text-primary)',
                      }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {selectedItem && selectedItem.type === 'design' && (
        <ImageModal
          imageUrl={selectedItem.fullImage || selectedItem.thumbnail}
          title={selectedItem.title}
          description={selectedItem.description}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={selectedIndex > 0}
          hasNext={selectedIndex < designs.length - 1}
        />
      )}

      {selectedItem && selectedItem.type === 'video' && (
        <VideoModal
          videoUrl={selectedItem.videoUrl || ''}
          title={selectedItem.title}
          description={selectedItem.description}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
}
