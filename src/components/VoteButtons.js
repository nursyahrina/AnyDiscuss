import React from 'react';
import PropTypes from 'prop-types';
import { BiUpvote, BiDownvote } from 'react-icons/bi';

function VoteButtons({
  id, authUser, upVotes, downVotes, upVote, downVote, clearVote,
}) {
  const isUpVoted = upVotes.includes(authUser);
  const isDownVoted = downVotes.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onClearVoteClick = (event) => {
    event.stopPropagation();
    clearVote(id);
  };
  return (
    <div className="vote-buttons">
      { isUpVoted ? (
        <button type="button" aria-label="upVote" onClick={onClearVoteClick}>
          <BiUpvote style={{ color: 'red' }} />
        </button>
      ) : (
        <button type="button" aria-label="upVote" onClick={onUpVoteClick}>
          <BiUpvote />
          {' '}
        </button>
      )}
      {' '}
      {upVotes.length}
      {' | '}
      { isDownVoted ? (
        <button type="button" aria-label="upVote" onClick={onClearVoteClick}>
          <BiDownvote style={{ color: 'grey' }} />
        </button>
      ) : (
        <button type="button" aria-label="upVote" onClick={onDownVoteClick}>
          <BiDownvote />
          {' '}
        </button>
      )}
      {' '}
      {downVotes.length}
    </div>
  );
}

VoteButtons.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  clearVote: PropTypes.func,
};

VoteButtons.defaultProps = {
  upVote: null,
  downVote: null,
  clearVote: null,
};

export default VoteButtons;
