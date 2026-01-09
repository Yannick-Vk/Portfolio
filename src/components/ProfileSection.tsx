import {cn} from "@/lib/utils.ts";
import React from "react";

export interface Props {
    className?: string;
    title: string;
    children: React.ReactNode;
    id?: string;
}

export default function ProfileSection(props: Props) {
    return (
        <>
            <div className={cn("my-5", props.className)} id={props.id}>
                <h2 className={"text-center font-bold text-3xl mb-2"}>{props.title}</h2>
                <div className={"text-center text-lg"}>
                    {props.children}
                </div>
            </div>
        </>
    );
}