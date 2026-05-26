import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import IntroAnimation from './components/IntroAnimation';
import Background from './components/Background';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import logo from './assets/logo.jpeg';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Demo from './pages/Demo';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Utils
import '@fontsource/space-grotesk/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="bg-background text-text min-h-screen selection:bg-primary selection:text-background font-body">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {loading ? (
            <IntroAnimation key="intro" onComplete={() => setLoading(false)} />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Background />
              <Navbar />

              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/demo" element={<Demo />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>

              <footer className="py-20 border-t border-border/30 bg-card/10">
                <div className="container mx-auto px-6 text-center">
                  <div className="flex flex-col items-center mb-6">
                    <img src={logo} alt="Logo" className="w-12 h-12 rounded-lg mb-4 opacity-80" />
                    <div className="text-2xl font-heading font-bold text-primary tracking-tighter uppercase leading-none">
                      AUTOZENIN
                    </div>
                  </div>
                  <p className="text-text/40 text-sm max-w-sm mx-auto mb-8 font-body">
                    Automating the present. Engineering the future. <br />
                    Based in Vijayawada, India.
                  </p>
                  <div className="flex justify-center space-x-6 mb-12">
                    {/* Social icons placeholder */}
                  </div>
                  <p className="text-text/20 text-xs font-body tracking-widest">
                    © 2026 AUTOZENIN. ALL RIGHTS RESERVED.
                  </p>
                </div>
              </footer>

              <WhatsAppButton />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
