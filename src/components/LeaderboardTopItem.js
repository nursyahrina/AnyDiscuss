import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

function LeaderboardTopItem({
  user, score, rank,
}) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white drop-shadow-2xl min-w-[20rem] rounded-xl">
      <h3 className="text-3xl font-bold">
        TOP
        {' '}
        {rank}
      </h3>
      <img className="rounded-full drop-shadow-lg" src={user.avatar} alt={user.name} />
      <p className="text-2xl font-bold underline underline-offset-8">{user.name}</p>
      <p className="text-xl">
        Score:
        {' '}
        <span className="font-bold">{score}</span>
      </p>
    </div>
  );
}

LeaderboardTopItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default LeaderboardTopItem;
