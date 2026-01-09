import React from "react";

export interface Props {
    className?: string;
    categories: Category[];
    iconMap: { [key: string]: React.ComponentType<{ className?: string; size?: number }> };
}

export interface Category {
    title: string;
    skills: Skill[];
}

export interface Skill {
    name: string;
    level?: SkillLevel;
    iconId?: string;
}

enum SkillLevel {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced",
    Expert = "Expert"
}

const iconSize: number = 32;
export default function SkillCategories(props: Props) {
    return (
        <>
            {props.categories.map(category => (
                <li className={"mb-5"} key={category.title}>
                    <h4 className="font-bold text-xl mt-1 mb-3">{category.title}</h4>
                    <ul className="flex flex-row flex-wrap gap-3 mb-3 justify-center">
                        {category.skills.map(skill => {
                            const IconComponent = skill.iconId ? props.iconMap[skill.iconId] : null;
                            return (
                                <li className={"flex items-center gap-2 bg-gray-200 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 p-3"}
                                    key={skill.name}>
                                    <span>{skill.name}</span>
                                    {IconComponent && <IconComponent size={iconSize}/>}
                                </li>
                            );
                        })}
                    </ul>
                </li>
            ))}
        </>
    );
}