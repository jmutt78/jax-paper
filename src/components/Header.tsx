import React, { useContext } from 'react';
import ScoreBoard from './ScoreBoard';
import { StoreContext } from './ScoreContext';

const Header = () => {
  const { gameScore } = useContext(StoreContext);
  return (
    <header>
      <h1 className='header__title'>
        <span>Rock</span>
        <span>Paper</span>
        <span>Scissors</span>
      </h1>
      <ScoreBoard score={gameScore} />
    </header>
  );
};

export default Header;
