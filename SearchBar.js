import React, { useState } from 'react';
import data from './data.js';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");


    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          data.keyboards.filter((title) => {
          return data.keyboards.name.match(searchInput);
      });
      }
      
      return <div>
      
      <input
         type="search"
         placeholder="Search here"
         onChange={handleChange}
         value={searchInput} />
      
      <table>
        <tr>
          <th>Keyboard Type</th>
          <th>Image</th>
        </tr>
      
      {data.keyboards.map((title, index) => {
      
      <div>
        <tr>
          <td>{data.keyboards.title}</td>
          <td>{data.keyboards.image}</td>
        </tr>
      </div>
      
      })}
      </table>
      
      </div>
};

export default SearchBar;


