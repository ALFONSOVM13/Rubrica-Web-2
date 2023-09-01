import React, { useState } from 'react';
import './Navbar.css';

const Navbar = (props) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleClick = (tab) => {
    setActiveTab(tab);
    props.setOverview(tab === 'overview');
    props.setContent(tab === 'content');
    props.setCreate(tab === 'create');
  };

  return (
    <div className="navbar">
      <button
        className={`navbar-btn ${activeTab === 'overview' ? 'active' : ''}`}
        onClick={() => handleClick('overview')}
      >
        OVERVIEW
      </button>
      <button
        className={`navbar-btn ${activeTab === 'content' ? 'active' : ''}`}
        onClick={() => handleClick('content')}
      >
        CONTENT
      </button>
      <button
        className={`navbar-btn ${activeTab === 'create' ? 'active' : ''}`}
        onClick={() => handleClick('create')}
      >
        CREATE
      </button>
    </div>
  );
};

export default Navbar;
