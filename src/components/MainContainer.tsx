import { lazy, PropsWithChildren, Suspense, useEffect, useState, useCallback } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { debounce } from "../utils/performanceUtils";
import "./styles/mobile.css";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );
  const [isMobileSmallScreen, setIsMobileSmallScreen] = useState<boolean>(
    window.innerWidth < 480
  );

  // Memoize the resize handler with debounce to prevent excessive calls
  const handleResize = useCallback(
    debounce(() => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
      setIsMobileSmallScreen(window.innerWidth < 480);
    }, 150), // Debounce resize to 150ms
    []
  );

  useEffect(() => {
    handleResize(); // Call on mount
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Mobile navigation handler
  useEffect(() => {
    if (!isMobileSmallScreen) return;

    const navItems = document.querySelectorAll(".mobile-nav-item");

    const handleNavClick = (e: Event) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const section = link.getAttribute("data-section");
      
      navItems.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");

      const target = document.getElementById(
        section === "landing" ? "landingDiv" : section || ""
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    navItems.forEach((item) => {
      item.addEventListener("click", handleNavClick);
    });

    return () => {
      navItems.forEach((item) => {
        item.removeEventListener("click", handleNavClick);
      });
    };
  }, [isMobileSmallScreen]);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktopView && !isMobileSmallScreen && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            {/* Only pass 3D model to Landing on desktop, Landing will show profile image on mobile */}
            <Landing>{!isDesktopView && !isMobileSmallScreen ? children : null}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktopView && (
              <Suspense fallback={<div>Loading....</div>}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      {isMobileSmallScreen && (
        <nav className="mobile-nav">
          <a href="#" className="mobile-nav-item active" data-section="landing">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            </svg>
            Home
          </a>
          <a href="#about" className="mobile-nav-item" data-section="about">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            About
          </a>
          <a href="#work" className="mobile-nav-item" data-section="work">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 7v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"></path>
            </svg>
            Work
          </a>
          <a href="#contact" className="mobile-nav-item" data-section="contact">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Contact
          </a>
        </nav>
      )}
    </div>
  );
};

export default MainContainer;
