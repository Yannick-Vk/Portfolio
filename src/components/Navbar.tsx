export interface Props {}

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Navbar(props: Props) {
    return (
        <>
            <nav className="flex justify-center w-full py-4 bg-slate-200">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="flex flex-row gap-3 justify-center">
                                <NavigationMenuLink>Home</NavigationMenuLink>
                                <NavigationMenuLink>About</NavigationMenuLink>
                                <NavigationMenuLink>Projects</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
        </>
    );
}