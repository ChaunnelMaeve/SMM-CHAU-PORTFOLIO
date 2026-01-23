import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface VideoModalProps {
  videoUrl: string;
  title: string;
  description?: string;
  onClose: () => void;
}

export default function VideoModal({
  videoUrl,
  title,
  description,
  onClose
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(5, 8, 16, 0.95)' }}
      onClick={onClose}
      data-testid="video-modal"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-lg transition-all hover:scale-110"
        style={{
          background: 'rgba(0, 255, 136, 0.1)',
          border: '1px solid var(--primary)',
          color: 'var(--primary)'
        }}
        data-testid="close-video-modal-btn"
      >
        <X size={24} />
      </button>

      {/* Video Container */}
      <div
        className="max-w-6xl w-full flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={videoUrl}
          controls
          autoPlay
          className="w-full rounded-lg"
          style={{
            boxShadow: '0 0 60px rgba(0, 255, 136, 0.3)',
            maxHeight: '75vh'
          }}
          data-testid="video-player"
        >
          Your browser does not support the video tag.
        </video>
        
        {/* Info Section */}
        <div className="mt-6 text-center">
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              color: 'var(--text-primary)',
              fontFamily: "'Orbitron', sans-serif"
            }}
          >
            {title}
          </h3>
          {description && (
            <p style={{ color: 'var(--text-secondary)' }}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
