import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

function LeaderboardItem({
  user, score,
}) {
  return (
    <div>
      <img src={user.avatar} alt={user.name} />
      <p>{user.name}</p>
      <p>{score}</p>
    </div>
  );
}

LeaderboardItem.propTypes = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

export default LeaderboardItem;
