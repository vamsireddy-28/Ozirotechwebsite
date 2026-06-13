import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text, delayOffset = 0, isBoldFirstWords = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delayOffset },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
    },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap", columnGap: "0.3rem", rowGap: "0.1rem", justifyContent: "flex-start", textAlign: "left" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span 
          variants={child} 
          key={index} 
          style={{ 
            fontWeight: index < isBoldFirstWords ? 'bold' : 'normal', 
            color: index < isBoldFirstWords ? 'var(--text-primary)' : 'inherit' 
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const text1 = "Our Mission: To develop future-ready innovators by providing hands-on access to cutting-edge robotics and AI technologies that prepare students for Industry 4.0 and Industry 5.0 careers.";
  
  const text2 = "Our Vision: To become a global leader in robotics and intelligent technology education by building world-class innovation laboratories that inspire creativity, research, and technological advancement.";

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="scanline-overlay"></div>
      
      {/* Mission & Vision Section */}
      <section className="full-container" style={{ position: 'relative', zIndex: 2, marginBottom: '6rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '90%', maxWidth: '1400px', margin: '0 auto', textAlign: 'left' }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', marginBottom: '4rem', textAlign: 'center', whiteSpace: 'nowrap' }}>
              About <span style={{ color: 'var(--accent-purple)', textShadow: '0 0 20px var(--accent-purple)' }}>OZIROTECH</span>
            </h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', marginBottom: '4rem', justifyContent: 'flex-start' }}>
              <div className="glass-panel" style={{ flex: '1 1 400px', maxWidth: '650px', minHeight: '280px', padding: '3.5rem 3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <AnimatedText text={text1} delayOffset={0.5} isBoldFirstWords={2} />
              </div>
              <div className="glass-panel" style={{ flex: '1 1 400px', maxWidth: '650px', minHeight: '280px', padding: '3.5rem 3rem', fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                <AnimatedText text={text2} delayOffset={2} isBoldFirstWords={2} />
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '3rem' }}
            >
              <div className="glass-panel" style={{ flex: '1 1 400px', maxWidth: '650px', minHeight: '220px', padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--accent-cyan)', marginBottom: '0.5rem', whiteSpace: 'nowrap' }}>100%</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Future Ready</p>
              </div>
              <div className="glass-panel" style={{ flex: '1 1 400px', maxWidth: '650px', minHeight: '220px', padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--accent-purple)', marginBottom: '0.5rem', whiteSpace: 'nowrap' }}>4.0 & 5.0</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1rem' }}>Industry Standard</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information Sections */}
      <section style={{ position: 'relative', zIndex: 2, width: '90%', margin: '0 5%' }}>
        <div className="three-col-grid">
          
          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ padding: '3rem 2rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>Industry Collaboration</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Ozirotech collaborates with technology manufacturers, research institutions, and innovation partners worldwide to provide access to emerging technologies and industry-standard equipment.
            </p>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '1px' }}>Global sourcing regions include:</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>North America</li>
              <li>Europe</li>
              <li>Asia-Pacific</li>
              <li>Middle East</li>
            </ul>
          </motion.div>

          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ padding: '3rem 2rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-magenta)', marginBottom: '1.5rem' }}>Workshops and Training</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Professional training programs help students and educators stay updated with emerging technologies.
            </p>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '1px' }}>Programs include:</h4>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>Robotics Bootcamps & AI Masterclasses</li>
              <li>Drone Development Workshops</li>
              <li>Automation Engineering Training</li>
              <li>Computer Vision Programs</li>
              <li>Industrial Robotics Certification</li>
              <li>IoT Innovation Sessions</li>
            </ul>
          </motion.div>

          <motion.div 
            className="glass-panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ padding: '3rem 2rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-purple)', marginBottom: '1.5rem' }}>Future Technologies</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Our laboratories are designed to support future innovations and cutting-edge paradigms.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {[
                "Humanoid Robots", "Collaborative Robots (Cobots)", "Swarm Robotics", 
                "Autonomous Drones", "AI-Powered Manufacturing", "Digital Twins", 
                "Smart Factories", "Spatial Computing", "Augmented Reality", "Next-Gen Automation"
              ].map((tech, i) => (
                <span key={i} style={{ 
                  padding: '5px 10px', 
                  background: 'rgba(255, 102, 0, 0.1)', 
                  border: '1px solid rgba(255, 102, 0, 0.3)', 
                  borderRadius: '20px', 
                  fontSize: '0.85rem',
                  color: 'var(--text-primary)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;
