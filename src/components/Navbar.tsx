export interface Props {
}

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ThemeSwitcher from "./ThemeSwitcher"
import MobileNav from "@/components/MobileNav";

export default function Navbar(props: Props) {
    const links = [
        {link: "/", label: "Home"},
        {link: "/about", label: "About"},
        {link: "/projects", label: "Projects"},
    ];

    return (
        <>
            <nav className="py-4 bg-accent flex flex-row justify-between relative items-center">
                <div className="sm:hidden">
                    <MobileNav links={links}/>
                </div>
                <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
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
                </div>
                <div className="ml-auto">
                    <ThemeSwitcher className={"mr-5"}/>
                </div>
            </nav>

        </>
    );
}