import { memo } from "react";
import "./styles/Career.css";

const Career = memo(() => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Acelucid Technologies</h5>
              </div>
              <h3>Current</h3>
            </div>
            <p>
              Developed and maintained Angular and React.js modules serving 1,000+ 
              internal users across multiple products. Created scalable backend services 
              using Laravel MVC and REST APIs. Optimized database queries reducing 
              response time by 30%. Deployed and managed production applications on AWS. 
              Built custom Chrome extension reducing operational tasks by automating 
              repetitive workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>IBM (Phemesoft)</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Developed deep learning models for music composition using a dataset of 
              50,000+ audio samples. Improved model inference and processing pipelines, 
              reducing music generation time by nearly 60%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>UPES</h5>
              </div>
              <h3>Internship</h3>
            </div>
            <p>
              Developed a faculty and student web application for timetable management 
              used by 500+ users. Integrated secure authentication with SAP ID, 
              decreasing manual coordination and paperwork by 75%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Career;
