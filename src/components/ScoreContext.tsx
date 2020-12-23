import React, { createContext, useState, useEffect } from 'react';

export const StoreContext = createContext({
  myPick: '',
  newHousePick: () => {},
  housePick: '',
  gameScore: 0,
  setGameScore: (active: number) => {},
  setMyPick: (active: string) => {},
});

export const StoreProvider: React.FC<any> = ({ children }) => {
  const [myPick, setMyPick] = useState('');
  const [housePick, setHousePick] = useState('');
  const [gameScore, setGameScore] = useState(0);

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setHousePick(randomChoice);
  };

  useEffect(() => {
    newHousePick();
  }, [setMyPick]);

  return (
    <StoreContext.Provider
      value={{
        myPick,
        newHousePick,
        housePick,
        gameScore,
        setGameScore,
        setMyPick,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
