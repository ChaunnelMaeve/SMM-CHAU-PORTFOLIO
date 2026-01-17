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
      `}</style>
    </>
  );
}

export default App;
