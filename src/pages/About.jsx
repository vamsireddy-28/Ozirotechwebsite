import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="scanline-overlay"></div>
      <section className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem' }}>
              About <span style={{ color: 'var(--accent-purple)', textShadow: '0 0 20px var(--accent-purple)' }}>OZIROTECH</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '2', marginBottom: '2rem' }}>
              Ozirotech is a pioneer in the intersection of Artificial Intelligence, Robotics, and Digital Education. 
              Our mission is to empower the next generation with immersive labs, cutting-edge hardware arsenals, and revolutionary AI content creation tools. 
              We build the architecture of tomorrow, today.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '3rem' }}>
              <div className="glass-panel" style={{ padding: '2rem 3rem', minWidth: '250px' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>50+</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Years Combined Exp.</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem 3rem', minWidth: '250px' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>100%</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Next-Gen Ready</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
