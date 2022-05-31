import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListSquares,
  faBars,
  faUser,
  faCog,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './SideMenu.scss';

const SideNav = () => {
  const navagate = useNavigate();
  const handleLocation = (e) => {
    e.preventDefault();
    const location = e.currentTarget.getAttribute('data-location');
    navagate(`${location}`);
  };
  return (
    <div className="sidenav-bar">
      <div className="sandwich">
        <FontAwesomeIcon size="3x" className="menu-burger" icon={faBars} />
      </div>
      <div className="menu-bottom">
        <button
          className="tran-btn"
          data-testid="Home button"
          data-location="/"
          onClick={handleLocation}
        >
          <FontAwesomeIcon
            size="3x"
            className="menu-item pad-r"
            color="var(--secondary)"
            icon={faHome}
          />
        </button>
        <button
          className="tran-btn"
          data-testid="Cabinet button"
          data-location="/cabinet"
          onClick={handleLocation}
        >
          <FontAwesomeIcon
            size="3x"
            className="menu-item pad-r"
            color="var(--secondary)"
            icon={faListSquares}
          />
        </button>
        <button className="tran-btn">
          <FontAwesomeIcon
            size="3x"
            className="menu-item"
            color="var(--secondary)"
            icon={faUser}
          />
        </button>
        <button
          className="tran-btn"
          data-testid="Settings button"
          data-location="/settings"
          onClick={handleLocation}
        >
          <FontAwesomeIcon
            size="3x"
            className="menu-item pad-l"
            color="var(--secondary)"
            icon={faCog}
          />
        </button>
      </div>
    </div>
  );
};

export default SideNav;
