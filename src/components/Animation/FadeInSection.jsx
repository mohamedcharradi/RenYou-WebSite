import React, { useEffect, useRef, useState } from "react";

const FadeInSection = ({ children }) => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current); 
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
};

export default FadeInSection;
