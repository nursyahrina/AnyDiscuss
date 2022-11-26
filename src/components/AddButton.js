import React from 'react';
import { RiAddFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function AddButton() {
  return (
    <button type="button">
      <Link to="/threads/new">
        <RiAddFill size={40} />
      </Link>
    </button>
  );
}

export default AddButton;
