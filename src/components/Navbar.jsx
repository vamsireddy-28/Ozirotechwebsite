import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-content" style={{ width: '100%', padding: '0 4rem', boxSizing: 'border-box' }}>
        <Link to="/" className="nav-logo" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '15px', zIndex: 1002 }}>
          <img src="/assets/logo.png" alt="Ozirotech Logo" style={{ height: '40px', width: 'auto', borderRadius: '50%', boxShadow: '0 0 10px rgba(255, 204, 0,0.5)' }} onError={(e) => { e.target.style.display = 'none'; }} />
          <span>OZIROTECH</span>
        </Link>
        
        <div className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'none', cursor: 'pointer', zIndex: 1002 }}>
          {isOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
