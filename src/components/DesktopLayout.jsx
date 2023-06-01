import { SideNav } from ".";

const DesktopLayout = ({ children }) => {
  return (
    <section className="hidden sm:grid grid-cols-24 xm:grid-cols-24 justify-between bg-light">
      <div className="col-span-3 xm:col-span-4 h-screen overflow-y-auto border-r border-[#EBEEF0]">
        <SideNav />
      </div>
      <div className="col-span-21 xm:col-span-20 h-screen overflow-y-auto">
        {children}
      </div>
    </section>
  );
};

export default DesktopLayout;
