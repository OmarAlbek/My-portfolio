import React from 'react';
import './Videos.css';
import videosData from '../Data/VideosData';
import VideoCard from '../Components/VideoCard';

function Videos() {
  return (
    <div className="videos-wrapper">
      <div className="videos-page">
        <h2 className="videos-title">
          {"Video Gallery".split('').map((char, i) => (
            <span key={i} className="videos-char" style={{ animationDelay: `${i * 0.08}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h2>

        <div className="videos-grid">
          {videosData.map((video, i) => (
            <VideoCard key={video.id} video={video} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;