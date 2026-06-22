import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content" style={{ width: '100%', padding: '0 4rem', boxSizing: 'border-box' }}>
        <div className="nav-header">
          <Link to="/" className="nav-logo" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img src="/assets/logo.png" alt="Ozirotech Logo" style={{ height: '40px', width: 'auto', borderRadius: '50%', boxShadow: '0 0 10px rgba(255, 204, 0,0.5)' }} onError={(e) => { e.target.style.display = 'none'; }} />
            <span>OZIROTECH</span>
          </Link>
          <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </div>
        
        {/* Overlay to close menu when clicking outside */}
        {mobileMenuOpen && (
          <div 
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 90 }} 
            onClick={() => setMobileMenuOpen(false)} 
          />
        )}

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => { setMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
