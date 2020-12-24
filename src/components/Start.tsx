import React, { Dispatch, SetStateAction, useContext } from 'react';
import { StoreContext } from './ScoreContext';
import bgTriangle from '../images/bg-triangle.svg';
import paperIcon from '../images/icon-paper.svg';
import scissorsIcon from '../images/icon-scissors.svg';
import rockIcon from '../images/icon-rock.svg';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface StartProps {
  setGameState: Dispatcher<string>;
}

const Start: React.FC<StartProps> = ({ setGameState }) => {
  const { setMyPick } = useContext(StoreContext);

  const playGame = (e: any) => {
    setGameState('play');
    setMyPick(e.target.dataset.id);
  };

  return (
    <div className='home'>
      <img className='triangle' src={bgTriangle} />

      <div
        data-id='paper'
        className='home__item home__paper'
        style={{ backgroundImage: `url(${paperIcon})` }}
        onClick={playGame}
      />

      <div
        data-id='scissors'
        className='home__item home__scissors'
        style={{ backgroundImage: `url(${scissorsIcon})` }}
        onClick={playGame}
      />

      <div
        data-id='rock'
        className='home__item home__rock'
        style={{ backgroundImage: `url(${rockIcon})` }}
        onClick={playGame}
      />
    </div>
  );
};

export default Start;
