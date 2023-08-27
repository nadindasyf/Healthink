import React, { useState, useEffect } from 'react';

function StickyComponent() {
  const [isStickyClosed, setIsStickyClosed] = useState(false);

  useEffect(() => {
    const storedState = localStorage.getItem('stickyClosed');
    setIsStickyClosed(storedState === 'true');
  }, []);

  const handleCloseClick = () => {
    setIsStickyClosed(true);
    localStorage.setItem('stickyClosed', 'true');
  };

  return (
    !isStickyClosed && (
      <div className="sticky">
        <button className="btn-close" onClick={handleCloseClick}>
          &#10006;
        </button>
        <p>Download Aplikasi Kami</p>
        <div className="buttons">
          <a href="https://play.google.com/" target="_blank" className="btn-google-play">
            Google Play
          </a>
          <a href="https://www.apple.com/id/app-store/" target="_blank" className="btn-app-store">
            App Store
          </a>
        </div>
      </div>
    )
  );
}

export default StickyComponent;
