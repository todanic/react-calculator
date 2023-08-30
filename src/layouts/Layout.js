import Header from '../components/Header';
import PropTypes from 'prop-types';
import React from 'react';

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
Layout.propTypes = {
  children: PropTypes.node.isRequired // PropTypes.node is used for any kind of children elements
};

export default Layout;
