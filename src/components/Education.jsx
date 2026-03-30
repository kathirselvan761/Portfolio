import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Gobi Arts & Science College (Autonomous)",
      location: "Gobichettipalayam, Tamil Nadu",
      period: "2023 - 2026",
      description: "Focusing on core computer science subjects including Data Structures, Algorithms, Web Development, and Database Management Systems. Consistently maintaining a strong academic record while actively participating in tech-related extracurriculars."
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Diamond Jubilee Higher Secondary School",
      location: "Gobichettipalayam",
      period: "2021 - 2023",
      description: "Completed with a focus on Mathematics and Computer Science. Built a strong foundational understanding of logic and programming concepts."
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Education & Resume
        </motion.h2>

        <div className="education-container">
          <div className="timeline">
            {educationData.map((edu, index) => (
              <motion.div 
                className="timeline-item"
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className="timeline-dot">
                  <GraduationCap size={20} className="dot-icon" />
                </div>
                <div className="timeline-content glass-panel">
                  <div className="timeline-header">
                    <h3 className="degree">{edu.degree}</h3>
                    <div className="period-badge">
                      <Calendar size={14} /> {edu.period}
                    </div>
                  </div>
                  <h4 className="institution">{edu.institution}</h4>
                  <div className="location">
                    <MapPin size={14} /> {edu.location}
                  </div>
                  <p className="edu-description">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="resume-box glass-panel">
              <h3>Get My Full Resume</h3>
              <p>Download my comprehensive resume to dive deeper into my academic trajectory, complete project list, and technical proficiencies.</p>
              <a href="/img/KATHIR Resume.pdf" download className="btn btn-primary resume-btn">
                Download PDF Resume <Download size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
