import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        <Link to="/" className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/assets/logo.png" alt="Ozirotech Logo" style={{ height: '40px', width: 'auto', borderRadius: '50%', boxShadow: '0 0 10px rgba(255, 204, 0,0.5)' }} onError={(e) => { e.target.style.display = 'none'; }} />
          <span>OZIROTECH</span>
        </Link>
        <div className="nav-links">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
