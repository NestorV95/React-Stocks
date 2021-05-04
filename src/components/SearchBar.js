import React from 'react';

const SearchBar = (props) => {

  const abc=()=>{
    props.abc()
  }

  const price=()=>{
    props.price()
  }

  const type=e=>{
    props.type(e.target.value)
  }


  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={()=>abc()}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={()=>price()}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e)=>type(e)}>
        <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
