import { Chat, DesktopLayout, Messages, MobileLayout } from "../components";

const MessagesPage = () => {
  return (
    <>
      <DesktopLayout>
        <Messages />
      </DesktopLayout>
      <MobileLayout>
        <Chat />
      </MobileLayout>
    </>
  );
};

export default MessagesPage;
