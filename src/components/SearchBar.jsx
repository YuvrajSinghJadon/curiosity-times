import React, { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    // if (e.key === "Enter") {
    e.preventDefault();
    // Process the searchQuery value here or pass it to another function
    console.log("Search Query:", searchQuery);

    // Navigate to the /news/:query route
    navigate(`/news/${searchQuery}`);

    // Reset the search bar after processing the value
    setSearchQuery("");
  };

  return (
    <div className="relative w-48 bg-blue-300 rounded-md shadow-md overflow-hidden transition-all duration-300 transform hover:w-60 text-gray-500">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e);
          }
        }}
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-4 focus:outline-none bg-gray-300"
      />
      <button
        type="submit"
        onClick={handleSearch} // This handles button click
        className="py-0.5 absolute top-0 left-0 mt-2 ml-2 p-2 text-gray-500 focus:outline-none"
      >
        <FcSearch className="w-6 h-6 fill-current " />
      </button>
    </div>
  );
};

export default SearchBar;
