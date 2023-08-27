import React from 'react';
import { Link as Link } from 'react-scroll';
import HealthinkLogo from './Asset/Healthink Logo.png';

function Nav({ scrollToSection, activeSection }) {
  return (
    <nav>
      <img src={HealthinkLogo} alt="Healthink Logo" />
      <div className="navRight">
        <Link
          to="Home"
          className={`navLink ${activeSection === 'Home' ? 'active' : ''}`}
          onClick={() => scrollToSection('Home')}
        >
          HOME
        </Link>
        <Link
          to="Meal"
          className={`navLink ${activeSection === 'Meal' ? 'active' : ''}`}
          onClick={() => scrollToSection('Meal')}
        >
          MEAL
        </Link>
        <Link
          to="Workout"
          className={`navLink ${activeSection === 'Workout' ? 'active' : ''}`}
          onClick={() => scrollToSection('Workout')}
        >
          WORKOUT
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
