import React from 'react';

interface ScoreBoardProps {
  score: number;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className='scorebox'>
      <div className='scorebox__title'>Score</div>
      <div className='scorebox__score'>{score}</div>
    </div>
  );
};

export default ScoreBoard;
