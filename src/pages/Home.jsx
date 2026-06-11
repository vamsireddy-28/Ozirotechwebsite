import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.8]);

  return (
    <div style={{ paddingBottom: '100px', position: 'relative' }}>

      {/* GLOBAL SCANLINE FOR FUTURISTIC EFFECT */}
      <div className="scanline-overlay"></div>

      {/* Hero Section with CSS Grid & Parallax */}
      <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>

        {/* Animated Background Logo */}
        <motion.div style={{ y, scale, opacity, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <motion.img 
            src="/assets/logo.png" 
            alt="Ozirotech Background" 
            animate={{ rotate: 360, scale: [1, 1.3, 1] }}
            transition={{ 
              rotate: { duration: 60, repeat: Infinity, ease: "linear" },
              scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ 
              width: '90vw', 
              maxWidth: '1200px', 
              height: 'auto', 
              opacity: 0.45, 
              filter: 'blur(1px) drop-shadow(0 0 80px rgba(255,204,0,0.8))' 
            }} 
          />
        </motion.div>

        <div className="container" style={{ textAlign: 'center', zIndex: 1, perspective: '1000px' }}>
          <motion.div
            initial={{ opacity: 0, rotateX: 45, y: 100, translateZ: -200 }}
            animate={{ opacity: 1, rotateX: 0, y: 0, translateZ: 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h1 style={{
              margin: 0,
              lineHeight: '1.1'
            }}>
              <motion.span
                className="radial-text-gradient"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: 'inline-block', fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
              >
                OZIROTECH
              </motion.span> <br />
              <span className="text-gradient" style={{ display: 'inline-block', fontSize: 'clamp(1.4rem, 6.5vw, 2.5rem)', marginTop: '0.5rem', whiteSpace: 'nowrap' }}>
                AI WORLD PRIVATE LIMITED
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ fontSize: 'clamp(1rem, 3vw, 1.4rem)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem auto', lineHeight: '1.8' }}
          >
            Empowering Education with Future Ai & Content Creation Labs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: 'spring' }}
            style={{ animation: 'float3D 6s ease-in-out infinite' }}
          >
            <Link
              to="/products"
              className="glow-button"
              style={{ fontSize: '1.2rem', padding: '15px 40px', display: 'inline-block' }}
            >
              Explore Product
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
