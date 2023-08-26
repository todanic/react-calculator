import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="checkbox-wrapper-54">
      <label className="switch relative w-20 h-8 inline-block">
        <input onClick={toggleDarkMode} type="checkbox" className="invisible absolute" />
        <span className="slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-400 rounded-[30px]"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
