import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ThemeSwitcher from "./ThemeSwitcher"
import MobileNav from "@/components/MobileNav";
import {Github} from "@/lib/Contact.ts";

export interface NavbarLink {
    link: string;
    label: string;
    target?: string;
}

export default function Navbar() {
    const links: NavbarLink[] = [
        {link: "/", label: "Home"},
        {link: "/#about", label: "About"},
        {link: "/#projects", label: "Projects"},
        {link: Github, label: "GitHub", target: "_blank"},
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
                                {links.map((link) => (
                                    <NavigationMenuLink
                                        key={link.link}
                                        href={link.link}
                                        target={link.target ?? "_self"}
                                        className="px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        {link.label}
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