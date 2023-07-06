import { ToastContainer } from "react-toastify";
import MobileNav from "./MobileNav";

const MobileLayout = ({ children }) => {
  return (
    <div className="flex flex-col max-h-screen overflow-y-hidden sm:hidden">
      <ToastContainer />
      <div className="h-[calc(100vh_-_4.5rem)] overflow-y-auto">{children}</div>
      <div className="h-[4.5rem]">
        <MobileNav />
      </div>
    </div>
  );
};

export default MobileLayout;
