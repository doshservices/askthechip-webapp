import {
  ProfileDesktop,
  Profile,
  DesktopLayout,
  MobileLayout,
} from "../components";

const ProfilePage = () => {
  return (
    <>
      <DesktopLayout>
        <ProfileDesktop />
      </DesktopLayout>
      <MobileLayout>
        <Profile />
      </MobileLayout>
    </>
  );
};

export default ProfilePage;
