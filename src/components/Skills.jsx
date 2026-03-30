import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original" }, // express looks better without colored if background is dark, or use colored
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
      ]
    },
    {
      title: "Other Tools & Tech",
      skills: [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "REST API", icon: "devicon-nodejs-plain colored" }, // Placeholder icon for REST
        { name: "JWT Auth", icon: "devicon-json-plain colored" }, // Placeholder icon for JWT
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category glass-panel"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>
              <motion.div 
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, idx) => (
                  <motion.div 
                    key={idx} 
                    className="skill-item"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, translateY: -5 }}
                  >
                    <div className="skill-icon">
                      <i className={skill.icon}></i>
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
