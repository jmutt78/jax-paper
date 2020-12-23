import React, { useContext } from 'react';
import Header from './Header';
import '../css/App.scss';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className='wrapper'>
      <Header />

      <div className='main'>{children}</div>
    </div>
  );
};

export default Layout;
