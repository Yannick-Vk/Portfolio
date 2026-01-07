import type {Project} from "@/Types.ts";
import {Button} from "@/components/ui/button.tsx";

export interface Props {
    project: Project;
}

export default function ProjectCard(props: Props) {
    return (
        <>
            <div
                className="border border-gray-300 dark:border-slate-700 rounded-lg bg-accent p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-2">{props.project.title}</h2>
                <p className="">{props.project.description}</p>
                <Button className={"my-3 bg-fuchsia-400"}>
                    <a href={`/projects/${props.project.slug}`}>Go to details</a>
                </Button>
                <p className="text-sm text-gray-500 mt-3">
                    Created on: {props.project.created_at}
                </p>
            </div>
        </>
    );
}