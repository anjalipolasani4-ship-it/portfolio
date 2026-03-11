import { useEffect, useRef } from 'react';

export const useFadeIn = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
};

const FadeIn = ({ children, delay = 0, style = {} }) => {
  const ref = useRef(null);
  useFadeIn(ref);

  return (
    <div
      ref={ref}
      className="fade-in"
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
