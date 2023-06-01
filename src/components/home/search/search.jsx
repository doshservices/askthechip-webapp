import search from "../../../assets/search.svg";

const Search = ({ background, placeholder }) => {
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
        placeholder={placeholder? placeholder: "Search Askthechip"}
      />
      <label htmlFor="search" className="cursor-pointer pl-1">
        <img src={search} alt="search" />
      </label>
    </div>
  );
};

export default Search;
