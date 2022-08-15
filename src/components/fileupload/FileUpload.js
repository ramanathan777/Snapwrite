import React from 'react';
import './fileupload.css';
import iconImage from '../../assets/images/uploadIndicator.png';

function FileUpload(props) {
  const { imageBase64, onFileUpload, onCancelClick } = props;

  return (
    <div id='fileupload'>
      {imageBase64 == '' ? (
        <label htmlFor='image'>
          <input
            type='file'
            name='image'
            id='uploadBtn'
            onChange={onFileUpload}
            accept='.jpg,.jpeg,.png'
          />
          <img src={iconImage} id='imageIcon' />
          <h3>PNG, JPEG files only</h3>
        </label>
      ) : (
        <>
          <img src={imageBase64} />
          <button onClick={() => onCancelClick()}>Cancel</button>
        </>
      )}
    </div>
  );
}

export default FileUpload;
