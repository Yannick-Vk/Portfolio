import type {Project} from "@/Types.ts";
import {Button} from "@/components/ui/button.tsx";
import {ArrowRightFromLineIcon} from "lucide-react"

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
                <Button className={"mt-3 bg-fuchsia-400"}>
                    <a href={`/projects/${props.project.slug}`}>Go to details
                        <ArrowRightFromLineIcon className="inline ml-1"/>
                    </a>
                </Button>

                <div className={"flex flex-row gap-3"}>
                    {props.project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="inline-block bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-slate-300 text-xs px-2 py-1 rounded-full mt-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-sm text-gray-500 mt-3">
                    Created on: {props.project.created_at}
                </p>
            </div>
        </>
    );
}