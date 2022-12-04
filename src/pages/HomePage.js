import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { VscCommentDiscussion } from 'react-icons/vsc';
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

  const threadList = threads.map((thread) => ({
    ...thread,
    ownerId: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const onUpVote = (id) => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVote = (id) => {
    dispatch(asyncDownVoteThread(id));
  };

  const onClearVote = (id) => {
    dispatch(asyncClearVoteThread(id));
  };

  return (
    <section className="section-container">
      <header className="section-container__header">
        <h1 className="flex gap-2 items-center">
          <VscCommentDiscussion />
          <span>Threads</span>
        </h1>
      </header>
      <ThreadsList
        threads={threadList}
        authUser={authUser.id}
        upVote={onUpVote}
        downVote={onDownVote}
        clearVote={onClearVote}
      />
      <aside>
        <AddButton />
      </aside>
    </section>
  );
}

export default HomePage;
