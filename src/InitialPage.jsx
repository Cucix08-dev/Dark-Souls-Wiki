import { useState, useEffect } from 'react';
import './InitialPage.css';

export default function InitialPage({ setPage }) {
  const [terminated, setTerminated] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // stato per animazione

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminated(true);
    }, 11000);

    return () => clearTimeout(timer);
  }, []);

  function handleClick() {
    if (!terminated) return;
    
    setFadeOut(true);

    setTimeout(() => {
      setPage('main');
    }, 400);
  }

  return (
    <div id="welcome">
      <video 
        src="/assets/dark-souls-title-sequence.mp4"
        className={`intro-vid ${terminated ? "hidden" : ""}`}
        autoPlay
        muted
        playsInline
      ></video>

      <div 
        className={`block-in-img ${terminated ? "" : "hidden"} ${fadeOut ? "hidden" : ""}`}
        onClick={handleClick}
      ></div>
    </div>
  );
}
