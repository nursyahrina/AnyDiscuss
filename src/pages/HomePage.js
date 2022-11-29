import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadsList from '../components/ThreadsList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { asyncUpVoteThread, asyncDownVoteThread, asyncClearVoteThread } from '../states/threads/action';
import AddButton from '../components/AddButton';

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
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onClearVote = (id) => {
    dispatch(asyncClearVoteThread(id));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    ownerId: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  return (
    <section className="section-container">
      <ThreadsList
        threads={threadList}
        upVote={onUpVote}
        downVote={onDownVote}
        clearVote={onClearVote}
      />
      <aside>
        <AddButton className="fixed bottom-16 right-8" />
      </aside>
    </section>
  );
}

export default HomePage;
