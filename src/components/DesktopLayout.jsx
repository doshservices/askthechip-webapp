import { SideNav } from ".";

const DesktopLayout = ({ children }) => {
  return (
    <section className="hidden sm:grid grid-cols-12 justify-between">
      <div className="col-span-1 xm:col-span-3 h-screen overflow-y-auto border-r border-[#EBEEF0]">
        <SideNav />
      </div>
      <div className="col-span-11 xm:col-span-9 h-screen overflow-y-auto">{children}</div>
    </section>
  );
};

export default DesktopLayout;
