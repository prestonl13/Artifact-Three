import React from 'react';
import data from './data.js';
import {Gallery} from './Gallery.js';
import Banner from './Banner.js';
import './App.css';
import SearchBar from './SearchBar.js';
import { useState } from 'react';


function App() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
  var lowerCase = e.target.value.toLowerCase();
  setInputText(lowerCase);
  };

  // console.log(data)
  return (

    <div>
      <Banner title="Keyboards" />
      <SearchBar class = "center" />
      <Gallery data = {data.keyboards} />
    </div>
  );
}

export default App;
