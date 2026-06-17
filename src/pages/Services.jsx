import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Brain, Car, Lightbulb } from 'lucide-react';

const labsData = [
  {
    title: 'Intelligent Robotics & Manipulation',
    desc: 'Encompasses our Robotics Innovation Lab, Humanoid Robotics, Industrial Robotics, and Robotic Arm Research Center. Focused on multi-axis robotic arms, pick-and-place systems, and intelligent human-robot interaction.',
    icon: <Bot size={28} color="var(--accent-cyan)" />,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Autonomous Systems & Mobility',
    desc: 'Combines our Autonomous Vehicle Lab, Drone Technology Lab, and Mobile Robotics Lab. We design and test self-driving vehicles, aerial robotics, SLAM mapping, and obstacle avoidance systems.',
    icon: <Car size={28} color="var(--accent-purple)" />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Artificial Intelligence & Vision',
    desc: 'Integrates our AI Lab, Computer Vision, NLP, and Edge AI Computing. Powering smart automation through deep learning, facial recognition, real-time video analytics, and intelligent voice assistants.',
    icon: <Brain size={28} color="var(--accent-magenta)" />,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'IoT & Advanced Research',
    desc: 'Features our Internet of Things (IoT) Lab and Research & Development Center. A smart ecosystem connecting environmental sensors, digital twins, and pushing the boundaries of human-machine collaboration.',
    icon: <Lightbulb size={28} color="var(--accent-cyan)" />,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', position: 'relative', minHeight: '100vh' }}>
      <div className="scanline-overlay"></div>
      <section style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: 0 }}>
            Innovation <span style={{ color: 'var(--accent-purple)' }}>Laboratories</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>[ Comprehensive Solutions ]</p>
        </motion.div>

        {/* 4 Columns layout on large screens */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          perspective: '1500px',
          gridAutoFlow: 'dense'
        }}>
          {labsData.map((lab, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', transformStyle: 'preserve-3d', height: '100%' }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5, 
                rotateX: -5,
                boxShadow: '0 25px 50px rgba(255, 204, 0, 0.2)' 
              }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '260px', transform: 'translateZ(20px)' }}>
                <motion.img 
                  src={lab.image} 
                  alt={lab.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: '-20px', 
                  right: '20px', 
                  background: 'rgba(10, 10, 15, 0.9)', 
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '15px', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                  zIndex: 2,
                  transform: 'translateZ(30px)'
                }}>
                  {lab.icon}
                </div>
              </div>
              <div style={{ padding: '3rem 2rem 2.5rem', transform: 'translateZ(30px)', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>{lab.title}</h3>
                <p className="text-justify-custom" style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '1.2rem' }}>{lab.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
