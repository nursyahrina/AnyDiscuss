import React from 'react';
import { RiAddFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function AddButton() {
  return (
    <button className="bg-accent-hover fixed bottom-24 md:bottom-20 right-12 z-30 rounded-full p-1 md:p-3 drop-shadow-2xl" type="button">
      <Link to="/threads/new">
        <RiAddFill size={40} />
      </Link>
    </button>
  );
}

export default AddButton;
