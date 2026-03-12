import { useState, useCallback, memo } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Multi-Tenant HRMS",
    category: "SaaS Platform",
    tools: "Laravel, Angular, React, MySQL, WebSockets, Webhooks, Razorpay, AWS",
    image: "/images/hrms.png",
    link:"https://hrms.acelucid.com/"
  },
  
  {
    title: "Personality Prediction Model",
    category: "NLP & Deep Learning",
    tools: "Python, TensorFlow, Recurrent Neural Networks",
    image: "/images/personality-prediction.png",
    link: "https://github.com/SurajBhandari5110/PersonalityPredictionModel/"
  },
  {
    title: "AI Screening",
    category: "AI interview for first round, Live in product hunt",
    tools: "Laravel, Angular, Real-time Updates, Automated Reporting",
    image: "/images/ai-screening.png",
    link: "https://www.producthunt.com/products/acelucid-ai-screening/launches/acelucid-ai-screening"
  },
  // {
  //   title: "Personality Prediction System",
  //   category: "NLP & Deep Learning",
  //   tools: "Python, NumPy, Pandas, OCEAN Model, Data Visualization",
  //   image: "/images/sapphire.png",
  // },
  // {
  //   title: "Timetable Management System",
  //   category: "Educational Platform",
  //   tools: "React.js, SAP ID Integration, 500+ Users",
  //   image: "/images/Maxlife.png",
    
  // },
];

const Work = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const handleProjectClick = useCallback(
    (link?: string) => {
      if (link) {
        window.open(link, "_blank");
      }
    },
    []
  );

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  className={`carousel-slide ${project.link ? "carousel-slide-clickable" : ""}`}
                  key={index}
                  onClick={() => handleProjectClick(project.link)}
                  role={project.link ? "button" : undefined}
                  tabIndex={project.link ? 0 : undefined}
                  onKeyPress={(e) => {
                    if (project.link && e.key === "Enter") {
                      handleProjectClick(project.link);
                    }
                  }}
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

export default Work;
