
import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ width: '100%', padding: '4rem 0 2rem 0', borderTop: '1px solid var(--glass-border)', background: 'rgba(3,5,10,0.9)', position: 'relative', zIndex: 10, boxSizing: 'border-box' }}>
      <div style={{ width: '90%', maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4rem', marginBottom: '3rem' }}>

        {/* Brand */}
        <div style={{ flex: '1 1 200px', maxWidth: '300px' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', letterSpacing: '3px', marginBottom: '0.5rem', color: '#fff' }}>OZIROTECH</h2>
          <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '0.85rem', letterSpacing: '2px', fontWeight: '600' }}>AI WORLD PRIVATE LIMITED</h4>
          <p style={{ color: 'var(--text-primary)', lineHeight: '1.6', maxWidth: '300px' }}>
            Empowering Education with Future AI & Content Creation Labs.
          </p>
        </div>

        {/* Links */}
        <div style={{ flex: '1 1 200px', maxWidth: '300px' }}>
          <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-primary)', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li><Link to="/" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>Home</Link></li>
            <li><Link to="/products" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>Product</Link></li>
            <li><Link to="/services" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>Services</Link></li>
            <li><Link to="/about" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>About Us</Link></li>
            <li><Link to="/contact" style={{ transition: 'color 0.3s', cursor: 'pointer' }} onMouseOver={e => e.target.style.color = 'var(--accent-cyan)'} onMouseOut={e => e.target.style.color = 'var(--text-primary)'}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Location / Contact */}
        <div style={{ flex: '1 1 250px', maxWidth: '350px' }}>
          <h3 style={{ color: 'var(--accent-purple)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>Contact Us</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-primary)', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
              <MapPin size={18} color="var(--accent-purple)" style={{ flexShrink: 0, marginTop: '4px' }} />
              <span style={{ lineHeight: '1.5' }}><strong>OZIROTECH AI WORLD</strong><br />Bhimunipatnam, Visakhapatnam,<br />Andhra Pradesh, India</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              <span>contact@ozirotech.com</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} color="var(--accent-purple)" style={{ flexShrink: 0 }} />
              <span>+91 7815823764</span>
            </li>
          </ul>
        </div>

        {/* Map Location */}
        <div style={{ flex: '1 1 250px', maxWidth: '350px' }}>
          <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.2rem', fontFamily: 'var(--font-display)', letterSpacing: '2px', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} /> Map Location
          </h3>
          <div style={{ width: '100%', height: '180px', borderRadius: '12px', overflow: 'hidden' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3795.7989473378666!2d83.41857907517776!3d17.94152898304325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU2JzI5LjUiTiA4M8KwMjUnMTYuMiJF!5e0!3m2!1sen!2sin!4v1782118068483!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div style={{ textAlign: 'center', color: 'var(--text-primary)', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.9rem' }}>
        &copy; {new Date().getFullYear()} OZIROTECH AI WORLD PRIVATE LIMITED. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
