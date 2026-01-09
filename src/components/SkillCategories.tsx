import React from "react";

export interface Props {
    className?: string;
    categories: Category[];
}

export interface Category {
    title: string;
    skills: Skill[];
}

interface Skill {
    name: string;
    level?: SkillLevel;
    icon?: React.ReactNode;
}

enum SkillLevel {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Expert = "Expert"
}

export default function SkillCategories(props: Props) {
    return (
        <>
            {props.categories.map(category => (
                <li className={"mb-5"}>
                    <h4 className="font-bold text-xl mt-1 mb-3">{category.title}</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mb-3 justify-center">
                        {category.skills.map(skill => (
                            <li className={"bg-gray-200 rounded-lg border border-gray-200 p-3"}>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </>
    );
}