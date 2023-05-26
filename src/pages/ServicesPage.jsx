import {
  DesktopLayout,
  MobileLayout,
  Services,
  ServicesMobile,
} from "../components";

const ServicesPage = () => {
  return (
    <>
      <DesktopLayout>
        <Services />
      </DesktopLayout>
      <MobileLayout>
        <ServicesMobile />
      </MobileLayout>
    </>
  );
};
export default ServicesPage;
