
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Smart E-Commerce Web Application",
      description: "A full-featured MERN stack e-commerce platform with comprehensive user and admin controls.",
      features: [
        "User & Admin Authentication",
        "Product Listing & Search",
        "Shopping Cart & Checkout",
        "Order Management System",
        "Admin Dashboard with Sales Reports"
      ],
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      image: "/img/sleepyyy cover.png",
      github: "https://github.com",
      demo: "http://sleepyyy.shop"
    },
    {
      title: "Library Management System",
      description: "A digital solution for managing book inventory, borrowing, and returns efficiently.",
      features: [
        "Book Catalog & Search",
        "Issue & Return Tracking",
        "Fine Calculation",
        "Member Management",
        "Admin Analytics"
      ],
      tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      image: "/img/lms.png",
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="project-card glass-panel"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="actual-project-image" />
                <div className="project-overlay">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <ExternalLink size={20} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="overlay-btn">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, idx) => (
                       <li key={idx}><ArrowRight size={14} className="feature-icon" /> {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-tech">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
