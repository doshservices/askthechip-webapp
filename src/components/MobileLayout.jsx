import MobileNav from "./MobileNav";
const MobileLayout = ({ children }) => {
  const pathname = window.location.pathname;
  return (
    <div className={pathname === '/messages'? 'flex flex-col max-h-screen overflow-y-hidden sm:hidden': 'flex flex-col max-h-screen overflow-y-hidden sm:hidden bg-light'}>
      <div className="h-[calc(100vh_-_4.5rem)] overflow-y-auto">{children}</div>
      <div className="h-[4.5rem]">
        <MobileNav />
      </div>
    </div>
  );
};

export default MobileLayout;
