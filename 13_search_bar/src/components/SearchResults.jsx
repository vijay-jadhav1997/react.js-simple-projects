import { SearchContext } from "../helpers/Contexts";
import "./SearchResults.css";
import { useContext } from "react";
import SearchComponent from "./SearchComponent";

const SearchResults = () => {
  const { searchResult } = useContext(SearchContext);
  console.log(searchResult);
  return (
    <div className="searchResultBox">
      {searchResult.map((data, index) => {
        return <SearchComponent key={index} data={data} />;
      })}
    </div>
  );
};

export default SearchResults;
