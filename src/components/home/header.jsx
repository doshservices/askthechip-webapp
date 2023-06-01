import Search from "./search/search";

const Header = ({ handleAllPost, handleLightMode, handleDarkMode, darkMode }) => {
  const pathname = window.location.pathname;

  return (
    <div className="flex justify-between py-5 w-[calc(100%_-_2rem)]">
      <div className="flex gap-2 cursor-pointer">
        <div className="flex justify-center text-xs rounded-full w-fit p-1">
          {pathname === "/home"
            ? <>
              <div
                onClick={handleAllPost}
                className={
                  darkMode === "All Posts"
                    ? `px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`
                    : `px-5 bg-transparent text-[#8C8C8C] rounded-full pb-0.5 pt-1.5 cursor-pointer`
                }
              >
                All Posts
              </div>
              <div
                onClick={handleLightMode}
                className={
                  darkMode === "White Board"
                    ? `px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`
                    : `px-5 bg-transparent text-[#8C8C8C] rounded-full pb-0.5 pt-1.5 cursor-pointer`
                }
              >
                White Board
              </div>
              <div
                onClick={handleDarkMode}
                className={
                  darkMode === "Black Board"
                    ? `px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`
                    : `px-5 bg-transparent text-[#8C8C8C] rounded-full pb-0.5 pt-1.5 cursor-pointer`
                }
              >
                Black Board
              </div>
            </>
            : 
            <div
            className={ `px-5 bg-[#E9E9E9] text-dark2D rounded-full pb-0.5 pt-1.5 cursor-pointer`            }
          >
            All Services
          </div>
          }
        </div>
      </div>
      <div className="w-[35%]">
        <Search background={"#FCFCFC"} />
      </div>
    </div>
  );
};

export default Header;
