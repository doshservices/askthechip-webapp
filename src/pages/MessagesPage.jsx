import { DesktopLayout, Messages, MobileLayout } from "../components";

const MessagesPage = () => {
  return (
    <>
      <DesktopLayout>
        <Messages />
      </DesktopLayout>
      <MobileLayout>
        <Messages />
      </MobileLayout>
    </>
  );
};

export default MessagesPage;
