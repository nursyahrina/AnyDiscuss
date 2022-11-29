import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CommentInput from '../components/CommentInput';
import {
  asyncReceiveThreadDetail,
  asyncUpVoteDetail,
  asyncDownVoteDetail,
  asyncClearVoteDetail,
  asyncAddCommentThreadDetail,
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

  if (!threadDetail) {
    return <p>Thread is not found!</p>;
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
      </div>
      <div>
        <CommentInput addComment={onAddCommentThread} />
      </div>
    </section>
  );
}

export default DetailPage;
