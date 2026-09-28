import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 2rem 100px',
      position: 'relative'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '600px',
        width: '100%',
        padding: '3.5rem 2rem',
        textAlign: 'center'
      }}>
        <div className="animated-gradient-border"></div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: 'clamp(4rem, 10vw, 6rem)',
            margin: '0 0 1rem 0',
            lineHeight: 1
          }}
          className="text-gradient"
        >
          404
        </motion.h1>
        <h2 style={{
          color: '#fff',
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          marginBottom: '1rem'
        }}>
          Page Not Found
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          The coordinates you entered do not exist within the Ozirotech AI World network. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="glow-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none'
          }}
        >
          <Home size={18} />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
