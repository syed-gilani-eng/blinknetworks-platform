// Astro Content Layer API: schema-validated Markdown articles for /insights/.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "Managed IT & Help Desk",
      "Microsoft 365 & Endpoint Management",
      "Cybersecurity",
      "Cloud & Infrastructure",
      "Network Services",
      "Backup & Business Continuity",
    ]),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string(),
    imageAlt: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().int().positive(),
  }),
});

export const collections = { insights };
