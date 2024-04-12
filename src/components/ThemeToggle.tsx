import { useEffect, useState } from "react";

/**
 * The function `ThemeToggle` toggles between dark and light themes in a TypeScript React application
 * based on the user's preference stored in local storage.
 * @returns The `ThemeToggle` component is being returned. It is a button that toggles between dark and
 * light themes when clicked. The button text changes between "Dark" and "Light" based on the current
 * theme state. The component also checks for the theme setting in localStorage and updates the theme
 * accordingly.
 */
const ThemeToggle = () => {
    // const blipTheme = localStorage.getItem("blip-theme");
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);


    const switchTheme = () => {
        const newTheme = !darkTheme;
        setDarkTheme(newTheme)
        setIsChecked(newTheme)
        window.localStorage.setItem("blip-theme", `${!darkTheme}`);
    }

    // check if the item has been set on localstorage before
    const checkTheme = () => {
        if ("blip-theme" in localStorage && localStorage.getItem("blip-theme") === "true") {
            setDarkTheme(true)
            setIsChecked(true)
        }
    }

    useEffect(() => {
        (darkTheme === false ? document.documentElement.classList.remove("dark") : document.documentElement.classList.add("dark"))
    }, [darkTheme])


    useEffect(() => {
        checkTheme()
    }, [])

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <>
            {/* button for tablet devices and other smaller devices */}
            <button
                onClick={switchTheme}
                className="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5 border-gray-800 md:hidden"
            >
                {!darkTheme ?
                    <svg className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    :
                    <svg className=" w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                }
            </button>

            {/* button for larger devices */}
            <div className="flex space-x-2 items-center max-md:hidden">
                <div className="text-gray-900 dark:text-gray-600 dark:font-normal font-semibold">Light</div>
                <input type="checkbox" id="toggle" className="hidden" defaultChecked={isChecked} />
                <label htmlFor="toggle" className="cursor-pointer">
                    <div
                        onClick={switchTheme}
                        className="bg-[#8d8d8d] flex items-center p-1 rounded-md w-[45px]"
                    >
                        <div className="toggle-dot"></div>
                    </div>
                </label>
                <div className="text-gray-500 dark:text-gray-100 dark:font-semibold">Dark</div>
            </div>
        </>
    );
}

export default ThemeToggle;