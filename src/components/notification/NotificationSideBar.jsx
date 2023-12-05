import { useWindowWidth } from "../../utils/windowWidth";

export const NotificationSIdeBar = () => {
    const width = useWindowWidth()
    return (
        <>
            {width > 800 ?
                <aside className="notification__sidebar">Notifications</aside>
                : null
            }
        </>
    )
}