import search from "../../../assets/search.svg";

export const Search = ({background}) => {
  return (
    <div className="flex rounded-full items-center border border-[#EBEEF0]" style={{backgroundColor: background}}>
      <label htmlFor="search" className="cursor-pointer pl-4 pr-2"><img src={search} alt="search" /></label> 
      <input id="search" name="search" className="bg-transparent w-full py-2 pr-4 outline-none" type="search" placeholder="Search Askthechip" />
    </div>
  );
};
