import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { postedAt } from '../utils';
import { userShape } from './ThreadItem';
import VoteButtons from './VoteButtons';

function CommentItem({
  id, content,
  createdAt, upVotesBy, downVotesBy,
  owner, authUser,
  upVote, downVote, clearVote,
}) {
  return (
    <div className="comment-item flex flex-col md:flex-row gap-4 w-full px-3 py-4 border-b-2 border-emerald-400">
      <div className="comment-item__info basis-2/12">
        <img className="comment-item__user-avatar rounded-full" width={32} src={owner.avatar} alt={owner.name} />
        <p className="comment-item__owner-name font-semibold">{owner.name}</p>
        <p className="comment-item__created-at text-sm">{postedAt(createdAt)}</p>
      </div>
      <div className="comment-item__body basis-9/12">{parser(content)}</div>
      <div className="comment-item__upVotess basis-1/12 self-end md:self-start">
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
  );
}

const commentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
  clearVote: PropTypes.func,
};

CommentItem.defaultProps = {
  upVote: null,
  downVote: null,
  clearVote: null,
};

export { commentItemShape };

export default CommentItem;
