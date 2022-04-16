import React, { VFC } from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from 'components/Navbar';

import './Layout.scss';

const Layout: VFC = () => {
  const className = 'layout';

  return (
    <div className={className}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
