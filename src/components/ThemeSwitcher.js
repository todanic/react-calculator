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
        <input
          onClick={toggleDarkMode}
          type="checkbox"
          className="peer/theme hidden invisible absolute"
        />
        <span className="peer-checked/theme:before:shadow-moon peer-checked/theme:bg-themeBg peer-checked/theme:before:bg-none peer-checked/theme:before:bg-themeBg peer-checked/theme:before:left-[35px] before:transition-all before:duration-500 before:ease-in-out before:absolute before:content-'' before:h-5 before:w-5 before:rounded-full before:left-1 before:top-1/2 before:-translate-y-1/2 before:bg-gradient-to-r before:from-red-600 before:to-primary slider absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 shadow-md rounded-[30px]"></span>
      </label>
    </div>
  );
};

export default ThemeSwitcher;
