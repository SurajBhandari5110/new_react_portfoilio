import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";
import { rafThrottle } from "../utils/performanceUtils";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const hoverRef = useRef(false);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef<number>();
  const eventListenersRef = useRef<Array<{ element: Element; events: string[] }>>([]);

  useEffect(() => {
    const cursor = cursorRef.current!;

    // Use RAF-throttled mousemove handler
    const handleMouseMove = rafThrottle((e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    });

    const updateCursorPosition = () => {
      if (!hoverRef.current) {
        const delay = 6;
        cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) / delay;
        cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) / delay;
        
        cursor.style.transform = `translate(${Math.round(cursorPos.current.x)}px, ${Math.round(cursorPos.current.y)}px)`;
      }
      rafIdRef.current = requestAnimationFrame(updateCursorPosition);
    };

    rafIdRef.current = requestAnimationFrame(updateCursorPosition);

    // Use passive event listener for better scroll performance
    document.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Set up cursor element interactions with better cleanup
    const setupCursorInteractions = () => {
      document.querySelectorAll("[data-cursor]").forEach((item) => {
        const element = item as HTMLElement;
        
        const handleMouseOver = (e: MouseEvent) => {
          const target = e.currentTarget as HTMLElement;
          const rect = target.getBoundingClientRect();

          if (element.dataset.cursor === "icons") {
            cursor.classList.add("cursor-icons");
            cursor.style.setProperty("--cursorH", `${rect.height}px`);
            gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
            hoverRef.current = true;
          } else if (element.dataset.cursor === "disable") {
            cursor.classList.add("cursor-disable");
          }
        };

        const handleMouseOut = () => {
          cursor.classList.remove("cursor-disable", "cursor-icons");
          hoverRef.current = false;
        };

        element.addEventListener("mouseover", handleMouseOver, { passive: true });
        element.addEventListener("mouseout", handleMouseOut, { passive: true });

        eventListenersRef.current.push({
          element,
          events: ["mouseover", "mouseout"],
        });
      });
    };

    setupCursorInteractions();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      
      // Clean up all event listeners
      eventListenersRef.current.forEach(({ element }) => {
        element.removeEventListener("mouseover", () => {});
        element.removeEventListener("mouseout", () => {});
      });
      eventListenersRef.current = [];

      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
