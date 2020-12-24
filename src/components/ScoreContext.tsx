import React, { createContext, useState, useEffect } from 'react';

export interface PostsContextData {
  myPick: string;
  gameScore: number;
  housePick: string;
}

export const postsContextDefaultValue: PostsContextData = {
  myPick: '',
  gameScore: 0,
  housePick: '',
};

export const StoreContext = React.createContext<any>(null);

export const StoreProvider: React.FC<PostsContextData> = ({ children }) => {
  const [myPick, setMyPick] = React.useState<any>('');
  const [housePick, setHousePick] = useState('');
  const [gameScore, setGameScore] = useState(0);

  const newHousePick = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    setHousePick(randomChoice);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        myPick,
        setMyPick,
        setGameScore,
        newHousePick,
        housePick,
        gameScore,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
