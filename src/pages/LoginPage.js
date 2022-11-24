import React from 'react';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="section-container">
      <header className="section-container__header">
        <h1>
          <VscCommentDiscussion />
          {' '}
          AnyDiscuss?
        </h1>
      </header>
      <article className="section-container__main">
        <p>
          <strong>Discuss anything</strong>
          {' '}
          with fellow enthusiasts
          <br />
          from all over
          {' '}
          <strong>The World</strong>
          !
        </p>

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register Here!</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
