import React, { useContext } from 'react';
import Header from './Header';

import '../css/App.scss';
import { StoreProvider } from './ScoreContext';
import Footer from './Footer';

const Layout: React.FC<any> = ({ children }) => {
  return (
    <StoreProvider>
      <div className='wrapper'>
        <Header />
        {children}
        {/* <Footer /> */}
      </div>
    </StoreProvider>
  );
};

export default Layout;
