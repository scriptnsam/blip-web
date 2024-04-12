import { useEffect, useState } from "react"

interface Props {
    h: number,
    lightImg: string,
    darkImg: string
}

const SvgSwitch: React.FC<Props> = ({ h, darkImg, lightImg }) => {
    // check if darkmode is activated from local storage
    const [theme, setTheme] = useState<boolean>(false)
    const [reload, setReload] = useState<boolean>(false)

    useEffect(() => {
        const darkMode = window.localStorage.getItem("blip-theme")

        if (darkMode === "false") {
            setTheme(false)
        } else {
            setTheme(true)
        }
    }, [reload])


    setInterval(() => {
        setReload(!reload)
    }, 1000)

    return (
        <div className={`max-md:hidden bg-center w-[100%]`} style={{ height: `${h}px` }}>
            {theme === true ? <img src={darkImg} alt="dark-mode-image" className="w-[100%] h-[100%] " />
                :
                <img src={lightImg} alt="light-mode-image" className="w-[100%] h-[100%] " />
            }
        </div>
    )
}

export default SvgSwitch