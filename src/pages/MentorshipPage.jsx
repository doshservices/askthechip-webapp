import { HomepageLayout, Mentorship, MobileLayout } from "../components";

const MessagesPage = () => {
  return (
    <>
    <HomepageLayout>
      <Mentorship />
    </HomepageLayout>
    <MobileLayout>
      <Mentorship />
    </MobileLayout>
    </>
  );
};

export default MessagesPage;
