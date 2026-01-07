import type {Project} from "@/Types.ts";

export interface Props {
    project: Project;
}

export default function ProjectCard(props: Props) {
    return (
        <>
            <div
                className="border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-2">{props.project.title}</h2>
                <p className="text-gray-700 mb-4">{props.project.description}</p>
                <p className="text-sm text-gray-500">
                    Created on: {props.project.created_at}
                </p>
            </div>
        </>
    );
}