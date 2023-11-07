import React from 'react';

const TextArea = ({ children, index, value, defaultValue, event }) => {
  return (
    <>
      <textarea name={`recipe_content${index}`} value={value} defaultValue={defaultValue} placeholder="" className="recipe_content" onChange={(e) => event(index, e)}></textarea>
      <p>value: {value}</p>
      <p>defaultValue: {defaultValue}</p>
    </>
  );
};

export default TextArea;
