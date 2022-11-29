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
    <div role="button" tabIndex={0} className="comment-item">
      <div className="comment-item__user-avatar">
        <img src={owner.avatar} alt={owner.name} />
      </div>
      <div className="comment-item__detail">
        <header>
          <div className="comment-item__owner-info">
            <p className="comment-item__owner-name">{owner.name}</p>
          </div>
          <p className="comment-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <div className="comment-item__body">{parser(content)}</div>
        </article>
        <div className="comment-item__upVotess">
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
