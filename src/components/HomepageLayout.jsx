import { SideNav } from "../components";

const HomepageLayout = ({children}) => {
  return (
    <section className="grid grid-cols-12 justify-between">
        <div className="col-span-3 h-screen overflow-y-auto border-r border-[#EBEEF0]">
            <SideNav />
        </div>
        <div className="col-span-9 h-screen overflow-y-auto">
            {children}
        </div>
    </section>
  )
}

export default HomepageLayout;