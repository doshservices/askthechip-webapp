import { useState, useEffect } from "react"
export const checkWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const resize = () => setWindowWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
        }
    })
    return windowWidth;
}