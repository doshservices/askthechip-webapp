import { Chat, DesktopLayout, MobileLayout } from "../components";

const MessagesPage = () => {
  return (
    <>
      <DesktopLayout>
        <Chat />
      </DesktopLayout>
      <MobileLayout>
        <Chat />
      </MobileLayout>
    </>
  );
};

export default MessagesPage;
