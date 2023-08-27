import React, { useState, useEffect } from 'react';
import StickyComponent from './StickyComponent';
import Nav from './Nav';
import ToggleMode from './ToggleMode';
import Home from './Home';
import Meal from './Meal';
import Workout from './Workout';
import Footer from './Footer';
import './style.css';
import { Link as ScrollLink } from 'react-scroll';
import ApiExample from './ApiExample';

function App() {
  const [activeSection, setActiveSection] = useState('Home');
  const [todos, setTodos] = useState([]); // Add this line

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data)) // Use the setTodos function from useState
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <div className="App">
      <StickyComponent />
      <Nav scrollToSection={scrollToSection} activeSection={activeSection} />
      <ToggleMode />
      <Home id="Home" />
      <Meal id="Meal" />
      <Workout id="Workout" />
      <ApiExample todos={todos} /> {/* Pass the todos as a prop */}
      <ScrollLink
        to="Home"
        smooth={true}
        duration={500}
        className="back-to-top"
        onClick={() => scrollToSection('Home')}
      >
        &#8679; {/* Up arrow */}
      </ScrollLink>
      <Footer />
    </div>
  );
}

export default App;
