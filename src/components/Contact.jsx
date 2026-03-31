import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm currently available for internships, entry-level roles, and
              freelance opportunities. Feel free to reach out to me.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:kathirselvanv@gmail.com">
                    kathirselvanv@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+916381159595">+91 63811 59595</a>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4>Location</h4>
                  <span>Gobichettipalayam, Tamil Nadu</span>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Find me on</h4>
              <div className="social-links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form glass-panel"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Send Message</h3>
            <form className="contact-form-element" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  disabled={isSubmitting}
                />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder=" "
                  disabled={isSubmitting}
                />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  placeholder=" "
                  disabled={isSubmitting}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              {submitStatus && (
                <div className={`submit-message ${submitStatus === 'success' ? 'success' : 'error'}`}>
                  <div className="message-content">
                    {submitStatus === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span>{submitMessage}</span>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
