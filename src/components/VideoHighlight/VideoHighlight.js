import React, { useEffect } from 'react';
import './VideoHighlight.css';

const VideoHighlight = () => {
  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0';
      script.onload = () => {
        window.FB && window.FB.XFBML.parse();
      };
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="video-section">
      <div className="video-container">
        <div
          className="fb-video"
          data-href="https://www.facebook.com/113239251148242/videos/4656096074483261/"
          data-width="300"
          data-autoplay="true"
          data-mute="true"
          data-show-text="false"
        ></div>
      </div>
    </section>
  );
};

export default VideoHighlight;
