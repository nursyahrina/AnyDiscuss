import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiTrophy, BiHome, BiLogOut } from 'react-icons/bi';

function Navigation({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  return (
    <div className="navigation flex flex-row gap-x-4 md:gap-x-2 py-2 justify-center items-center">
      <nav className="flex flex-row">
        <Link className="nav-item" to="/">
          <BiHome size={32} />
          <span>Home</span>
        </Link>
        <Link className="nav-item" to="/leaderboards">
          <BiTrophy size={32} />
          <span>Leaderboards</span>
        </Link>
        <button className="nav-item" type="button" onClick={signOut}>
          <BiLogOut size={32} className="mr-2" />
          <span>Logout</span>
        </button>
      </nav>
      <img src={avatar} alt={id} title={name} className="rounded-full w-8 md:w-14" />
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
