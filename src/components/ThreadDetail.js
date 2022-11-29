import React from 'react';
import PropTypes from 'prop-types';
import { BiUpvote, BiDownvote } from 'react-icons/bi';
import { postedAt } from '../utils';
import { userShape } from './ThreadItem';

function ThreadDetail({
  id, title, body,
  category, createdAt,
  upVotesBy, downVotesBy,
  owner, comments, authUser,
  upVote, downVote, clearVote,
}) {
  const isThreadUpVoted = upVotesBy.includes(authUser);
  const isThreadDownVoted = downVotesBy.includes(authUser);

  return (
    <section className="thread-detail">
      <header>
        <p>
          #
          {category}
        </p>
        <img src={owner.avatar} alt={owner} />
        <div className="thread-detail__owner-info">
          <p className="thread-detail__owner-name">{owner.name}</p>
        </div>
        <h3>{title}</h3>
      </header>
      <article>
        <p className="thread-detail__body">{body}</p>
      </article>
      <aside>
        <div className="thread-detail__like">
          { isThreadUpVoted ? (
            <button type="button" aria-label="upVote" onClick={() => clearVote(id)}>
              <BiUpvote style={{ color: 'red' }} />
            </button>
          ) : (
            <button type="button" aria-label="upVote" onClick={() => upVote(id)}>
              <BiUpvote />
              {' '}
            </button>
          )}
          {' '}
          {upVotesBy.length}
          {' | '}
          { isThreadDownVoted ? (
            <button type="button" aria-label="upVote" onClick={() => clearVote(id)}>
              <BiDownvote style={{ color: 'grey' }} />
            </button>
          ) : (
            <button type="button" aria-label="upVote" onClick={() => downVote(id)}>
              <BiDownvote />
              {' '}
            </button>
          )}
          {' '}
          {downVotesBy.length}
        </div>
        <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
      </aside>
      <article>
        <div className="comments-list">
          {
         comments.map((comment) => (
           <p key={comment.id}>
             {comment.content}
             {' '}
             by
             {' '}
             {comment.owner.name}
             {' '}
           </p>
         ))
      }
        </div>
      </article>

    </section>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  clearVote: PropTypes.func.isRequired,
};

ThreadDetail.defaultProps = {
  category: '',
};

export default ThreadDetail;
