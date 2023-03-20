import { HomepageLayout, MobileLayout, Services, ServicesMobile } from "../components";

const ServicesPage = () => {
  return (
    <>
    <HomepageLayout>
      <Services />
    </HomepageLayout>
    <MobileLayout>
      <ServicesMobile />
    </MobileLayout>
    </>
  );
};
export default ServicesPage;
