import { HomepageLayout, MobileLayout, Notifications } from "../components";

const NotificationsPage = () => {
  return (<>
    <HomepageLayout>
      <Notifications />
    </HomepageLayout>
    <MobileLayout>
      <Notifications />
    </MobileLayout>
  </>
  );
};

export default NotificationsPage;
