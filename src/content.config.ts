// 1. Import utilities from `astro:content`
import {defineCollection} from 'astro:content';

// 2. Import loader(s)
import {glob} from 'astro/loaders';

// 3. Import Zod
import {z} from 'astro/zod';

// 4. Define your collection(s)
const projects = defineCollection({
    loader: glob({pattern: "**/*.md", base: "./src/data/projects"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format",
        }),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = {projects};