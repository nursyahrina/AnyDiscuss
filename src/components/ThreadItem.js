import React from 'react';
import PropTypes from 'prop-types';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

function ThreadItem({
  id, title, body, category, createdAt, upVotesBy, downVotesBy, ownerId, authUser, upVote, downVote,
}) {
  const navigate = useNavigate();
  const isThreadUpVoted = upVotesBy.includes(authUser);
  const isThreadDownVoted = downVotesBy.includes(authUser);

  const onUpVoteClick = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteClick = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="thread-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="thread-item__user-avatar">
        <img src={ownerId.avatar} alt={ownerId} />
      </div>
      <div className="thread-item__detail">
        <header>
          <div className="thread-item__user-info">
            <p className="thread-item__user-name">{ownerId.name}</p>
            <p className="thread-item__user-id">
              {/* Take string before @ as display username */}
              @
              {ownerId.email.substring(0, ownerId.email.indexOf('@'))}
            </p>
          </div>
          <p className="thread-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="thread-item__category">
            #
            {category}
          </p>
          <h3 className="thread-item__title">{title}</h3>
          <div className="thread-item__body">{parser(body)}</div>
        </article>
        <div className="thread-item__upVotess">
          <p>
            <button type="button" aria-label="upVote" onClick={onUpVoteClick}>
              { isThreadUpVoted ? <BiUpvote style={{ color: 'red' }} /> : <BiUpvote />}
            </button>
            {' '}
            {upVotesBy.length}
            {' | '}
            <button type="button" aria-label="downVote" onClick={onDownVoteClick}>
              { isThreadDownVoted ? <BiDownvote style={{ color: 'grey' }} /> : <BiDownvote />}
            </button>
            {' '}
            {downVotesBy.length}
          </p>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  ownerId: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
