import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function CommentInput({ addComment }) {
  const [resets, setResets] = React.useState(0);
  const [content, setContent] = React.useState('');
  const onContentChangeHandler = (event) => setContent(event.target.innerHTML);

  useEffect(() => {
    const input = document.getElementById('comment-input__editable');
    input.innerHTML = '';
  }, [resets]);

  const submitComment = () => {
    if (content.trim()) {
      addComment(content);
    }
    setContent('');
    setResets((reset) => reset + 1);
  };

  return (
    <div className="comment-input flex flex-col md:flex-row gap-3">
      <div
        id="comment-input__editable"
        className="md:basis-11/12 input-text min-h-[100px]"
        suppressContentEditableWarning
        data-placeholder="What are you thinking about this thread?"
        contentEditable
        onInput={onContentChangeHandler}
      />
      <button className="md:basis-1/12 input-button px-5" type="submit" onClick={submitComment}>Send</button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default CommentInput;
