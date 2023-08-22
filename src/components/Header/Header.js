import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { addSearch, getSearch } from "../../features/movies/searchSlice";

function Header() {
  const[search,setSearch] = useState('')
  const dispatch = useDispatch()
  dispatch(addSearch(search))
  // console.log(search)
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-container">
        <input
          placeholder="Seacrh Movies"
          type="text"
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="user-image">
        <img src={user} alt="user"></img>
      </div>
    </div>
  );
}

export default Header;
