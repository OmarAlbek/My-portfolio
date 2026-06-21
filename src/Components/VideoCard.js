import React, { useState } from 'react';

function VideoCard({ video, index }) {
  const [loaded, setLoaded] = useState(false);

  // Extract video ID from embed URL
  const videoId = video.url.split('/embed/')[1]?.split('?')[0];
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const embedUrl = video.url.replace('youtube.com', 'youtube-nocookie.com');
  const isReel = video.type === 'reel';

  return (
    <div
      className={`video-card ${isReel ? 'reel' : 'wide'}`}
      style={{ animationDelay: `${index * 0.02}s` }}
    >
      <h3 className="video-title">{video.title}</h3>
      <div className="video-embed-wrapper">
        {loaded ? (
          <iframe
            src={`${embedUrl}?autoplay=1&rel=0`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="video-thumbnail"
            onClick={() => setLoaded(true)}
            role="button"
            aria-label={`Play ${video.title}`}
          >
            <img src={thumbnail} alt={video.title} loading="lazy" />
            <div className="play-btn">
              <svg viewBox="0 0 68 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M66.52 7.74C65.67 4.58 63.19 2.1 60.03 1.25 54.8 0 33.6 0 33.6 0S12.4 0 7.17 1.25C3.99 2.1 1.5 4.58.66 7.74-.5 12.88-.5 24-.5 24s0 11.12 1.16 16.26c.84 3.16 3.33 5.64 6.51 6.5C12.4 48 33.6 48 33.6 48s21.2 0 26.43-1.24c3.16-.86 5.64-3.34 6.49-6.5C67.68 35.12 67.68 24 67.68 24s0-11.12-1.16-16.26z"
                  fill="#5232d7"
                />
                <path d="M26.6 34.3l17.6-10.3-17.6-10.3v20.6z" fill="#fff" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoCard;
