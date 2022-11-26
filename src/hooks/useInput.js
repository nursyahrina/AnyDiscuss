import React from 'react';

function useInput(defaultValue, maxInput = 35) {
  const [value, setValue] = React.useState(defaultValue);
  const onValueChangeHandler = (event) => {
    if (event.target.value.length <= maxInput) {
      setValue(event.target.value);
    }
  };
  return [value, onValueChangeHandler];
}

export default useInput;
