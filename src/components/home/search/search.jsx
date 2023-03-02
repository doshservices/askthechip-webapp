import search from "../../../assets/search.svg";

export const Search = () => {
  return (
    <div className="flex bg-[#EBEEF0] rounded-full items-center">
      <label htmlFor="search" className="cursor-pointer pl-4 pr-2"><img src={search} alt="search" /></label> 
      <input id="search" name="search" className="bg-transparent w-full py-2 pr-4 outline-none" type="search" placeholder="Search Askthechip" />
    </div>
  );
};
