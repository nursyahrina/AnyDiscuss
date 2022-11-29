import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
  UP_VOTE_THREAD_DETAIL: 'UP_VOTE_THREAD_DETAIL',
  DOWN_VOTE_THREAD_DETAIL: 'DOWN_VOTE_THREAD_DETAIL',
  CLEAR_VOTE_THREAD_DETAIL: 'CLEAR_VOTE_THREAD_DETAIL',
  COMMENT_THREAD_DETAIL: 'COMMENT_THREAD_DETAIL',
  UP_VOTE_COMMENT: 'UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  CLEAR_VOTE_COMMENT: 'CLEAR_VOTE_COMMENT',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function upVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function downVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function clearVoteThreadDetailActionCreator(userId) {
  return {
    type: ActionType.CLEAR_VOTE_THREAD_DETAIL,
    payload: {
      userId,
    },
  };
}

function upVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function downVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function clearVoteCommentActionCreator(userId, commentId) {
  return {
    type: ActionType.CLEAR_VOTE_COMMENT,
    payload: {
      userId,
      commentId,
    },
  };
}

function addCommentThreadDetailActionCreator(comment) {
  return {
    type: ActionType.COMMENT_THREAD_DETAIL,
    payload: {
      comment,
    },
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(upVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.upVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(downVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.downVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearVoteDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(clearVoteThreadDetailActionCreator(authUser.id));

    try {
      await api.clearVoteThread(threadDetail.id);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncAddCommentThreadDetail({ content }) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { threadDetail } = getState();

    try {
      const comment = await api.commentThread({ id: threadDetail.id, content });
      dispatch(addCommentThreadDetailActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(upVoteCommentActionCreator(authUser.id, commentId));

    try {
      await api.upVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(downVoteCommentActionCreator(authUser.id, commentId));

    try {
      await api.downVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

function asyncClearVoteComment(commentId) {
  return async (dispatch, getState) => {
    dispatch(showLoading());

    const { authUser, threadDetail } = getState();
    dispatch(clearVoteCommentActionCreator(authUser.id, commentId));

    try {
      await api.clearVoteComment(threadDetail.id, commentId);
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  upVoteThreadDetailActionCreator,
  downVoteThreadDetailActionCreator,
  addCommentThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncUpVoteDetail,
  asyncDownVoteDetail,
  asyncClearVoteDetail,
  asyncAddCommentThreadDetail,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncClearVoteComment,
};
