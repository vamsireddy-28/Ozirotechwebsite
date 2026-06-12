import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, GraduationCap, ClipboardCheck, PlusCircle } from 'lucide-react';

const servicesData = [
  {
    title: 'Robotics & Training',
    desc: 'We provide advanced robotics hardware along with expert trainers to explain their working mechanisms. Our comprehensive training modules cover everything from foundational robotics concepts to complex autonomous system programming, ensuring students gain hands-on practical experience.',
    icon: <Bot size={24} color="var(--accent-cyan)" />,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'OpenAI & Robotics Labs',
    desc: 'Complete setup of state-of-the-art OpenAI and Robotics labs tailored for colleges. We provide end-to-end infrastructure deployment, including high-performance computing units, AI integration tools, and dedicated workspaces designed to foster innovation and collaborative research.',
    icon: <GraduationCap size={24} color="var(--accent-purple)" />,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Regular Lab Inspections',
    desc: 'We inspect the labs every semester to ensure smooth operation and maintenance. Our dedicated technical team conducts rigorous hardware diagnostics, software updates, and safety compliance checks to guarantee that all equipment operates at peak efficiency with zero downtime.',
    icon: <ClipboardCheck size={24} color="var(--accent-magenta)" />,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Equipment Upgrades',
    desc: 'Adding new equipment yearly or half-yearly based on specific college requirements. We ensure your institution stays ahead of the technology curve by systematically introducing the latest robotic components, smart sensors, and advanced AI processors tailored to your evolving curriculum.',
    icon: <PlusCircle size={24} color="var(--accent-cyan)" />,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              className="glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              style={{ overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -15, boxShadow: '0 15px 40px rgba(0, 255, 255, 0.15)' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <motion.img 
                  src={service.image} 
                  alt={service.title}
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
                  padding: '12px', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                  zIndex: 2
                }}>
                  {service.icon}
                </div>
              </div>
              <div style={{ padding: '2.5rem 2rem 2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
