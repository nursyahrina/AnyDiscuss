import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';
import { userShape } from './ThreadItem';
import VoteButtons from './VoteButtons';

function ThreadDetail({
  id, title, body,
  category, createdAt,
  upVotesBy, downVotesBy,
  owner, authUser,
  upVote, downVote, clearVote,
}) {
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
        <div className="thread-detail__votes">
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
        <p className="thread-detail__created-at">{postedAt(createdAt)}</p>
      </aside>
    </section>
  );
}

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  clearVote: PropTypes.func.isRequired,
};

ThreadDetail.defaultProps = {
  category: '',
};

export default ThreadDetail;
