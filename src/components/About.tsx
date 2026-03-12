import { memo } from "react";
import "./styles/About.css";

const About = memo(() => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <p className="para">
          Full Stack Developer with 1+ year of professional experience delivering 
          scalable SaaS applications and enterprise web solutions. Strong expertise 
          in Laravel, Angular, and RESTful API development, with hands-on experience 
          in AWS deployments and multi-tenant system design. Proven ability to improve 
          system performance, optimize workflows, and collaborate effectively within 
          agile teams.
        </p>
      </div>
    </div>
  );
});

export default About;
