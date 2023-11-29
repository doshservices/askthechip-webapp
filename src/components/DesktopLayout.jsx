import { SideNav } from ".";

const DesktopLayout = ({ children }) => {
  const pathname = window.location.pathname;

  return (
    <section className="pageLayout bg-light">
      <SideNav />
      <div className="pageLayout__wrapper__container">
        {children}
      </div>
    </section>
  );
};

export default DesktopLayout;
