import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // clear error upon typing
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const backendUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
        const response = await fetch(`${backendUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 5000);
        } else {
          alert(result.message || "Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Network error. Make sure the backend server is running.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <div className={styles.contactContainer}>
        <motion.div 
          className={styles.contactInfo}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Let's Connect</h3>
          <p>I'm currently seeking new opportunities as a Java Full Stack Developer. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
          <div className={styles.infoItems}>
            <div className={styles.infoItem}>
              <span className={styles.iconBox}><FaPhone /></span>
              <div>
                <h4>Phone</h4>
                <a href="tel:+916202507661">+91 6202507661</a>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <span className={styles.iconBox}><FaEnvelope /></span>
              <div>
                <h4>Email</h4>
                <a href="mailto:rupesh281255@gmail.com">rupesh281255@gmail.com</a>
              </div>
            </div>
          </div>

          <div className={styles.socials}>
            <h4>Social Profiles</h4>
            <div className={styles.socialIcons}>
              <a href="https://github.com/Rupesh72550" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rupesh-kumar-gupta-828432182/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.contactFormWrapper}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence>
            {isSubmitted && (
              <motion.div 
                className={styles.successPopup}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <FaCheckCircle className={styles.successIcon} />
                <p>Message sent successfully! I will get back to you shortly.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formGroup}>
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className={errors.name ? styles.errorInput : ''}
              />
              {errors.name && <span className={styles.errorMsg}>{errors.name}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className={errors.email ? styles.errorInput : ''}
              />
              {errors.email && <span className={styles.errorMsg}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5"
                value={formData.message} 
                onChange={handleChange}
                className={errors.message ? styles.errorInput : ''}
              ></textarea>
              {errors.message && <span className={styles.errorMsg}>{errors.message}</span>}
            </div>

            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
