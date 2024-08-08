import React, { useEffect } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

const CustomCursor = () => {
  useEffect(() => {
    const cursorOuter = document.querySelector(".cursor-outer");
    const cursorInner = document.querySelector(".cursor-inner");

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      gsap.to(cursorOuter, { x, y, duration: 0.5, ease: "power3.out" });
      gsap.to(cursorInner, { x, y, duration: 0.2, ease: "power3.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-outer"></div>
      <div className="cursor-inner"></div>
    </>
  );
};

export default CustomCursor;
