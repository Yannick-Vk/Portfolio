import React from "react";
import {MoonIcon, SunIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

export interface Props {
    className?: string;
}

type ThemeType = "light" | "dark";

export default function ThemeSwitcher(props: Props) {

    const [theme, setTheme] = React.useState<ThemeType>("light");

    React.useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as ThemeType | null;
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (savedTheme) {
            setTheme(savedTheme);
        } else if (prefersDark) {
            setTheme("dark");
        }
    }, []);

    React.useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    }

    return (
        <>
            <Button id="themeToggle" onClick={toggleTheme} className={props.className ?? ""}>
                {theme === "light" ? <MoonIcon/> : <SunIcon/>}
            </Button>
        </>
    );
}