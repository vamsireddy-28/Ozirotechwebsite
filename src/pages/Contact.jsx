import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingBottom: '100px', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingTop: '120px' }}>
      {/* GLOBAL SCANLINE FOR FUTURISTIC EFFECT */}
      <div className="scanline-overlay"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            <span className="radial-text-gradient">GET IN TOUCH</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Have questions about our products, services, or educational labs? We're here to help you build the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel"
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto',
            overflow: 'hidden'
          }}
        >
          <div className="animated-gradient-border"></div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Robot Image Side */}
            <div style={{ flex: '1 1 300px', padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', zIndex: 1 }}>
              <img 
                src="/assets/tesla_optimus_1781171028026.png" 
                alt="Ozirotech Robotics Product" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  objectFit: 'contain', 
                  filter: 'drop-shadow(0 10px 30px rgba(255, 204, 0, 0.3))',
                  transform: 'scaleX(-1)'
                }} 
              />
            </div>

            {/* Contact Form Side */}
            <div style={{ flex: '1 1 400px', padding: '3rem', zIndex: 1 }}>
              <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
              <form 
                action="https://formsubmit.co/chenikalavamsireddy@gmail.com" 
                method="POST"
                target="hidden_iframe"
                onSubmit={(e) => {
                  // Do NOT preventDefault, let it submit to the iframe
                  const form = e.target;
                  const submitBtn = form.querySelector('button[type="submit"]');
                  const originalText = submitBtn.innerHTML;
                  
                  submitBtn.innerHTML = 'Sending...';
                  submitBtn.disabled = true;

                  // Fake a success UI update after 1.5s since cross-origin iframes can't be read
                  setTimeout(() => {
                    submitBtn.innerHTML = 'Message Sent!';
                    submitBtn.style.background = 'var(--accent-cyan)';
                    submitBtn.style.color = '#000';
                    form.reset();
                    
                    setTimeout(() => {
                      submitBtn.innerHTML = originalText;
                      submitBtn.disabled = false;
                      submitBtn.style.background = 'transparent';
                      submitBtn.style.color = 'var(--accent-cyan)';
                    }, 3000);
                  }, 1500);
                }} 
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <h2 style={{ color: 'var(--text-primary)', fontSize: '1.8rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Send a Message</h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="John Doe"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid var(--glass-border)', 
                      padding: '1rem', 
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'var(--font-main)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }} 
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="john@example.com"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid var(--glass-border)', 
                      padding: '1rem', 
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'var(--font-main)',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    placeholder="How can we help you?"
                    style={{ 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid var(--glass-border)', 
                      padding: '1rem', 
                      borderRadius: '8px',
                      color: '#fff',
                      fontFamily: 'var(--font-main)',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="glow-button"
                  style={{ 
                    marginTop: '1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '10px' 
                  }}
                >
                  Send Message
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
