import React, {useState} from 'react';
import './App.css';
import Button from './Components/Button'
import Gifs from './Components/Gifs'

function App() {

  const [image, setImage] = useState({})

  const handleSubmit = () => {

    fetch('https://api.giphy.com/v1/gifs/random?api_key=JgZcxwwQsKdm4NPnaN1LietH7fZqsnh9')
    .then((response) => response.json())
    .then((data) => {
      setImage(data)
    })
  }

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Button onSubmit={handleSubmit} />
      <Gifs image={image} />
    </div>
  );
}

export default App
