import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';
import LeaderboardItem from '../components/LeaderboardItem';
import LeaderboardTopItem from '../components/LeaderboardTopItem';
import AddButton from '../components/AddButton';

function LeaderboardsPage() {
  const {
    leaderboards = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  return (
    <section className="section-container">
      <header className="section-container__header">
        <h1>
          <VscCommentDiscussion />
          {' '}
          AnyDiscuss? Leaderboards
        </h1>
      </header>
      <article>
        <h3>Top 10 Active Users</h3>
        <div className="leader-list">
          { leaderboards.slice(0, 3).map(({ user, score }, index) => (
            <LeaderboardTopItem
              key={user.id}
              user={user}
              score={score}
              rank={index + 1}
            />
          ))}
          { leaderboards.slice(3, leaderboards.length).map(({ user, score }) => (
            <LeaderboardItem
              key={user.id}
              user={user}
              score={score}
            />
          ))}
        </div>
      </article>
      <aside>
        <AddButton className="fixed bottom-16 right-8" />
      </aside>
    </section>
  );
}

export default LeaderboardsPage;
