/*
title: Endofterm Assessment - Emil Fulford
author: Emily Fulford
studentnumber: 221075*/

/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);*/


import React, { useState, useEffect } from 'react';
import axios from 'axios';




const landing = () => {
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

export default landing;