import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import LifeJuices from './pages/LifeJuices';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop component to handle scrolling on route change
const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => ({ pathname: window.location.hash }), []);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/life-juices" element={<LifeJuices />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;