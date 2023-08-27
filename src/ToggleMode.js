import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from './actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(state => state.darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="modeTgl">
      <label className="switch">
        <input type="checkbox" id="toggle-mode" checked={darkMode} onChange={() => dispatch(toggleMode())} />
        <span className="slider"></span>
        <span className={`toggle-icon ${darkMode ? 'moon' : 'sun'}`}>
          <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
        </span>
      </label>
    </div>
  );
};

export default ToggleMode;
