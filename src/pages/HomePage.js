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

  const [filter, setFilter] = React.useState('');

  const dispatch = useDispatch();

  const categories = new Set(threads.map((thread) => thread.category));

  const threadList = threads.map((thread) => ({
    ...thread,
    ownerId: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

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

  return (
    <section className="section-container">
      <header className="section-container__header">
        <h1 className="flex gap-2 items-center">
          <VscCommentDiscussion />
          <span>Threads</span>
        </h1>
      </header>
      <div className="px-6 pb-4 flex flex-wrap gap-3">
        {Array.from(categories).map((category) => {
          if (filter === category) {
            return (
              <button type="button" key={category} className="categories-button text-white bg-purple-700" onClick={() => setFilter('')}>
                {`#${category}`}
              </button>
            );
          }
          return (
            <button type="button" key={category} className="categories-button bg-white text-purple-700" onClick={() => setFilter(category)}>
              {`#${category}`}
            </button>
          );
        })}
      </div>
      <ThreadsList
        threads={(filter === '' && threadList) || threadList.filter((thread) => thread.category === filter)}
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
