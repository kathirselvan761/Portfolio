import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
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
            <form className="contact-form-element">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder=" "
                />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder=" "
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
