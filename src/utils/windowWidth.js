import { useState, useEffect } from "react";

export const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const resize = () => setWindowWidth(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            resize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return windowWidth;
};
