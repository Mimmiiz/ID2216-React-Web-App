import React from "react";
import './styles/ServicePersonList.css';
const Search = () => (
    <div>
    <form action="/" method="get" >
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input className="SearchBar"
            type="text"
            id="header-search"
            placeholder="Search"
            name="s" 
        />
        {/* <button type="submit">Search</button> */}
    </form></div>
)

export default Search;