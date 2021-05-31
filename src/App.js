import { useState } from 'react';
import './App.css';
import UploadPhoto from './components/UploadPhoto';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [ selectedImg, setSelectedImg ] = useState(null);

  return (
    <div className="App">
      <h1>Your Photos</h1>
      <UploadPhoto />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      { selectedImg  && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
