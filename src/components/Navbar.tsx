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
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem className="flex flex-row gap-3 justify-center">
                            <NavigationMenuLink>Home</NavigationMenuLink>
                            <NavigationMenuLink>About</NavigationMenuLink>
                            <NavigationMenuLink>Projects</NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
}