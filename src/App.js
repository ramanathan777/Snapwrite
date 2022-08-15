import './App.css';
import FileUpload from './components/fileupload/FileUpload';
import TextArea from './components/textarea/TextArea';
import { useEffect, useState } from 'react';

//initial State
const initialState = {
  imageBase64: '',
  text1Desc: '',
  text2Desc: '',
};

function App() {
  const ls = localStorage.getItem('store');
  const [store, setStore] = useState(JSON.parse(ls) || initialState);

  //update the local storage on store update
  useEffect(() => {
    localStorage.setItem('store', JSON.stringify(store));
  }, [store]);

  //update store on text change
  const onTextChange = (e) => {
    if (e.target.name == 'Text1') {
      setStore({ ...store, text1Desc: e.target.value });
    } else {
      setStore({ ...store, text2Desc: e.target.value });
    }
  };

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  //update image on file upload
  const onFileUpload = async (e) => {
    console.log(e);
    const file = e.target.files[0];
    const imageBase64 = await getBase64(file);
    setStore({ ...store, imageBase64: imageBase64 });
  };

  //remove uploaded image
  const onCancelClick = () => {
    setStore({ ...store, imageBase64: '' });
  };

  return (
    <div className='App'>
      <div id='left'>
        <FileUpload
          imageBase64={store.imageBase64}
          onFileUpload={onFileUpload}
          onCancelClick={onCancelClick}
        />
      </div>
      <div id='right'>
        <TextArea
          name='Text1'
          textVal={store.text1Desc}
          onTextChange={onTextChange}
        />
        <TextArea
          name='Text2'
          textVal={store.text2Desc}
          onTextChange={onTextChange}
        />
      </div>
    </div>
  );
}

export default App;
