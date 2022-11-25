import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncToogleUpVoteThread, asyncToogleDownVoteThread } from '../states/threads/action';

function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const onUpVote = (id) => {
    dispatch(asyncToogleUpVoteThread(id));
  };
  const onDownVote = (id) => {
    dispatch(asyncToogleDownVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    ownerId: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="section-container">
      <ThreadsList threads={threadList} upVote={onUpVote} downVote={onDownVote} />
    </section>
  );
}

export default HomePage;
