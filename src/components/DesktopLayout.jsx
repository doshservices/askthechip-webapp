import { SideNav } from ".";

const DesktopLayout = ({ children }) => {
  return (
    <section className="hidden sm:grid grid-cols-12 xm:grid-cols-24 justify-between">
      <div className="col-span-1 xm:col-span-5 h-screen overflow-y-auto border-r border-[#EBEEF0]">
        <SideNav />
      </div>
      <div className="col-span-12 xm:col-span-19 h-screen overflow-y-auto">{children}</div>
    </section>
  );
};

export default DesktopLayout;
