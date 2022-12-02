import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

function LeaderboardItem({
  user, score,
}) {
  return (
    <div className="flex justify-between items-center border-purple-200 border-b-2 p-4 w-full text-xl">
      <div className="flex items-center gap-4">
        <img className="rounded-full" src={user.avatar} alt={user.name} />
        <p className="font-bold">{user.name}</p>
      </div>
      <p>{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
