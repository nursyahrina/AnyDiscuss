import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const InputMax = {
  MAX_TITLE: 50,
  MAX_CATEGORY: 20,
};

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('', InputMax.MAX_TITLE);
  const [category, onCategoryChange] = useInput('', InputMax.MAX_CATEGORY);
  const [body, setBody] = React.useState('');
  const onBodyChangeHandler = (event) => setBody(event.target.innerHTML);

  return (
    <div className="thread-input">
      <input type="text" value={title} onChange={onTitleChange} placeholder="Title" />
      <input type="text" value={category} onChange={onCategoryChange} placeholder="Category" />
      <div
        data-placeholder="What are you thinking?"
        contentEditable
        onInput={onBodyChangeHandler}
      />
      <button type="submit" onClick={() => addThread({ title, category, body })}>Submit</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
