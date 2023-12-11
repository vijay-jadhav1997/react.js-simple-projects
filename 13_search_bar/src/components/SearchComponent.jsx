import "./searchComponent.css";

const SearchComponent = ({ data }) => {
  return (
    <div
      className="searchComponent"
      onClick={() => {
        alert(`You have clicked ${data?.name}`);
      }}
    >
      {data?.name}
    </div>
  );
};

export default SearchComponent;
