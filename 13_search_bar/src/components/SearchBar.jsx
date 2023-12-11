import { useState, useContext } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import "./SearchBar.css";
import { SearchContext } from "../helpers/Contexts";

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const { setSearchResult } = useContext(SearchContext);

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setSearchResult(result);
      });
  };

  const handleChange = (value) => {
    setInputText(value);
    fetchData(value);
  };

  return (
    <div className="searchBox">
      <HiOutlineSearch id="search_icon" />
      <input
        type="search"
        value={inputText}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        name=""
        id="searchInput"
        placeholder="Type to search..."
      />
    </div>
  );
};

export default SearchBar;
