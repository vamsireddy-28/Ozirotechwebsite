import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { motion } from 'framer-motion';
import { ArrowLeft, Zap, Box, Activity } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div className="container" style={{ paddingTop: '100px' }}><h1>Product Not Found</h1></div>;
  }

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px' }}>
      <div className="container">
        <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', marginBottom: '2rem', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
          <ArrowLeft size={16} /> Back
        </Link>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-panel"
            style={{ padding: '1rem', position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', right: '-20px', bottom: '-20px', background: `radial-gradient(circle at center, ${product.color}22, transparent 70%)`, zIndex: -1 }}></div>
            <motion.img 
              src={product.image} 
              alt={product.name} 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{ width: '100%', borderRadius: '8px', display: 'block', height: 'auto', maxHeight: '500px', objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Details Side */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, staggerChildren: 0.1 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '0.5rem', background: `linear-gradient(90deg, #fff, ${product.color})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              {product.name}
            </motion.h1>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: 'var(--text-secondary)', fontWeight: '400', letterSpacing: '2px', marginBottom: '2rem', textTransform: 'uppercase' }}
            >
              {product.tagline}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', color: '#ccc', fontStyle: 'italic', borderLeft: `3px solid ${product.color}`, paddingLeft: '1rem' }}
            >
              {product.description}
            </motion.p>

            {product.detailedContent && (
              <div style={{ marginBottom: '3rem' }}>
                {product.detailedContent.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    style={{ fontSize: '1rem', lineHeight: '1.9', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              {product.features && product.features.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="glass-panel" 
                  style={{ padding: '1.5rem' }}
                >
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: product.color, fontSize: '0.9rem' }}><Activity size={18} /> Key Features</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {product.features.map((feat, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        style={{ marginBottom: '0.8rem', color: '#ddd', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: product.color, flexShrink: 0 }}></div>
                        {feat}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="glass-panel" 
                style={{ padding: '1.5rem' }}
              >
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: product.color, fontSize: '0.9rem' }}><Box size={18} /> Specifications</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {Object.entries(product.specs).map(([key, value], i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '5px' }}>
                      <span style={{ textTransform: 'capitalize', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span style={{ fontWeight: '600', color: '#fff', fontSize: '0.85rem', textAlign: 'right' }}>{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
