import { memo, PropsWithChildren, useState, useEffect } from "react";
import "./styles/Landing.css";

const Landing = memo(({ children }: PropsWithChildren) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 480);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <div className="landing-section" id="landingDiv">
        {/* Desktop 3D Model */}
        {!isMobile && children}

        {/* Mobile layout: intro → image → role (flex column) */}
        <div className="landing-container">
          {/* 1 — "Hello! I'm  SURAJ BHANDARI" */}
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              SURAJ
              <br />
              <span>BHANDARI</span>
            </h1>
          </div>

          {/* 2 — Profile photo (hidden on desktop via CSS) */}
          <div className="mobile-profile-container">
            <img
              src="/images/profile.png"
              alt="Suraj Bhandari"
              className="mobile-profile-image"
            />
          </div>

          {/* 3 — "A Full Stack  Developer / Engineer" */}
          <div className="landing-info">
            <h3>A Full Stack</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Developer</div>
              <div className="landing-h2-2">Engineer</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
});

export default Landing;
