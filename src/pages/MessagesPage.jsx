import { HomepageLayout, MessageMobile, Messages, MobileLayout } from "../components";

const MessagesPage = () => {
  return (
    <>
    <HomepageLayout>
      <Messages />
    </HomepageLayout>
    <MobileLayout>
      <MessageMobile />
    </MobileLayout>
    </>
  );
};

export default MessagesPage;
