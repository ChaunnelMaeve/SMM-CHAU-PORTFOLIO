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
      className="py-20 relative"
      style={{ backgroundColor: '#1a1a1a' }}
      data-testid="creative-work-section"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-2" style={{ fontFamily: "'Orbitron', sans-serif", color: '#ffffff' }}>
            Creative Showcase
          </h2>
        </div>

        {/* Tab Navigation - Facebook Style */}
        <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-8 border-b" style={{ borderColor: '#3a3a3a' }}>
            <button
              onClick={() => setActiveTab('designs')}
              className="pb-3 px-2 text-base font-medium transition-all relative"
              style={{ 
                color: activeTab === 'designs' ? '#4a9eff' : '#8a8a8a',
                fontWeight: activeTab === 'designs' ? '600' : '400'
              }}
              data-testid="tab-creative-works"
            >
              FIESTA Community's Photos
              {activeTab === 'designs' && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-t"
                  style={{ backgroundColor: '#4a9eff' }}
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className="pb-3 px-2 text-base font-medium transition-all relative"
              style={{ 
                color: activeTab === 'videos' ? '#4a9eff' : '#8a8a8a',
                fontWeight: activeTab === 'videos' ? '600' : '400'
              }}
              data-testid="tab-videos"
            >
              Videos
              {activeTab === 'videos' && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 rounded-t"
                  style={{ backgroundColor: '#4a9eff' }}
                />
              )}
            </button>
          </div>
        </div>

        {/* Creative Works Grid - Facebook Style */}
        {activeTab === 'designs' && (
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {designs.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:opacity-80"
                style={{ 
                  borderRadius: '8px',
                  transitionDelay: `${index * 50}ms`,
                  aspectRatio: '1/1'
                }}
                onClick={() => handleImageClick(item.fullImage || item.thumbnail)}
                data-testid={`design-item-${item.id}`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '8px' }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Videos Grid - Facebook Reels Style */}
        {activeTab === 'videos' && (
          <div 
            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 transition-all duration-700 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {videos.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:opacity-80"
                style={{ 
                  borderRadius: '8px',
                  transitionDelay: `${index * 50}ms`,
                  aspectRatio: '9/16'
                }}
                onClick={() => handleVideoClick(item)}
                data-testid={`video-item-${item.id}`}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: '8px' }}
                />

                {/* Dark Gradient Overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%)',
                    borderRadius: '8px'
                  }}
                />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    <Play
                      size={24}
                      className="ml-1"
                      style={{ color: '#000' }}
                      fill="#000"
                    />
                  </div>
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                  <h4
                    className="text-sm font-semibold line-clamp-2"
                    style={{
                      color: '#ffffff',
                    }}
                  >
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Zoom Overlay */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
          onClick={handleCloseZoom}
          data-testid="image-zoom-overlay"
        >
          {/* Close Button */}
          <button
            onClick={handleCloseZoom}
            className="absolute top-4 right-4 z-50 p-2 rounded-lg transition-all hover:scale-110"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff'
            }}
            data-testid="close-zoom-btn"
          >
            <X size={24} />
          </button>

          {/* Zoomed Image */}
          <img
            src={zoomedImage}
            alt="Zoomed view"
            className="max-w-full max-h-[90vh] object-contain cursor-zoom-out"
            onClick={handleCloseZoom}
            data-testid="zoomed-image"
          />
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
    </section>
  );
}
