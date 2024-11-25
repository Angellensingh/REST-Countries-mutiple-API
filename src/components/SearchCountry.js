import React from "react";

const SearchCountry = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);  
  };

  return (
    <div className=" pt-6 pl-9">
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}  
        className="rounded-lg shadow px-12 py-2 bg-search-icon bg-width bg-no-repeat bg-position dark:bg-DarkModeElements dark:shadow dark:text-white"
      />
    </div>
  );
};

export default SearchCountry;