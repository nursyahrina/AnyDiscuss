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
    <div className="comment-input">
      <div
        id="comment-input__editable"
        suppressContentEditableWarning
        data-placeholder="What are you thinking about this thread?"
        contentEditable
        onInput={onContentChangeHandler}
      />
      <button type="submit" onClick={submitComment}>Send</button>
    </div>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func,
};

CommentInput.defaultProps = {
  addComment: null,
};

export default CommentInput;
