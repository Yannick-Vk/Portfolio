import {cn} from "@/lib/utils.ts";

export interface Props {
    className?: string;
}

// # LinkedIn Icon Component
// Copied svg from ***lucide-react*** library because it was made deprecated.
// [Lucide Icon Source](https://lucide.dev/icons/linkedin)
export default function LinkedInIcon(props: Props) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 className={cn("lucide lucide-linkedin-icon lucide-linkedin", props.className)}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
            </svg>
        </>
    );
}