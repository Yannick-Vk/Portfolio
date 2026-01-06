export interface Props {
}

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Navbar(props: Props) {
    return (
        <>
            <nav className="flex justify-center w-full py-4 bg-slate-200">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex flex-row gap-3 justify-center">
                            <NavigationMenuLink>
                                <a href="/">Home</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <a href="/about">About</a>
                            </NavigationMenuLink>
                            <NavigationMenuLink>
                                <a href="/projects">Projects</a>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </>
    );
}