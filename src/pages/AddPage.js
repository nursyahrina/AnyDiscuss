/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/threads/action';

function AddPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddThread = ({ title, category, body }) => {
    dispatch(asyncAddThread({ title, category, body }));
    navigate('/');
  };

  return (
    <section>
      <div className="section-container">
        <h2 className="section-title">Create New Thread</h2>
        <ThreadInput addThread={onAddThread} />
      </div>
    </section>
  );
}

export default AddPage;
