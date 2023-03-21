import { Chat, HomepageLayout, Messages, MobileLayout } from "../components";

const MessagesPage = () => {
  return (
    <>
    <HomepageLayout>
      <Messages />
    </HomepageLayout>
    <MobileLayout>
      <Chat />
    </MobileLayout>
    </>
  );
};

export default MessagesPage;
