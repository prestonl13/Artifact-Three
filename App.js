import React from 'react';
import data from './data.js';
import {Gallery} from './Gallery.js';
import Banner from './Banner.js';
import './App.css';
import SearchBar from './SearchBar.js';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import List from "./List.js";


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
      <SearchBar/>
      <Gallery data = {data.keyboards} />
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div>
  );
}

export default App;
