import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BiTrophy } from 'react-icons/bi';
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
          <BiTrophy />
          {' '}
          Leaderboards
        </h1>
      </header>
      <article className="p-8 mb-28">
        <h3 className="text-2xl font-bold">Top 10 Active Users</h3>
        <div className="leader-list">
          <div className="flex flex-wrap justify-center items-center gap-6 my-6">
            { leaderboards.slice(0, 3).map(({ user, score }, index) => (
              <LeaderboardTopItem
                key={user.id}
                user={user}
                score={score}
                rank={index + 1}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between items-center mt-12 bg-emerald-50 p-4 rounded-xl">
            { leaderboards.slice(3, leaderboards.length).map(({ user, score }) => (
              <LeaderboardItem
                key={user.id}
                user={user}
                score={score}
              />
            ))}
          </div>
        </div>
      </article>
      <aside>
        <AddButton className="fixed bottom-16 right-8" />
      </aside>
    </section>
  );
}

export default LeaderboardsPage;
