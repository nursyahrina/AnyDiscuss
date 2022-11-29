import React from 'react';
import { VscCommentDiscussion } from 'react-icons/vsc';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
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
        <h2>Create new account</h2>
        <RegisterInput register={onRegister} />

        <p>
          Already have an account?
          {' '}
          <Link to="/">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
