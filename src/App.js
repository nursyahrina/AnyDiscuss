import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import RegisterPage from './pages/RegisterPage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import AppBrand from './components/AppBrand';
import Footer from './components/Footer';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function ForumApp() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const pathHome = '/';
  const pathAuth = '/*';
  const pathRegister = '/register';
  const pathLeaderbooards = '/leaderboards';
  const pathAddNew = '/threads/new';
  const pathDetail = '/threads/:id';

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <div className="app-container">
          <header className="flex flex-wrap gap-4 justify-between px-5 py-5">
            <AppBrand />
          </header>
          <main>
            <Routes>
              <Route path={pathAuth} element={<LoginPage />} />
              <Route path={pathRegister} element={<RegisterPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="app-container">
        <header className="p-5">
          <AppBrand />
        </header>
        <main>
          <Routes>
            <Route path={pathHome} element={<HomePage />} />
            <Route path={pathAddNew} element={<AddPage />} />
            <Route path={pathDetail} element={<DetailPage />} />
            <Route path={pathLeaderbooards} element={<LeaderboardsPage />} />
          </Routes>
        </main>
        <footer className="bg-white fixed bottom-0 w-screen z-20 py-2 drop-shadow-xl text-center">
          <Navigation authUser={authUser} signOut={onSignOut} />
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default ForumApp;
