import {Button} from "@/components/ui/button.tsx";
import React from "react";

export interface Props {
}

type ThemeType = "light" | "dark";

export default function ThemeSwitcher(props: Props) {

    const loadTheme = () => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage?.getItem("theme") as ThemeType;
            return savedTheme || "light";
        }
        return "light";
    }

    const [theme, setTheme] = React.useState<ThemeType>(loadTheme);

    const toggleTheme = () => {
        // Logic to toggle theme goes here
        console.log("Changing theme from", theme);
        switchMode();
    }

    const switchMode = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage?.setItem("theme", newTheme);
        if (theme === 'light') {
            document?.documentElement.classList.remove('dark');
        } else {
            document?.documentElement.classList.add('dark');
        }
    }

    return (
        <>
            <Button id="themeToggle" aria-label="Toggle theme" onClick={toggleTheme}>
                Toggle Theme
            </Button>
        </>
    );
}