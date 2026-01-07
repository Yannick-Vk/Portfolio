import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function CombineClassNames(...classes: (string | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}