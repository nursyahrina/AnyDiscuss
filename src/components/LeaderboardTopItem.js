import React from 'react';
import PropTypes from 'prop-types';
import { userShape } from './ThreadItem';

function LeaderboardTopItem({
  user, score, rank,
}) {
  return (
    <div>
      <h3>
        TOP
        {' '}
        {rank}
      </h3>
      <img src={user.avatar} alt={user.name} />
      <p>{user.name}</p>
      <p>
        Score:
        {' '}
        {score}
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
