import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ width: '100%', padding: '4rem 4rem 2rem 4rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(3,5,10,0.9)', position: 'relative', zIndex: 10, boxSizing: 'border-box' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
        
        {/* Brand */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-display)', letterSpacing: '3px', marginBottom: '1rem', color: '#fff' }}>OZIROTECH</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '300px' }}>
            Empowering Education with Future Ai & Content Creation Labs.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li><Link to="/" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color='var(--accent-cyan)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Home</Link></li>
            <li><a href="/#about" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color='var(--accent-cyan)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>About Us</a></li>
            <li><a href="/#services" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color='var(--accent-cyan)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Services</a></li>
            <li><Link to="/products" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color='var(--accent-cyan)'} onMouseOut={e => e.target.style.color='var(--text-secondary)'}>Advanced Hardware</Link></li>
          </ul>
        </div>

        {/* Location / Contact */}
        <div>
          <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>Contact Us</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', lineHeight: '2' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <MapPin size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              <span>Koramangala, Bengaluru, Karnataka, India</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <Mail size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              <span>contact@ozirotech.com</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              <span>+91 98765 43210</span>
            </li>
          </ul>
        </div>

      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} OZIROTECH AI WORLD PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
