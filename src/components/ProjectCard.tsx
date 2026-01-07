import type {Project} from "@/Types.ts";

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
                <a className={"text-indigo-700 dark:text-cyan-200 underline"} href={props.project.link} target="_blank">Link
                    to the github page</a>
                <p className="text-sm text-gray-500 mt-3">
                    Created on: {props.project.created_at}
                </p>
            </div>
        </>
    );
}