import React from 'react';
import './Videos.css';
import videosData from '../Data/VideosData';

function Videos() {
  return (
    <div className="videos-wrapper">
      <div className="videos-page">
        <h2 className="videos-title">
          {"Motion Graphics & Video Editing".split('').map((char, i) => (
            <span key={i} className="videos-char" style={{ animationDelay: `${i * 0.08}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        <div className="videos-grid">
          {videosData.map((video, i) => (
            <div
              key={video.id}
              className={`video-card ${video.type === 'reel' ? 'reel' : 'wide'}`}
              style={{ animationDelay: `${i * 0.02}s` }}
            >
              <h3 className="video-title">{video.title}</h3>
              <div className="video-embed-wrapper">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
