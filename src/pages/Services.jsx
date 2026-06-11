import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Video, Globe } from 'lucide-react';

const servicesData = [
  {
    title: 'Custom AI Models',
    desc: 'Enterprise-grade LLMs and predictive algorithms.',
    icon: <Brain size={40} color="var(--accent-cyan)" />
  },
  {
    title: 'Web 3.0 Architecture',
    desc: 'Next-generation decentralized web platforms.',
    icon: <Globe size={40} color="var(--accent-purple)" />
  },
  {
    title: 'Generative Content',
    desc: 'AI-driven content generation and VFX labs.',
    icon: <Video size={40} color="var(--accent-magenta)" />
  },
  {
    title: 'Data Pipelines',
    desc: 'High-throughput enterprise data processing.',
    icon: <Code size={40} color="var(--accent-cyan)" />
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', position: 'relative', minHeight: '100vh' }}>
      <div className="scanline-overlay"></div>
      <section className="full-container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: 0, textShadow: '0 0 20px var(--accent-cyan)' }}>
            Our <span style={{ color: 'var(--accent-cyan)' }}>Services</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px', letterSpacing: '3px' }}>[ EMPOWERING THE FUTURE ]</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              style={{ padding: '2.5rem 2rem', textAlign: 'center', transition: 'transform 0.3s' }}
              whileHover={{ translateY: -10, boxShadow: '0 0 30px rgba(255, 204, 0, 0.2)' }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{service.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
