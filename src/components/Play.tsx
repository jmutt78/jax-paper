import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import Layout from '../components/layout';
import { StoreContext } from '../components/ScoreContext';
import paperIcon from '../images/icon-paper.svg';
import scissorsIcon from '../images/icon-scissors.svg';
import rockIcon from '../images/icon-rock.svg';
import { Link } from 'gatsby';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;
interface PlayProps {
  setGameState: Dispatcher<string>;
}

const Play: React.FC<PlayProps> = ({ setGameState }) => {
  const {
    myPick,
    housePick,
    setGameScore,
    gameScore,
    newHousePick,
  } = useContext(StoreContext);

  const [countDown, setCountDown] = useState('3');
  const [playerPickElement, setPlayerElement] = useState<any>();
  const [housePickElement, setHouseElement] = useState<any>();
  const [resultMessage, setResultMessage] = useState('');
  const [playerWins, setPlayerWins] = useState(false);
  const [houseWins, setHouseWins] = useState(false);

  const chooseWinner = () => {
    if (myPick === 'rock' && housePick === 'scissors') {
      setPlayerWins(true);
      setHouseWins(false);
    } else if (myPick === 'rock' && housePick === 'paper') {
      setHouseWins(true);
      setPlayerWins(false);
    } else if (myPick === 'scissors' && housePick === 'paper') {
      setPlayerWins(true);
      setHouseWins(false);
    } else if (myPick === 'scissors' && housePick === 'rock') {
      setHouseWins(true);
      setPlayerWins(false);
    } else if (myPick === 'paper' && housePick === 'rock') {
      setPlayerWins(true);
      setHouseWins(false);
    } else if (myPick === 'paper' && housePick === 'scissors') {
      setHouseWins(true);
      setPlayerWins(false);
    } else {
      setHouseWins(false);
      setPlayerWins(false);
    }
  };

  const showWinner = () => {
    const currentScore = gameScore;
    if (playerWins) {
      setGameScore(currentScore + 1);
      setResultMessage('You Win');
    } else if (houseWins) {
      setGameScore(currentScore - 1);
      setResultMessage('You Lose');
    } else {
      setResultMessage('Draw');
    }
  };

  const setMyPickIcon = (pick: string) => {
    if (pick === 'rock') {
      return rockIcon;
    } else if (pick === 'paper') {
      return paperIcon;
    } else if (pick === 'scissors') {
      return scissorsIcon;
    }
  };

  const setMyPickClass = (pick: string) => {
    if (pick === 'rock') {
      return 'pick__rock';
    } else if (pick === 'paper') {
      return 'pick__paper';
    } else if (pick === 'scissors') {
      return 'pick__scissors';
    }
  };

  const wait = (ms = 0) => {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  };

  useEffect(() => {
    chooseWinner();

    wait(500)
      .then(() => {
        setCountDown('2');
        return wait(500);
      })
      .then(() => {
        setCountDown('1');
        return wait(500);
      })
      .then(() => {
        setHouseElement(
          <div className='pick'>
            <div className='result__desktop pick__title'>
              The House Picked {housePick}
            </div>
            <div
              className={
                'pick__item ' +
                (houseWins ? 'winner ' : '') +
                setMyPickClass(housePick)
              }
              style={{ backgroundImage: `url(${setMyPickIcon(housePick)}` }}
            ></div>
            <div className='result__mobile pick__title'>
              Santa Picked {housePick}
            </div>
          </div>,
        );
        setPlayerElement(
          <div className='pick'>
            <div className='result__desktop pick__title'>
              You Picked {myPick}
            </div>
            <div
              className={
                'pick__item ' +
                (playerWins ? 'winner ' : '') +
                setMyPickClass(myPick)
              }
              style={{ backgroundImage: `url(${setMyPickIcon(myPick)}` }}
            ></div>
            <div className='result__mobile pick__title'>
              You Picked {myPick}
            </div>
          </div>,
        );
        showWinner();
      });
  }, [setHouseElement, setCountDown, houseWins, playerWins]);

  const gameScoreChecker = gameScore === 3;

  return (
    <>
      <div className='play-wrapper'>
        {playerPickElement ? (
          playerPickElement
        ) : (
          <div className='pick'>
            <div className='result__desktop pick__title'>
              You Picked {myPick}
            </div>
            <div
              className={'pick__item ' + setMyPickClass(myPick)}
              style={{ backgroundImage: `url(${setMyPickIcon(myPick)}` }}
            ></div>
            <div className='result__mobile pick__title'>
              You Picked {myPick}
            </div>
          </div>
        )}
        <div
          className={
            'result__desktop game__result ' +
            (resultMessage.length ? '' : 'invisible')
          }
        >
          <h3>{resultMessage}</h3>
          <button
            className='play-again__button '
            onClick={() => {
              newHousePick();
              setGameState(!gameScoreChecker ? 'pick' : '');
            }}
          >
            {!gameScoreChecker ? 'Try Again' : 'Claim your Prize!'}
          </button>
        </div>
        {housePickElement ? (
          housePickElement
        ) : (
          <div className='pick'>
            <div className='pick__title result__desktop'>The House Picked:</div>
            <div className='pick__item'>
              <span>{countDown}</span>
            </div>
            <div className='pick__title result__mobile'>The House Picked:</div>
          </div>
        )}
        <div
          className={
            'result__mobile game__result ' +
            (resultMessage.length ? '' : 'invisible')
          }
        >
          <h3>{resultMessage}</h3>
          <div
            className='play-again__button'
            onClick={() => {
              newHousePick();
              setGameState(!gameScoreChecker ? 'pick' : '');
            }}
          >
            {!gameScoreChecker ? 'Try Again' : 'Claim your Prize!'}
          </div>
        </div>
      </div>
    </>
  );
};

export default Play;
