import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useHistory, useLocation } from 'react-router-dom';
import routes from '../routes/routes';
import { FaArrowLeft } from 'react-icons/fa';

const Header = () => {
  const history = useHistory();
  const location = useLocation();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  const shouldShowBackButton = routes.find(
    (route) => route.path === location.pathname
  )?.showBackButton;

  return (
    <header className="bg-transparent p-4 relative">
      <nav className="flex items-center justify-end">
        {shouldShowBackButton && (
          <button
            className="text-gray-900 absolute left-6 transition-all duration-300 ease-in-out bg-transparent dark:text-primary font-bold py-2 px-4 rounded-xl text-2xl hover:left-2"
            onClick={handleBackButtonClick}>
            <FaArrowLeft />
          </button>
        )}
        <ThemeSwitcher />
      </nav>
    </header>
  );
};

export default Header;
