import React from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export interface Props {
    className?: string;
}

type ThemeType = "light" | "dark";

export default function ThemeSwitcher(props: Props) {
    // State to hold the current theme, default is light.
    const [theme, setTheme] = React.useState<ThemeType>("light");

    // Effect to load the saved theme from localStorage or use system preference on mount.
    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeType | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // If a theme is saved in localStorage, use it. Otherwise, use the system preference.
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme("dark");
        }
    }, []);

    // Effect to apply the theme to the document and save it in localStorage.
    React.useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    // Function to toggle between light and dark themes.
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <Button id="themeToggle" onClick={toggleTheme}
                    className={"bg-slate-200 text-indigo-900 hover:bg-slate-800 hover:text-fuchsia-200 dark:bg-zinc-800 dark:text-amber-300 dark:hover:text-orange-300 dark:hover:bg-zinc-200 transition-colors duration-300 "
                        + (props.className ?? " ")}>
                {theme === "light" ? <MoonIcon/> : <SunIcon/>}
            </Button>
        </>
    );
}