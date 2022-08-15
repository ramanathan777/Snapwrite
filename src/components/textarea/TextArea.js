import React from 'react';
import './textarea.css';

function TextArea(props) {
  const { name, textVal, onTextChange } = props;

  return (
    <div id='textarea'>
      <div id='header'>Text Box</div>
      <textarea
        id='description'
        rows='10'
        cols='50'
        name={name}
        value={textVal}
        onChange={(e) => onTextChange(e)}
      />
      <div id='footer'></div>
    </div>
  );
}

export default TextArea;
