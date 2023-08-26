import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <header className="bg-transparent p-4">
      <nav className="flex items-center justify-end">
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
