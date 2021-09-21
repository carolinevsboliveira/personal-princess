import {useState} from 'react';
import './App.css';
import CardGrid from './components/CardsGrid';
import Header from './components/Header'
import PhotoModal from './components/PhotoModal';
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="App">
      <Header />
      <CardGrid setSelectedImage={setSelectedImage} setModalOpened={setModalOpened}/>
      {selectedImage && <PhotoModal setModalOpened={setModalOpened} modalOpened={modalOpened} selectedImage={selectedImage}/>}
    </div>
  );
}

export default App;
