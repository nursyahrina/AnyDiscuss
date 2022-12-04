import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { VscAccount } from 'react-icons/vsc';
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
        <h1 className="flex gap-2 items-center">
          <VscAccount />
          <span>Login</span>
        </h1>
      </header>
      <article className="section-container__main flex flex-col">
        <p className="text-2xl">Create your new account</p>
        <RegisterInput register={onRegister} />
        <p className="mr-6 text-xl self-end">
          {'Already have an account? '}
          <Link className="hover:underline font-bold" to="/">Login</Link>
        </p>
      </article>
    </section>
  );
}

export default RegisterPage;
