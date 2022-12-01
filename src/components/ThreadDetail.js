import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { userShape } from './ThreadItem';
import VoteButtons from './VoteButtons';
import ThreadInfo from './ThreadInfo';

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
        <ThreadInfo
          category={category}
          createdAt={createdAt}
          name={owner.name}
          email={owner.email}
          avatar={owner.avatar}
        />
        <h2 className="text-3xl my-2 font-bold text-emerald-700">{title}</h2>
      </header>
      <article>
        <div className="thread-detail__body py-4">{parser(body)}</div>
      </article>
      <aside className="thread-detail__votes flex justify-end">
        <VoteButtons
          id={id}
          authUser={authUser}
          upVotes={upVotesBy}
          downVotes={downVotesBy}
          upVote={upVote}
          downVote={downVote}
          clearVote={clearVote}
        />
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
