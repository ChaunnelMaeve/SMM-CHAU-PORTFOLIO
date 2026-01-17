import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import PortfolioDetail from './pages/PortfolioDetail';

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setFadeOut(true);
    setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 500);
  };

  // Anti-copy protection - Detect if site is being accessed locally or from unauthorized domain
  useEffect(() => {
    // Replace this with your actual domain
    const AUTHORIZED_DOMAIN = 'yourdomain.com'; // Change this to your actual domain
    
    const checkAccess = () => {
      const protocol = window.location.protocol;
      const hostname = window.location.hostname;
      
      // Check if accessed from file:// (saved website)
      if (protocol === 'file:') {
        redirectToOriginal();
        return;
      }
      
      // Check if accessed from unauthorized domain (optional - uncomment when deployed)
      // if (hostname !== AUTHORIZED_DOMAIN && hostname !== 'localhost' && !hostname.includes('127.0.0.1')) {
      //   redirectToOriginal();
      //   return;
      // }
    };

    const redirectToOriginal = () => {
      // Create a full-page redirect overlay
      document.body.innerHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Redirecting...</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            body {
              font-family: 'Courier New', monospace;
              background: #0a0e27;
              color: #00ff88;
              display: flex;
              justify-content: center;
              align-items: center;
              min-height: 100vh;
              overflow: hidden;
            }
            
            .container {
              text-align: center;
              padding: 40px;
              max-width: 600px;
            }
            
            .glitch {
              font-size: 48px;
              font-weight: bold;
              text-transform: uppercase;
              position: relative;
              text-shadow: 0 0 10px #00ff88;
              animation: glitch 1s linear infinite;
            }
            
            @keyframes glitch {
              2%, 64% {
                transform: translate(2px, 0) skew(0deg);
              }
              4%, 60% {
                transform: translate(-2px, 0) skew(0deg);
              }
              62% {
                transform: translate(0, 0) skew(5deg); 
              }
            }
            
            .message {
              font-size: 18px;
              margin: 30px 0;
              line-height: 1.6;
              color: #00d4ff;
            }
            
            .warning {
              color: #ff0080;
              font-size: 16px;
              margin: 20px 0;
            }
            
            .spinner {
              border: 4px solid rgba(0, 255, 136, 0.1);
              border-radius: 50%;
              border-top: 4px solid #00ff88;
              width: 50px;
              height: 50px;
              animation: spin 1s linear infinite;
              margin: 30px auto;
            }
            
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            
            .grid {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-image: 
                linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px);
              background-size: 50px 50px;
              z-index: -1;
              opacity: 0.3;
            }
            
            .countdown {
              font-size: 24px;
              color: #00ff88;
              margin: 20px 0;
              text-shadow: 0 0 10px #00ff88;
            }
          </style>
        </head>
        <body>
          <div class="grid"></div>
          <div class="container">
            <div class="glitch">⚠️ ACCESS DENIED ⚠️</div>
            <div class="message">
              🚫 Unauthorized Access Detected<br>
              This is a copied/saved version of the website.
            </div>
            <div class="warning">
              ⚡ Redirecting to the official website...<br>
              Built with ❤️ by Chaunnel
            </div>
            <div class="spinner"></div>
            <div class="countdown" id="countdown">Redirecting in <span id="timer">3</span> seconds...</div>
          </div>
          <script>
            let count = 3;
            const timerElement = document.getElementById('timer');
            const interval = setInterval(() => {
              count--;
              if (timerElement) timerElement.textContent = count;
              if (count <= 0) {
                clearInterval(interval);
                // Replace with your actual website URL
                window.location.href = 'https://yourdomain.com';
              }
            }, 1000);
          </script>
        </body>
        </html>
      `;
    };

    checkAccess();
  }, []);

  // Block right-click and source inspection
  useEffect(() => {
    // Fun console message with cyberpunk theme
    const styles = {
      title: 'color: #00ff88; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ff88; font-family: monospace;',
      subtitle: 'color: #00d4ff; font-size: 16px; font-weight: bold; font-family: monospace;',
      text: 'color: #00ff88; font-size: 14px; font-family: monospace;',
      accent: 'color: #ff0080; font-size: 14px; font-weight: bold; font-family: monospace;',
      dim: 'color: #666; font-size: 12px; font-family: monospace;',
    };

    console.clear();
    console.log('%c', 'font-size: 1px; padding: 100px 150px; background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9Im1vbm9zcGFjZSIgZm9udC1zaXplPSI0MCIgZmlsbD0iIzAwZmY4OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+8J+VuO+4jzwvdGV4dD48L3N2Zz4="); background-size: contain; background-repeat: no-repeat;');
    
    console.log('%c╔═══════════════════════════════════════════════════════════╗', styles.title);
    console.log('%c║          🕵️  SYSTEM INTRUSION DETECTED  🕵️               ║', styles.title);
    console.log('%c╚═══════════════════════════════════════════════════════════╝', styles.title);
    console.log('');
    console.log('%c⚡ ACCESS LEVEL: CURIOUS DEVELOPER', styles.subtitle);
    console.log('%c⚡ STATUS: GRANTED (Because I like curious minds!)', styles.subtitle);
    console.log('');
    console.log('%c[SYSTEM MESSAGE]', styles.accent);
    console.log('%cHey there, fellow code explorer! 👋', styles.text);
    console.log('%cI see you\'re checking out the console...', styles.text);
    console.log('');
    console.log('%c📡 Fun fact: You just triggered my detection system!', styles.text);
    console.log('%c🔧 But don\'t worry, I built this with passion and cyberpunk vibes.', styles.text);
    console.log('');
    console.log('%c💼 Looking for a developer?', styles.accent);
    console.log('%c✨ I\'m Chaunnel - Full-stack dev with a love for clean code', styles.text);
    console.log('%c🚀 Let\'s build something amazing together!', styles.text);
    console.log('');
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.dim);
    console.log('%c👾 Easter Egg Unlocked! Type "hack()" for a surprise...', styles.accent);
    console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', styles.dim);
    console.log('');
    console.log('%c// Built with ❤️ and ☕ by Chaunnel', styles.dim);
    console.log('%c// React + TypeScript + Tailwind CSS + Vibe ✨', styles.dim);
    console.log('');

    // Easter egg function
    (window as any).hack = () => {
      console.clear();
      console.log('%c🎮 INITIALIZING HACK SEQUENCE...', 'color: #ff0080; font-size: 16px; font-weight: bold; font-family: monospace;');
      console.log('%c[████████████████████████] 100%', 'color: #00ff88; font-family: monospace;');
      console.log('');
      console.log('%c🎉 CONGRATULATIONS! 🎉', 'color: #00ff88; font-size: 20px; font-weight: bold; font-family: monospace;');
      console.log('%cYou\'ve successfully "hacked" into... absolutely nothing! 😄', 'color: #00d4ff; font-size: 14px; font-family: monospace;');
      console.log('%cBut here\'s my contact info since you made it this far:', 'color: #00ff88; font-family: monospace;');
      console.log('');
      console.log('%c📧 Email: contact@chaunnel.dev', 'color: #00ff88; font-family: monospace;');
      console.log('%c💼 LinkedIn: /in/chaunnel', 'color: #00ff88; font-family: monospace;');
      console.log('%c🐙 GitHub: @chaunnel', 'color: #00ff88; font-family: monospace;');
      console.log('');
      console.log('%cP.S. - I appreciate your curiosity! Let\'s connect! 🚀', 'color: #ff0080; font-style: italic; font-family: monospace;');
    };

    console.log('%c💡 TIP: I appreciate curiosity, but hiring me would be cooler! 😎', 'color: #ff0080; font-size: 12px; font-style: italic; font-family: monospace;');
    console.log('');

    // Disable right-click
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable keyboard shortcuts for dev tools and view source
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12 - Developer Tools
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+I - Developer Tools
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+C - Inspect Element
      if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+Shift+J - Console
      if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+U - View Source
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Ctrl+S - Save Page
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection via keyboard
    const handleSelectStart = (e: Event) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || 
          (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return true;
      }
      // Allow selection in specific cases if needed
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            opacity: fadeOut ? 0 : 1,
            transition: 'opacity 0.5s ease-out',
          }}
        >
          <Preloader onComplete={handleLoadComplete} />
        </div>
      )}
      
      <Router>
        <div 
          className={`bg-gray-900 text-white overflow-x-hidden ${showContent ? 'animate-fade-in' : 'opacity-0'}`}
          style={{
            animation: showContent ? 'fadeInUp 0.8s ease-out forwards' : 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          }}
        >
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/portfolio/:projectId" element={<PortfolioDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        * {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        input, textarea {
          -webkit-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }
      `}</style>
    </>
  );
}

export default App;
