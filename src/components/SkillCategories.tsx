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
                <li className={"mb-5"} key={category.title}>
                    <h4 className="font-bold text-xl mt-1 mb-3">{category.title}</h4>
                    <ul className="flex flex-row flex-wrap gap-3 mb-3 justify-center">
                        {category.skills.map(skill => (
                            <li className={"bg-gray-200 rounded-lg border border-gray-200 p-3"} key={skill.name}>
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </>
    );
}