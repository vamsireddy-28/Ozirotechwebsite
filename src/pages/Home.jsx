import { useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const TiltCard = ({ children, delayIndex = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="glass-panel"
      initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
      whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delayIndex * 0.1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 102, 0, 0.3)' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        padding: '2rem 1.5rem', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '200px',
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      <div className="animated-gradient-border"></div>
      <div style={{ transform: "translateZ(30px)", width: "100%", textAlign: "center" }}>
        {children}
      </div>
    </motion.div>
  );
};

const AnimatedText = ({ text, delayOffset = 0, isBoldFirstWords = 0 }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delayOffset },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: { opacity: 0, y: 10 },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap", columnGap: "0.35rem", rowGap: "0.2rem", justifyContent: "flex-start", textAlign: "left" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} style={{ fontWeight: index < isBoldFirstWords ? 'bold' : 'normal', color: index < isBoldFirstWords ? 'var(--text-primary)' : 'inherit' }}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

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
      <section className="hero-section">

        {/* Animated Background Logo */}
        <motion.div style={{ y, scale, opacity, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          <motion.img 
            src="/assets/logo.png" 
            alt="Ozirotech Background" 
            animate={{ rotate: [-15, 30, -15] }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ 
              width: 'clamp(350px, 68vw, 900px)', 
              height: 'auto', 
              marginTop: '100px',
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
                style={{ display: 'inline-block', fontSize: 'clamp(2rem, 8vw, 5rem)', fontWeight: 900, filter: 'drop-shadow(0 0 20px rgba(255, 204, 0, 0.8))' }}
              >
                OZIROTECH
              </motion.span> <br />
              <span className="text-gradient" style={{ display: 'inline-block', fontSize: 'clamp(1rem, 5.5vw, 2.5rem)', marginTop: '0.5rem', fontWeight: 800, filter: 'drop-shadow(0 0 15px rgba(255, 102, 0, 0.6))' }}>
                AI WORLD PRIVATE LIMITED
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}
          >
            <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: 'var(--accent-cyan)', marginBottom: '1rem', textTransform: 'none' }}>
              Empowering Education with Future Ai & Content Creation Labs
            </h2>
          </motion.div>

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
              Explore Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Robotics Education Matters Section */}
      <section className="full-container" style={{ position: 'relative', zIndex: 2, padding: 'clamp(2rem, 8vw, 8rem) 2rem', background: 'var(--glass-bg)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div style={{ width: '100%', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: 'clamp(1rem, 3.8vw, 3rem)', color: 'var(--text-primary)', marginBottom: '1rem', whiteSpace: 'nowrap' }}
          >
            Why <span style={{ color: 'var(--accent-purple)' }}>Robotics Education</span> Matters
          </motion.h2>
          <div className="robotics-text-block" style={{ color: 'var(--text-secondary)', fontSize: 'clamp(1.1rem, 3.5vw, 1.4rem)', margin: '0 auto 3rem auto', lineHeight: '1.8', textAlign: 'left' }}>
            <AnimatedText 
              text="Robotics and Artificial Intelligence are rapidly transforming every major industry globally, including manufacturing, healthcare, agriculture, logistics, defense, transportation, and smart cities. As these fields evolve, the demand for skilled innovators continues to skyrocket. Through practical experimentation, advanced project-based learning, and access to state-of-the-art lab equipment, students gain invaluable hands-on experience with the exact technologies that will define and shape the future workforce. We believe that empowering the next generation with these tools is the key to unlocking unprecedented technological advancements." 
              delayOffset={0.2} 
            />
          </div>

          <div className="skills-grid" style={{ perspective: '1000px' }}>
            {[
              "Problem-solving skills",
              "Engineering design thinking",
              "Programming expertise",
              "Automation knowledge",
              "Mechanical system understanding",
              "Artificial intelligence integration",
              "Real-world innovation capabilities",
              "Internet of Things (IoT) Systems"
            ].map((skill, index) => (
              <TiltCard key={index} delayIndex={index}>
                <h4 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.1rem', textTransform: 'none', letterSpacing: '1px' }}>
                  {skill}
                </h4>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
