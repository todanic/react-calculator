import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <main className="max-w-3xl w-full p-4">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
