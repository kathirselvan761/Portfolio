import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';
import './About.css';

const About = () => {
  const cards = [
    {
      icon: <Code size={30} className="about-icon" />,
      title: "Web Development",
      desc: "Passionate about creating responsive, interactive, and beautiful front-end designs."
    },
    {
      icon: <Terminal size={30} className="about-icon" />,
      title: "MERN Stack",
      desc: "Building robust backend services and integrating full-stack applications."
    },
    {
      icon: <Cpu size={30} className="about-icon" />,
      title: "Continuous Learning",
      desc: "Always exploring new technologies and best practices to stay updated."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text glass-panel"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3>Get to know me</h3>
            <p>
              I am a final year Bachelor of Computer Applications (BCA) student at Gobi Arts & Science College (Autonomous), Gobichettipalayam.
              My journey in tech started with a profound curiosity about how the web works, which quickly blossomed into a deep passion for web development.
            </p>
            <p>
              Currently, I specialize in the <strong>MERN Stack</strong> (MongoDB, Express.js, React.js, Node.js). 
              I enjoy creating full-stack projects that solve real-world problems and building intuitive user interfaces that engage users.
            </p>
            <p>
              My goal is to leverage my skills in a dynamic internship or entry-level developer role, contributing to innovative projects while continuously learning and growing as an engineer.
            </p>
          </motion.div>

          <div className="about-cards">
            {cards.map((card, index) => (
              <motion.div 
                className="about-card glass-panel"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="icon-wrapper">
                  {card.icon}
                </div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
