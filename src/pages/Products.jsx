import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', position: 'relative', minHeight: '100vh' }}>
      <div className="scanline-overlay"></div>
      
      <section className="full-container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ marginBottom: '4rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: 0, textShadow: '0 0 20px var(--accent-cyan)' }}>
            Hardware <span style={{ color: 'var(--accent-purple)' }}>Arsenal</span>
          </h1>
          <p style={{ color: 'var(--accent-cyan)', letterSpacing: '3px', marginTop: '10px' }}>[ NEXT-GEN LABS ]</p>
        </motion.div>

        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
