import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { BiComment } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { postedAt } from '../utils';
import VoteButtons from './VoteButtons';

function ThreadItem({
  id, title, body, category,
  createdAt, upVotesBy, downVotesBy,
  ownerId, totalComments, authUser,
  upVote, downVote, clearVote,
}) {
  const navigate = useNavigate();

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
          <div className="thread-item__owner-info">
            <p className="thread-item__owner-name">{ownerId.name}</p>
            <p className="thread-item__owner-id">
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
          <VoteButtons
            id={id}
            authUser={authUser}
            upVotes={upVotesBy}
            downVotes={downVotesBy}
            upVote={upVote}
            downVote={downVote}
            clearVote={clearVote}
          />
          {' | '}
          <BiComment />
          {' '}
          {totalComments}
          {' '}
          Comments

        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
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
  ownerId: PropTypes.shape(userShape).isRequired,
  totalComments: PropTypes.number.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  clearVote: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
  clearVote: null,
};

export { threadItemShape, userShape };

export default ThreadItem;
