import Header from '../components/Header';
import React from 'react';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <main className="bg-transparent w-full">
          <div className="w-full p-4 max-w-screen-lg mx-auto">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Layout;
