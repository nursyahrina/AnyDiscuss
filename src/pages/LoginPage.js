import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BiLogInCircle } from 'react-icons/bi';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  const pathRegister = '/register';

  return (
    <section className="section-container">
      <header className="section-container__header">
        <h1 className="flex gap-2 items-center">
          <BiLogInCircle />
          <span>Login</span>
        </h1>
      </header>
      <article className="section-container__main flex flex-col">
        <p className="text-xl">
          <strong>Discuss anything</strong>
          {' with fellow enthusiasts from all over '}
          <strong>The World</strong>
          !
        </p>

        <LoginInput login={onLogin} />
        <p className="mr-6 text-xl self-end">
          Don&apos;t have an account?
          {' '}
          <Link className="hover:underline font-bold" to={pathRegister}>Register Here!</Link>
        </p>
      </article>
    </section>
  );
}

export default LoginPage;
