import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const writing = defineCollection({
	loader: glob({
		base: "./src/content/writing",
		pattern: "**/*.md",
	}),
	schema: z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	category: z.string(),
	tags: z.array(z.string()).default([]),
}),
});

export const collections = {
	writing,
};
