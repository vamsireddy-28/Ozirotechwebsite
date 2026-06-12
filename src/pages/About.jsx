import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="scanline-overlay"></div>
      <section className="full-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '2rem' }}>
              About <span style={{ color: 'var(--accent-purple)', textShadow: '0 0 20px var(--accent-purple)' }}>OZIROTECH</span>
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'justify' }}>
              <strong>OZIROTECH AI WORLD PRIVATE LIMITED</strong> is a forward-thinking technology company specializing in transforming educational institutions. We focus on integrating advanced Artificial Intelligence, state-of-the-art Robotics, and comprehensive digital training infrastructure directly into college campuses. Our dedicated team of industry experts and engineers works relentlessly to bridge the gap between traditional academic learning and real-world technological advancements.
            </p>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
              From designing and setting up world-class OpenAI and Robotics laboratories to providing expert trainers, regular rigorous maintenance, and cutting-edge hardware upgrades, we deliver a complete end-to-end ecosystem. We don't just supply equipment; we cultivate environments of innovation. Our mission is to empower the next generation of students and educators with the immersive tools, hands-on experience, and ongoing support they need to lead in an era of rapid digital evolution.
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
