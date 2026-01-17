import { useState, useEffect } from 'react';
import { Terminal, Wifi, Database, Code2, Zap } from 'lucide-react';

const loadingMessages = [
  { text: 'Initializing Framework...', icon: Terminal },
  { text: 'Connecting to Database...', icon: Database },
  { text: 'Loading Neural Network...', icon: Zap },
  { text: 'Compiling Resources...', icon: Code2 },
  { text: 'Establishing Connection...', icon: Wifi },
  { text: 'System Ready...', icon: Terminal },
];

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    // Message cycling
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 800);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 100);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      clearInterval(glitchInterval);
    };
  }, [onComplete]);

  const currentMessage = loadingMessages[messageIndex];
  const IconComponent = currentMessage.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--bg-darker)' }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 animate-pulse"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 3s linear infinite',
          }}
        />
      </div>

      {/* Scanning lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,255,136,0.1) 50%, transparent 100%)',
          animation: 'scan 2s linear infinite',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-md w-full px-6">
        {/* Logo/Icon area */}
        <div className="flex justify-center mb-8">
          <div
            className={`relative ${glitchActive ? 'animate-glitch' : ''}`}
            style={{
              filter: glitchActive ? 'hue-rotate(90deg)' : 'none',
            }}
          >
            <div
              className="w-24 h-24 rounded-2xl flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(135deg, rgba(0,255,136,0.2) 0%, rgba(0,212,255,0.2) 100%)',
                border: '3px solid var(--primary)',
                boxShadow: '0 0 30px rgba(0,255,136,0.5), inset 0 0 20px rgba(0,255,136,0.1)',
              }}
            >
              <IconComponent size={48} style={{ color: 'var(--primary)' }} />
              
              {/* Pulse rings */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: '2px solid var(--primary)',
                  animation: 'pulse-ring 1.5s ease-out infinite',
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: '2px solid var(--primary)',
                  animation: 'pulse-ring 1.5s ease-out infinite 0.5s',
                }}
              />
            </div>
          </div>
        </div>

        {/* Loading message */}
        <div className="text-center mb-8">
          <div
            className="text-xl md:text-2xl font-bold mb-2 font-mono"
            style={{
              color: 'var(--primary)',
              textShadow: '0 0 10px rgba(0,255,136,0.5)',
            }}
          >
            {currentMessage.text}
          </div>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full"
                style={{
                  background: 'var(--primary)',
                  animation: `blink 1.4s infinite ${i * 0.2}s`,
                  boxShadow: '0 0 5px rgba(0,255,136,0.8)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Progress bar container */}
        <div className="space-y-2">
          {/* Progress percentage */}
          <div className="flex justify-between items-center text-sm font-mono">
            <span style={{ color: 'var(--text-secondary)' }}>LOADING</span>
            <span style={{ color: 'var(--primary)', fontWeight: 700 }}>
              {progress}%
            </span>
          </div>

          {/* Progress bar */}
          <div
            className="h-3 rounded-full overflow-hidden relative"
            style={{
              background: 'var(--bg-dark)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Background scanning effect */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.1) 50%, transparent 100%)',
                animation: 'scan-horizontal 1s linear infinite',
              }}
            />
            
            {/* Progress fill */}
            <div
              className="h-full relative transition-all duration-200 ease-out"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, var(--primary) 0%, rgba(0,212,255,1) 100%)',
                boxShadow: '0 0 10px rgba(0,255,136,0.8)',
              }}
            >
              {/* Shimmer effect */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                  animation: 'shimmer 1s linear infinite',
                }}
              />
            </div>

            {/* Segments */}
            <div className="absolute inset-0 flex">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 border-r"
                  style={{ borderColor: 'var(--bg-darker)' }}
                />
              ))}
            </div>
          </div>

          {/* File transfer simulation */}
          <div className="flex items-center justify-between text-xs font-mono mt-4" style={{ color: 'var(--text-secondary)' }}>
            <span>TRANSFERRING: {Math.floor(progress * 12.8)} / 128 FILES</span>
            <span>{(progress * 2.5).toFixed(1)} MB/s</span>
          </div>
        </div>

        {/* Binary code rain effect */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xs font-mono"
              style={{
                left: `${i * 12.5}%`,
                color: 'var(--primary)',
                animation: `fall ${2 + i * 0.3}s linear infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }

        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }

        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fall {
          0% { transform: translateY(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </div>
  );
}
