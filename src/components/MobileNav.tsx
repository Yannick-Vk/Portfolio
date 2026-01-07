import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet"
import {Menu} from 'lucide-react';
import {useState} from "react";
import type {NavbarLink} from "@/components/Navbar.tsx";

interface Props {
    links: NavbarLink[];
}

export default function MobileNav(props: Props) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Open mobile navigation" className="ml-5"><Menu/></SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription className="flex flex-col">
                        {props.links.map(({link, label}) => (
                            <a
                                key={link}
                                href={link}
                                className="px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => setOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}
