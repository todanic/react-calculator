import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-900 p-4">
      <nav className="flex items-center justify-between">
        <ThemeSwitcher />;
      </nav>
    </header>
  );
};

export default Header;
