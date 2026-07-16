import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Download, ArrowRight, Mail } from "lucide-react";
import Aurora from "./Aurora";
import "./Hero.css";


const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Aurora animated background */}
      <div className="hero-aurora-bg">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          amplitude={1}
          blend={0.5}
          speed={0.6}
        />
      </div>

      {/* Background animated blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3
            className="greeting text-gradient"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Hello, I am
          </motion.h3>

          <motion.h1
            className="name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            KATHIRSELVAN V
          </motion.h1>

          <motion.h2
            className="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
             <span className="text-gradient">|</span>Full-Stack Developer
            
          </motion.h2>

          <motion.p
            className="summary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            A passionate developer focusing on building scalable, beautiful, and
            user-centric web applications. I love turning complex problems into
            simple, beautiful, and intuitive designs.
          </motion.p>

          <motion.div
            className="cta-group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-80}>
              <button className="btn btn-primary">
                View Projects <ArrowRight size={18} />
              </button>
            </Link>
            <a
              href="/img/Resume.pdf"
              download
              className="btn btn-outline"
            >
              Download Resume <Download size={18} />
            </a>
            <Link to="contact" smooth={true} duration={500} offset={-80}>
              <button
                className="btn btn-outline"
                style={{ borderColor: "var(--color-accent)" }}
              >
                Contact Me <Mail size={18} />
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, rotate: -5, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          {/* Flip Card */}
          <div className="hero-flip-card">
            <div className="hero-flip-inner">

              {/* Front — profile photo */}
              <div className="hero-flip-front">
                <div className="glass-panel image-container">
                  <img
                    src="/img/photo3.jpg"
                    alt="Kathirselvan V"
                    className="profile-img"
                  />
                </div>
              </div>

              {/* Back — About Me */}
              <div className="hero-flip-back glass-panel">
                <div className="flip-about-content">
                  <p className="flip-about-greeting">👋 About Me</p>
                  <h3 className="flip-about-name">Kathirselvan V</h3>
                  <p className="flip-about-role">Full-Stack Developer</p>
                  <p className="flip-about-bio">
                    Passionate about building scalable, beautiful, and
                    user-centric web applications. I love turning complex
                    problems into intuitive designs.
                  </p>
                  <ul className="flip-about-highlights">
                    <li>🎓 B.C.A</li>
                    <li>💼 Full Stack Developer</li>
                    <li>📍 Tamil Nadu, India</li>
                    <li>🚀 Open to  Job and Internship</li>
                    <li>🤝 Let's connect!</li>

                  </ul>
                </div>
              </div>

            </div>
          </div>

          {/* Floating glass elements */}
          {/* <div className="floating-card glass-panel react-badge">
            <i className="devicon-react-original colored"></i>
            <span>React.js</span>
          </div>
          <div className="floating-card glass-panel node-badge">
            <i className="devicon-nodejs-plain colored"></i>
            <span>Node.js</span>
          </div>
          <div className="floating-card glass-panel mongo-badge">
            <i className="devicon-mongodb-plain colored"></i>
            <span>MongoDB</span>
          </div>
          <div className="floating-card glass-panel mysql-badge">
            <i className="devicon-mysql-plain colored"></i>
            <span>MySQL</span>
          </div>
          <div className="floating-card glass-panel php-badge">
            <i className="devicon-php-plain colored"></i>
            <span>PHP</span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
