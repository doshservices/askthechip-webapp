import { DesktopLayout, MobileLayout, Notifications } from "../components";

const NotificationsPage = () => {
  return (<>
    <DesktopLayout>
      <Notifications />
    </DesktopLayout>
    <MobileLayout>
      <Notifications />
    </MobileLayout>
  </>
  );
};

export default NotificationsPage;
