export interface Props {
}

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ThemeSwitcher from "./ThemeSwitcher"

export default function Navbar(props: Props) {
    const links = [
        {link: "/", label: "Home"},
        {link: "/about", label: "About"},
        {link: "/projects", label: "Projects"},
    ];

    return (
        <>
            <nav className="py-4 bg-accent">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex flex-row gap-3 justify-center">
                            {links.map(({link, label}) => (
                                <NavigationMenuLink
                                    key={link}
                                    href={link}
                                    className="px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {label}
                                </NavigationMenuLink>
                            ))}
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <ThemeSwitcher/>
        </>
    );
}