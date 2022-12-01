import React from 'react';
import PropTypes from 'prop-types';
import { BiLike, BiDislike } from 'react-icons/bi';

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
    <div className="vote-buttons flex items-center gap-x-2 px-3">
      <div>
        { isUpVoted ? (
          <button type="button" aria-label="upVote" onClick={onClearVoteClick}>
            <BiLike size={30} className="text-rose-600" />
          </button>
        ) : (
          <button type="button" aria-label="upVote" onClick={onUpVoteClick}>
            <BiLike size={24} className="text-emerald-400" />
            {' '}
          </button>
        )}
      </div>
      <span className="font-bold">{upVotes.length}</span>
      <div>
        { isDownVoted ? (
          <button type="button" aria-label="upVote" onClick={onClearVoteClick}>
            <BiDislike size={30} className="text-slate-600" />
          </button>
        ) : (
          <button type="button" aria-label="upVote" onClick={onDownVoteClick}>
            <BiDislike size={24} className="text-emerald-400" />
            {' '}
          </button>
        )}
      </div>
      <span className="font-bold">{downVotes.length}</span>
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
