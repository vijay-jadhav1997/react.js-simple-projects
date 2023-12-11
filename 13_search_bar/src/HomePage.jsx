import { useState } from "react";
import "./HomePage.css";
import SearchBar from "./components/SearchBar";
import { SearchContext } from "./helpers/Contexts";
import SearchResults from "./components/SearchResults";

function HomePage() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className="homePage">
      <SearchContext.Provider value={{ searchResult, setSearchResult }}>
        <SearchBar />
        <SearchResults />
      </SearchContext.Provider>
    </div>
  );
}

export default HomePage;
