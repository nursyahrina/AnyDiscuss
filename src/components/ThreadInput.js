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
    <form className="pt-5 pb-2 mx-6 flex flex-col">
      <input type="text" value={title} onChange={onTitleChange} placeholder="Title" />
      <input type="text" value={category} onChange={onCategoryChange} placeholder="Category" />
      <div
        className="input-text min-h-[20rem]"
        data-placeholder="What are you thinking?"
        contentEditable
        onInput={onBodyChangeHandler}
      />
      <button className="mt-2 input-button" type="submit" onClick={() => addThread({ title, category, body })}>Submit</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
