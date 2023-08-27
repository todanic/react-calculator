import React, { useEffect } from 'react';
import { useSharedState } from '../context/Context';

const ThemeSwitcher = () => {
  const { darkMode, setDarkMode } = useSharedState();

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.target.click();
    }
  };
  return (
    <div className="theme-switcher">
      <label
        className="switch relative w-16 h-8 inline-block rounded-[30px]"
        tabIndex={0}
        onKeyDown={handleKeyDown}>
        <input onClick={toggleDarkMode} type="checkbox" className="invisible absolute" />
        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 shadow-md rounded-[30px]"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
