import search from "../../../assets/search.svg";

export const Search = () => {
  return (
    <div className="flex">
      <img src={search} alt="search" />
      <input type="search" placeholder="Search Askthechip" />
    </div>
  );
};
