import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		problem: z.string(),
		role: z.string(),
		decisions: z.array(
			z.object({
				title: z.string(),
				why: z.string(),
			}),
		),
		stack: z.array(z.string()),
		status: z.enum(["in-progress", "delivered"]),
		links: z.strictObject({
			repo: z.url().optional(),
			spec: z.url().optional(),
			live: z.url().optional(),
		}),
	}),
});

export const collections = { projects };
