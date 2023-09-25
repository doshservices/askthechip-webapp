import {
    ProfileDesktop,
    Profile,
    DesktopLayout,
    MobileLayout,
} from "../components";

const UserProfile = () => {
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

export default UserProfile;