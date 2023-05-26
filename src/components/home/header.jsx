const Header = ({ darkMode, setDarkMode }) => {
  const handleLightMode = () => {
    if (darkMode === true) {
      setDarkMode(!darkMode);
    }
  };
  const handleDarkMode = () => {
    if (darkMode === false) {
      setDarkMode(!darkMode);
    }
  };
  return (
    <div className="flex justify-between py-5">
      <h3 className="text-[#0F1419] font-bold font-Inter text-[1.1875rem]">
        Home
      </h3>
      <div className="flex gap-2 cursor-pointer">
        <div className="flex justify-center text-light text-xs rounded-full border border-[#2d2d2d] w-fit p-1">
          <div
            onClick={handleLightMode}
            className={
              !darkMode
                ? `px-5 bg-primary80 rounded-full py-1 cursor-pointer`
                : `px-5 text-[#2d2d2d] rounded-full py-1 cursor-pointer`
            }
          >
            White Board
          </div>
          <div
            onClick={handleDarkMode}
            className={
              darkMode
                ? `px-5 bg-primary80 rounded-full py-1 cursor-pointer`
                : `px-5 text-[#2d2d2d] rounded-full py-1 cursor-pointer`
            }
          >
            Black Board
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
