import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { BiComment } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import VoteButtons from './VoteButtons';
import ThreadInfo from './ThreadInfo';

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
    <div role="button" tabIndex={0} className="thread-item p-4 border-b-2 border-emerald-700" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <ThreadInfo
        category={category}
        createdAt={createdAt}
        name={ownerId.name}
        email={ownerId.email}
        avatar={ownerId.avatar}
      />
      <div className="thread-item__detail">
        <h3 className="thread-item__title my-2 text-2xl font-bold text-emerald-700">{title}</h3>
        <div className="thread-item__body mt-2 mb-4 max-h-[9rem] text-ellipsis overflow-hidden rounded-xl">{parser(body)}</div>
        <div className="thread-item__stat flex justify-between items-center">
          <p className="flex gap-x-2 items-center">
            <span><BiComment /></span>
            <span className="font-bold">{totalComments}</span>
            <span>Comments</span>
          </p>
          <VoteButtons
            id={id}
            authUser={authUser}
            upVotes={upVotesBy}
            downVotes={downVotesBy}
            upVote={upVote}
            downVote={downVote}
            clearVote={clearVote}
          />
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
