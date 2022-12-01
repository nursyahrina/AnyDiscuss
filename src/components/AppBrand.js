import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

function AppBrand() {
  return (
    <Link to="/" className="flex justify-start items-center">
      <img className="flex-none w-12 h-12 rounded-lg animate-scale" src={Logo} alt="AnyDiscuss? Logo" />
      <h1 className="text-2xl md:text-4xl flex-initial px-3 hover:drop-shadow-2xl">
        AnyDiscuss?
      </h1>
    </Link>
  );
}

export default AppBrand;
