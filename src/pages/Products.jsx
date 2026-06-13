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
      
      <section style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ marginBottom: '4rem', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)', textAlign: 'center' }}
        >
          <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', margin: 0, whiteSpace: 'nowrap' }}>
            Advanced <span style={{ color: 'var(--accent-purple)' }}>Hardware</span>
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
