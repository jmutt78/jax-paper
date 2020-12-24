import React, { useContext, useState } from 'react';
import Layout from '../components/layout';
import Play from '../components/Play';

import Start from '../components/Start';
import Winner from '../components/Winner';

const IndexPage = () => {
  const [gameState, setGameState] = useState('pick');
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
