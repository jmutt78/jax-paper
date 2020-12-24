import React, { useContext, useState } from 'react';
import Layout from '../components/layout';
import Play from '../components/Play';

import Start from '../components/Start';
import Winner from '../components/Winner';

const IndexPage = () => {
  const [gameState, setGameState] = useState('start');
  console.log(gameState);

  let body = null;

  if (gameState === 'pick') {
    body = (
      <>
        <Start setGameState={setGameState} />
      </>
    );
  } else if (gameState === 'play') {
    body = (
      <>
        <Play setGameState={setGameState} />
      </>
    );
  } else if (gameState === 'start') {
    body = (
      <div className='start-screen'>
        <h1>HO! HO! HO!</h1>
        <h1>Merry Christmas Jax!</h1>
        <h2>Beat me 3 times and recieve a prize.</h2>
        <button onClick={() => setGameState('pick')}>Start</button>
      </div>
    );
  } else {
    body = <Winner />;
  }

  return (
    <Layout>
      <div className='main'>{body}</div>
    </Layout>
  );
};

export default IndexPage;
