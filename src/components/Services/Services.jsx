import { motion } from 'framer-motion';
import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import Glasses from '../../img/glasses.png';
import HeartEmoji from '../../img/heartemoji.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import './Services.css';

const Services = () => {
  // Context for theme
  const {
    state: { darkMode },
  } = useContext(themeContext);

  // Transition settings
  const transition = {
    duration: 1,
    type: 'spring',
  };

  return (
    <div className="services" id="services">
      {/* Left section */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Expertise</span>
        <span>DevOps & SysAdmin Services</span>
        <span>
          Empowering businesses with reliable infrastructure, automated
          workflows, and optimized systems.
          <br />
          Combining expertise in Linux, cloud platforms, and automation tools to
          ensure high availability and scalability.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* Right section */}
      <div className="cards">
        {/* Infrastructure Management card */}
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading="Infrastructure Management"
            detail="Linux, Docker, Kubernetes, AWS, Azure, GCP"
          />
        </motion.div>

        {/* Automation & CI/CD card */}
        <motion.div
          initial={{ left: '-11rem', top: '12rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading="Automation & CI/CD"
            detail="Ansible, Jenkins, GitHub Actions, Terraform, Bash, Python"
          />
        </motion.div>

        {/* System Monitoring & Security card */}
        <motion.div
          initial={{ top: '19rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading="Monitoring & Security"
            detail="Prometheus, Grafana, ELK Stack, Firewall Configurations, VPN, Security Audits"
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        {/* Decorative blur */}
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
