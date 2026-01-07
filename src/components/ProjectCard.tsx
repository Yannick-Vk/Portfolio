import type {Project} from "@/Types.ts";
import {ArrowRightFromLineIcon} from "lucide-react"

export interface Props {
    project: Project;
}

export default function ProjectCard(props: Props) {
    return (
        <>
            <a
                href={`/projects/${props.project.slug}`}
                className="block border border-gray-300 dark:border-slate-700 rounded-lg bg-accent hover:bg-gray-200 dark:hover:bg-slate-700 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
            >
                <h2 className="text-2xl font-bold mb-2">{props.project.title}</h2>
                <p className="">{props.project.description}</p>

                <div className={"flex flex-row flex-wrap gap-3 mt-3"}>
                    {props.project.tags.map((tag) => (
                        <span key={tag}
                              className="bg-fuchsia-200 dark:bg-fuchsia-800 text-gray-800 dark:text-slate-300 text-xs px-2 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className={"flex flex-row flex-wrap justify-between gap-3 mt-3"}>
                    <p className="text-sm text-gray-500">
                        Created on: {props.project.created_at}
                    </p>
                    <span className="text-primary group-hover:underline flex items-center">
                    Go to details <ArrowRightFromLineIcon className="inline ml-1"/>
                </span>
                </div>
            </a>
        </>
    );
}