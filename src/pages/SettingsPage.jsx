import { SideNav, Settings, SettingsMobile, DesktopLayout, MobileLayout } from "../components";

const SettingsPage = () => {
  return (
    // <section className="grid grid-cols-12 justify-between">
    //   <div className="col-span-2 h-screen overflow-y-auto border-r border-[#EBEEF0]">
    //     <SideNav />
    //   </div>
    //   <div className="col-span-10 h-screen overflow-y-auto">
    //     <Settings />
    //   </div>
    // </section>
    <>
      <DesktopLayout>
        <Settings />
      </DesktopLayout>
      {/* <MobileLayout>
        <SettingsMobile />
      </MobileLayout> */}
    </>
  );
};
export default SettingsPage;
