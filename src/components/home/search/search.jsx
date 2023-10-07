import search from "../../../assets/search.svg";
import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const Search = ({ background, placeholder }) => {
  // const navigate = useNavigate()

  return (
    <div
      className="flex rounded-lg items-center w-full border border-[#EBEEF0] px-5 mx-5"
      style={{ backgroundColor: background }}
    >
      <input
        id="search"
        name="search"
        className="bg-transparent w-full py-[0.375rem] outline-none"
        type="search"
        placeholder={placeholder ? placeholder : "Search Askthechip"}
      // onClick={() => navigate("/search")}
      />
      <label htmlFor="search" className="cursor-pointer pl-1">
        <img src={search} alt="search" />
      </label>
    </div>
  );
};

export default Search;
