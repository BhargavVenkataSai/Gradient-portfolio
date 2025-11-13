import { useEffect } from 'react';

export const useSectionTransitions = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -20% 0px',
      threshold: [0, 0.1, 0.2]
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add stagger effect to child elements
          const children = entry.target.querySelectorAll('.stagger-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100); // 100ms delay between each item
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
};
