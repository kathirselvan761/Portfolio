import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, MessageSquare, Puzzle, Heart } from 'lucide-react';
import './Achievements.css';

const Achievements = () => {
  const strengths = [
    {
      title: "Quick Learner",
      icon: <Zap size={35} />,
      desc: "Adapt rapidly to new technologies and constantly update my skill set."
    },
    {
      title: "Team Player",
      icon: <Users size={35} />,
      desc: "Collaborate effectively within diverse teams to achieve shared objectives."
    },
    {
      title: "Good Communication",
      icon: <MessageSquare size={35} />,
      desc: "Articulate complex technical concepts clearly to both technical and non-technical stakeholders."
    },
    {
      title: "Problem Solving",
      icon: <Puzzle size={35} />,
      desc: "Analyze issues critically and develop logical, efficient software solutions."
    },
    {
      title: "Passion for Web Dev",
      icon: <Heart size={35} />,
      desc: "Deeply enthusiastic about crafting exceptional digital experiences and building the web."
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Strengths & Highlights
        </motion.h2>

        <div className="strengths-grid">
          {strengths.map((item, index) => (
            <motion.div 
              className="strength-card glass-panel"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(138, 43, 226, 0.3)" }}
            >
              <div className="strength-icon-container">
                {item.icon}
                <div className="icon-glow"></div>
              </div>
              <h3 className="strength-title">{item.title}</h3>
              <p className="strength-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
