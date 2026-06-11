import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const ProductCard = ({ product, index, displayOnly = false }) => {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = ((mouseX / width) - 0.5) * 30; // 15deg max rotation
    const rotateX = ((mouseY / height) - 0.5) * -30;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: 30 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 1, ease: [0.25, 0.8, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1500px',
        width: '100%',
        minHeight: '400px',
      }}
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.05 : 1,
          boxShadow: isHovered 
            ? `0 30px 60px rgba(0,0,0,0.8), 0 0 40px ${product.color}66, inset 0 0 20px ${product.color}33` 
            : `0 15px 35px rgba(0,0,0,0.5), 0 0 0 transparent, inset 0 0 0 transparent`,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        onClick={() => { if (!displayOnly) navigate(`/product/${product.id}`); }}
        style={{
          cursor: displayOnly ? 'default' : 'pointer',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          position: 'relative',
          borderRadius: '16px',
          background: 'var(--glass-bg)',
          backdropFilter: 'blur(20px)',
          border: `1px solid ${isHovered ? product.color : 'var(--glass-border)'}`,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          zIndex: isHovered ? 10 : 1,
        }}
      >
        {/* Dynamic Glow Overlay inside card */}
        <div 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: `radial-gradient(circle at ${rotation.y * 3 + 50}% ${-rotation.x * 3 + 50}%, ${product.color}22 0%, transparent 70%)`,
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'opacity 0.3s',
            opacity: isHovered ? 1 : 0
          }}
        />

        {/* Image layer floating above base */}
        <div style={{ height: '250px', width: '100%', position: 'relative', transformStyle: 'preserve-3d' }}>
          <motion.img 
            src={product.image} 
            alt={product.name} 
            animate={{ 
              translateZ: isHovered ? 60 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          />
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(3,5,10,1), transparent)', zIndex: 1 }}></div>
        </div>
        
        {/* Content layer floating even higher */}
        <motion.div 
          animate={{ translateZ: isHovered ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', zIndex: 2 }}
        >
          <h3 style={{ 
            fontSize: '1.8rem', 
            marginBottom: '0.5rem', 
            color: '#fff',
            textShadow: isHovered ? `0 0 15px ${product.color}` : 'none',
            transition: 'all 0.3s'
          }}>
            {product.name}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1, lineHeight: '1.6' }}>
            {product.tagline}
          </p>
          {!displayOnly && (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: product.color, fontWeight: '800', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', textShadow: `0 0 10px ${product.color}aa` }}>
              View <ChevronRight size={18} />
            </span>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCard;
