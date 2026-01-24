import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import { creativeWorkData, CreativeWorkItem } from '../data/creativeWorkData';
import VideoModal from './VideoModal';

export default function CreativeWork() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'designs' | 'videos'>('designs');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<CreativeWorkItem | null>(null);
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

  const handleImageClick = (imageUrl: string) => {
    setZoomedImage(imageUrl);
  };

  const handleVideoClick = (item: CreativeWorkItem) => {
    setSelectedVideo(item);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section
      id="creative-work"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: '#0a0a0f',
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)'
      }}
      data-testid="creative-work-section"
    >
      {/* Cyberfunk Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            width: '100%',
            height: '100%',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center top'
          }}
        />
      </div>

      {/* Animated Neon Circles */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse" 
        style={{ background: 'radial-gradient(circle, #ff00ff 0%, transparent 70%)' }} />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse" 
        style={{ background: 'radial-gradient(circle, #00ffff 0%, transparent 70%)', animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header - Cyberfunk Style */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 
            className="text-4xl md:text-5xl font-black mb-2 relative inline-block" 
            style={{ 
              fontFamily: "'Orbitron', sans-serif",
              background: 'linear-gradient(90deg, #ff00ff 0%, #00ffff 50%, #ff00ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 0, 255, 0.5), 0 0 60px rgba(0, 255, 255, 0.3)',
              filter: 'drop-shadow(0 0 10px rgba(255, 0, 255, 0.8))'
            }}
          >
            Creative Showcase
          </h2>
          <div className="h-1 w-32 mx-auto mt-4 rounded-full" 
            style={{ 
              background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)'
            }} 
          />
        </div>

        {/* Tab Navigation - Cyberfunk Style */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-8 border-b-2" style={{ borderColor: 'rgba(255, 0, 255, 0.3)' }}>
            <button
              onClick={() => setActiveTab('designs')}
              className="pb-3 px-4 text-base font-bold transition-all relative uppercase tracking-wider"
              style={{ 
                color: activeTab === 'designs' ? '#ff00ff' : '#8a8a8a',
                fontFamily: "'Orbitron', sans-serif",
                textShadow: activeTab === 'designs' ? '0 0 10px rgba(255, 0, 255, 0.8)' : 'none'
              }}
              data-testid="tab-creative-works"
            >
              Cyber Gallery
              {activeTab === 'designs' && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-t animate-pulse"
                  style={{ 
                    background: 'linear-gradient(90deg, #ff00ff, #00ffff)',
                    boxShadow: '0 0 20px rgba(255, 0, 255, 1), 0 0 30px rgba(0, 255, 255, 0.8)'
                  }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className="pb-3 px-4 text-base font-bold transition-all relative uppercase tracking-wider"
              style={{ 
                color: activeTab === 'videos' ? '#00ffff' : '#8a8a8a',
                fontFamily: "'Orbitron', sans-serif",
                textShadow: activeTab === 'videos' ? '0 0 10px rgba(0, 255, 255, 0.8)' : 'none'
              }}
              data-testid="tab-videos"
            >
              Video Streams
              {activeTab === 'videos' && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-t animate-pulse"
                  style={{ 
                    background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(255, 0, 255, 0.8)'
                  }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Creative Works Grid - Cyberfunk Style */}
        {activeTab === 'designs' && (
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {designs.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-500"
                style={{ 
                  borderRadius: '12px',
                  transitionDelay: `${index * 50}ms`,
                  aspectRatio: '1/1',
                  boxShadow: '0 0 0 2px rgba(255, 0, 255, 0)',
                  border: '2px solid rgba(255, 0, 255, 0.2)'
                }}
                onClick={() => handleImageClick(item.fullImage || item.thumbnail)}
                data-testid={`design-item-${item.id}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 0, 255, 0.8), 0 0 50px rgba(0, 255, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.border = '2px solid rgba(255, 0, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(255, 0, 255, 0)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '2px solid rgba(255, 0, 255, 0.2)';
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ borderRadius: '10px' }}
                />
                
                {/* Neon Overlay on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.4) 0%, rgba(0, 255, 255, 0.4) 100%)',
                    borderRadius: '10px'
                  }}
                />
                
                {/* Scan Line Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, rgba(0, 255, 255, 0.1) 0px, transparent 2px, transparent 4px)',
                    animation: 'scan 3s linear infinite',
                    borderRadius: '10px'
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid - Cyberfunk Reels Style */}
        {activeTab === 'videos' && (
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {videos.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-500"
                style={{ 
                  borderRadius: '12px',
                  transitionDelay: `${index * 50}ms`,
                  aspectRatio: '9/16',
                  boxShadow: '0 0 0 2px rgba(0, 255, 255, 0)',
                  border: '2px solid rgba(0, 255, 255, 0.2)'
                }}
                onClick={() => handleVideoClick(item)}
                data-testid={`video-item-${item.id}`}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.8), 0 0 50px rgba(255, 0, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.border = '2px solid rgba(0, 255, 255, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 255, 255, 0)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.border = '2px solid rgba(0, 255, 255, 0.2)';
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  style={{ borderRadius: '10px' }}
                />

                {/* Dark Gradient Overlay with Neon Effect */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(10, 10, 15, 0.9) 0%, transparent 50%)',
                    borderRadius: '10px'
                  }}
                />

                {/* Cyberfunk Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.3), rgba(0, 255, 255, 0.3))',
                      border: '3px solid rgba(0, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.2)'
                    }}
                  >
                    <Play
                      size={28}
                      className="ml-1"
                      style={{ color: '#00ffff', filter: 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.8))' }}
                      fill="#00ffff"
                    />
                  </div>
                </div>

                {/* Title Overlay with Neon Glow */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                  <h4
                    className="text-sm font-bold line-clamp-2"
                    style={{
                      color: '#00ffff',
                      fontFamily: "'Orbitron', sans-serif",
                      textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.4)'
                    }}
                  >
                    {item.title}
                  </h4>
                </div>

                {/* Scan Line Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none"
                  style={{
                    background: 'repeating-linear-gradient(0deg, rgba(255, 0, 255, 0.1) 0px, transparent 2px, transparent 4px)',
                    animation: 'scan 3s linear infinite',
                    borderRadius: '10px'
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Zoom Overlay - Cyberfunk Style */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          style={{ 
            backgroundColor: 'rgba(10, 10, 15, 0.98)',
            backdropFilter: 'blur(10px)'
          }}
          onClick={handleCloseZoom}
          data-testid="image-zoom-overlay"
        >
          {/* Close Button - Cyberfunk Style */}
          <button
            onClick={handleCloseZoom}
            className="absolute top-6 right-6 z-50 p-3 rounded-lg transition-all hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.2), rgba(0, 255, 255, 0.2))',
              border: '2px solid rgba(255, 0, 255, 0.6)',
              color: '#ff00ff',
              boxShadow: '0 0 20px rgba(255, 0, 255, 0.6)',
              backdropFilter: 'blur(10px)'
            }}
            data-testid="close-zoom-btn"
          >
            <X size={28} style={{ filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.8))' }} />
          </button>

          {/* Zoomed Image with Neon Border */}
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            style={{
              border: '3px solid transparent',
              borderImage: 'linear-gradient(135deg, #ff00ff, #00ffff) 1',
              boxShadow: '0 0 50px rgba(255, 0, 255, 0.5), 0 0 80px rgba(0, 255, 255, 0.3)',
              borderRadius: '8px'
            }}
          >
            <img
              src={zoomedImage}
              alt="Zoomed view"
              className="max-w-full max-h-[90vh] object-contain cursor-zoom-out"
              style={{ borderRadius: '6px' }}
              onClick={handleCloseZoom}
              data-testid="zoomed-image"
            />
          </div>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal
          videoUrl={selectedVideo.videoUrl || ''}
          title={selectedVideo.title}
          description={selectedVideo.description}
          onClose={handleCloseVideo}
        />
      )}

      {/* Add Scan Line Animation CSS */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
