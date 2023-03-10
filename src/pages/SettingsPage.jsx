import { Header } from "../components/home/header";
import { Posts } from "../components/home/feed/posts";
import { Share } from "../components/home/share/share";

import { SideNav, Settings } from "../components";

const SettingsPage = () => {
  return (
    <section className="grid grid-cols-12 justify-between">
        <div className="col-span-3 h-screen overflow-y-auto border-r border-[#EBEEF0]">
          <SideNav />
        </div>
      <div className="col-span-9 h-screen overflow-y-auto">
          <Settings />
      </div>
    </section>
  );
};
export default SettingsPage;
