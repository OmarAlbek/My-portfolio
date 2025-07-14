import React from 'react';
import './BottomNavBar.css';
import { FaHome, FaFolderOpen, FaPlay, FaFileAlt, FaUserFriends } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

function BottomNavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname;

  return (
    <div className="bottom-navbar">
      <div className="nav-icons">
        <div
          className={`icon-wrapper ${active === '/' ? 'active' : ''}`}
          title="Home"
          onClick={() => navigate('/')}
        >
          <FaHome />
        </div>
        <div
          className={`icon-wrapper ${active === '/projects' ? 'active' : ''}`}
          title="Projects"
          onClick={() => navigate('/projects')}
        >
          <FaFolderOpen />
        </div>
        <div
  className={`icon-wrapper ${active === '/videos' ? 'active' : ''}`}
  title="Videos"
  onClick={() => navigate('/videos')}
>
  <FaPlay />
</div>
        <div
          className={`icon-wrapper ${active === '/cv' ? 'active' : ''}`}
          title="CV"
          onClick={() => navigate('/cv')}
        >
          <FaFileAlt />
        </div>
        <div
  className={`icon-wrapper ${active === '/contact' ? 'active' : ''}`}
  title="Contacts"
  onClick={() => navigate('/contact')}
>
  <FaUserFriends />
</div>
      </div>
    </div>
  );
}

export default BottomNavBar;
