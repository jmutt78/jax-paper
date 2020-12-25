import React, { useState } from 'react';
import handbag from '../images/handbag.jpg';

const Winner: React.FC<any> = () => {
  const [prize, setPrize] = useState(false);

  return (
    <div className='prize'>
      <div className='opening-message'>
        <h1>Congratulations Jax!</h1>
        <h3>You beat Santa at roshambo</h3>
        <button className='button' onClick={() => setPrize(true)}>
          Receive Your Prize
        </button>
      </div>
      {prize && (
        <div className='prize-message'>
          <h3>Handbags Galore!</h3>
          <p>You won a year subscription to Vivrelle!</p>
          <div>
            <img src={handbag} alt='handbag photo' />
            <p>
              Sign up and choose your first handbag{' '}
              <a href='https://www.vivrelle.com/apply' target='_blank'>
                Here
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Winner;
