/*
title: Endofterm Assessment - Emil Fulford
author: Emily Fulford
studentnumber: 221075*/

import React from 'react';
import DogImage from './components/landing';

const App = () => {
  return (
    <div>
      <h1>Random Dog Images</h1>
      <DogImage />
    </div>
  );
};

export default App;
  

/*const landing = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    setImageUrl(response.data.message);
  };

  const handleClick = () => {
    fetchImage();
  };

  return (
    <div>
      <img src={imageUrl} alt="dog" />
      <button onClick={handleClick}>Fetch new image</button>
    </div>
  );
};

export default landing;*/
