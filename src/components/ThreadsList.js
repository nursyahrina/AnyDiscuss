import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({
  threads, upVote, downVote, clearVote,
}) {
  return (
    <div className="threads-list">
      {
         threads.map((thread) => (
           <ThreadItem
             key={thread.id}
             {...thread}
             upVote={upVote}
             downVote={downVote}
             clearVote={clearVote}
           />
         ))
      }
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  clearVote: PropTypes.func.isRequired,
};

export default ThreadsList;
