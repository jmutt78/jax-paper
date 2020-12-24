import React, { useContext } from 'react';
import Header from './Header';

import '../css/App.scss';
import { StoreProvider } from './ScoreContext';
import Santa from './Santa';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <StoreProvider>
      <div className='wrapper'>
        <Header />
        <ul className='lightrope'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Santa />
        {children}
      </div>
    </StoreProvider>
  );
};

export default Layout;
