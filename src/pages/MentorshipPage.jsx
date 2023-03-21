import { DesktopLayout, Mentorship, MobileLayout } from "../components";

const MessagesPage = () => {
  return (
    <>
      <DesktopLayout>
        <Mentorship />
      </DesktopLayout>
      <MobileLayout>
        <Mentorship />
      </MobileLayout>
    </>
  );
};

export default MessagesPage;
