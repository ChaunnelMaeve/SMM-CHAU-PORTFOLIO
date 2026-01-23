import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  title: string;
  description?: string;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
}

export default function ImageModal({
  imageUrl,
  title,
  description,
  onClose,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext
}: ImageModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrevious && onPrevious) onPrevious();
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onPrevious, onNext, hasPrevious, hasNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(5, 8, 16, 0.95)' }}
      onClick={onClose}
      data-testid="image-modal"
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
        data-testid="close-modal-btn"
      >
        <X size={24} />
      </button>

      {/* Navigation Buttons */}
      {hasPrevious && onPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 z-50 p-3 rounded-lg transition-all hover:scale-110"
          style={{
            background: 'rgba(0, 255, 136, 0.1)',
            border: '1px solid var(--primary)',
            color: 'var(--primary)'
          }}
          data-testid="previous-btn"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-50 p-3 rounded-lg transition-all hover:scale-110"
          style={{
            background: 'rgba(0, 255, 136, 0.1)',
            border: '1px solid var(--primary)',
            color: 'var(--primary)'
          }}
          data-testid="next-btn"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Image Container */}
      <div
        className="max-w-6xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
          style={{
            boxShadow: '0 0 60px rgba(0, 255, 136, 0.3)'
          }}
        />
        
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
