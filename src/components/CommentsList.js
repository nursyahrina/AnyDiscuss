import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

function CommentsList({
  comments, upVote, downVote, clearVote, authUser,
}) {
  return (
    <div className="comments-list">
      {
         comments.map((comment) => (
           <CommentItem
             key={comment.id}
             {...comment}
             upVote={upVote}
             downVote={downVote}
             clearVote={clearVote}
             authUser={authUser}
           />
         ))
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  clearVote: PropTypes.func.isRequired,
  authUser: PropTypes.string.isRequired,
};

export default CommentsList;
