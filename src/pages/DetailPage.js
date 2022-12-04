import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentsList';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteDetail,
  asyncDownVoteDetail,
  asyncClearVoteDetail,
  asyncAddCommentThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncClearVoteComment,
} from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';

function DetailPage() {
  const { id } = useParams();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVoteClick = () => {
    dispatch(asyncUpVoteDetail());
  };

  const onDownVoteClick = () => {
    dispatch(asyncDownVoteDetail());
  };

  const onClearVoteClick = () => {
    dispatch(asyncClearVoteDetail());
  };

  const onAddCommentThread = (content) => {
    dispatch(asyncAddCommentThreadDetail({ content }));
  };

  const onUpVoteCommentClick = (commentId) => {
    dispatch(asyncUpVoteComment(commentId));
  };

  const onDownVoteCommentClick = (commentId) => {
    dispatch(asyncDownVoteComment(commentId));
  };

  const onClearVoteCommentClick = (commentId) => {
    dispatch(asyncClearVoteComment(commentId));
  };

  if (!threadDetail) {
    return (
      <section className="section-container">
        <header className="section-container__header">
          <h1>Sorry, Thread is not found.</h1>
        </header>
      </section>
    );
  }

  return (
    <section>
      <div className="section-container">
        <ThreadDetail
          {...threadDetail}
          authUser={authUser.id}
          upVote={onUpVoteClick}
          downVote={onDownVoteClick}
          clearVote={onClearVoteClick}
        />
        <div className="my-3">
          <CommentInput addComment={onAddCommentThread} />
        </div>
        <div>
          <h4 className="mx-3 text-xl font-bold">
            {`${threadDetail.comments.length} Comments`}
          </h4>
          <CommentsList
            comments={threadDetail.comments}
            upVote={onUpVoteCommentClick}
            downVote={onDownVoteCommentClick}
            clearVote={onClearVoteCommentClick}
            authUser={authUser.id}
          />
        </div>
      </div>
    </section>
  );
}

export default DetailPage;
