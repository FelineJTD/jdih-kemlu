// Animate when scrolled: https://dev.to/selbekk/how-to-fade-in-content-as-it-scrolls-into-view-10j4
// with modifications

import { useEffect, useRef, useState } from 'react';

export default function Animate(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    // on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div
      className={`${props.before} duration-500 ease-out ${isVisible ? props.after : null} ${props.className? props.className : null}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};