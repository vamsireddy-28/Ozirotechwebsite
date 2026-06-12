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
      style={{ display: "inline-flex", flexWrap: "wrap", columnGap: "0.3rem", rowGap: "0.1rem", justifyContent: "flex-start", textAlign: "justify" }}
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

  const text1 = "OZIROTECH AI WORLD PRIVATE LIMITED is a forward-thinking technology company specializing in transforming educational institutions. We focus on integrating advanced Artificial Intelligence, state-of-the-art Robotics, and comprehensive digital training infrastructure directly into college campuses. Our dedicated team of industry experts and engineers works relentlessly to bridge the gap between traditional academic learning and real-world technological advancements.";
  
  const text2 = "From designing and setting up world-class OpenAI and Robotics laboratories to providing expert trainers, regular rigorous maintenance, and cutting-edge hardware upgrades, we deliver a complete end-to-end ecosystem. We don't just supply equipment; we cultivate environments of innovation. Our mission is to empower the next generation of students and educators with the immersive tools, hands-on experience, and ongoing support they need to lead in an era of rapid digital evolution.";

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
            <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem', textAlign: 'justify' }}>
              <AnimatedText text={text1} delayOffset={0.5} isBoldFirstWords={5} />
            </div>
            <div style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', textAlign: 'justify' }}>
              <AnimatedText text={text2} delayOffset={3} />
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 6, duration: 1 }}
              viewport={{ once: true }}
              style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem', marginTop: '3rem' }}
            >
              <div className="glass-panel" style={{ padding: '2rem 3rem', minWidth: '250px' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent-cyan)', marginBottom: '0.5rem' }}>50+</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Years Combined Exp.</p>
              </div>
              <div className="glass-panel" style={{ padding: '2rem 3rem', minWidth: '250px' }}>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent-purple)', marginBottom: '0.5rem' }}>100%</h3>
                <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Next-Gen Ready</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
