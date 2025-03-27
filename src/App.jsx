import './App.css';
import Header from './componentes/Header';
import HeroSection from './pages/HeroSection';
import { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header currentTheme={currentTheme} toggleTheme={toggleTheme} />
      <HeroSection />
    </>
  );
}

export default App;