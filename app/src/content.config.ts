// Astro Content Layer API: schema-validated Markdown articles for /insights/.
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const insightsImagePrefix = "/images/insights/";
const insightsImageExtensionPattern = /\.(?:webp|png|jpe?g)$/i;

const requiredTrimmedString = (fieldName: string) =>
  z
    .string({
      required_error: `${fieldName} is required.`,
      invalid_type_error: `${fieldName} must be a string.`,
    })
    .trim()
    .min(1, `${fieldName} is required.`);

const coercedDate = (fieldName: string) =>
  z.coerce.date().refine((value) => !Number.isNaN(value.getTime()), {
    message: `${fieldName} must be a valid date.`,
  });

const isValidInsightsImagePath = (value: string) => {
  if (!value.startsWith(insightsImagePrefix)) {
    return false;
  }

  if (value.startsWith("//") || value.includes("://") || value.includes("?") || value.includes("#")) {
    return false;
  }

  const relativePath = value.slice(insightsImagePrefix.length);
  if (!relativePath) {
    return false;
  }

  const segments = relativePath.split("/");
  if (segments.some((segment) => !segment || segment === "." || segment === "..")) {
    return false;
  }

  const filename = segments[segments.length - 1] ?? "";
  return insightsImageExtensionPattern.test(filename);
};

const insights = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/insights" }),
  schema: z
    .object({
      title: requiredTrimmedString("title"),
      description: requiredTrimmedString("description"),
      category: z.enum([
        "Managed IT & Help Desk",
        "Microsoft 365 & Endpoint Management",
        "Cybersecurity",
        "Cloud & Infrastructure",
        "Network Services",
        "Backup & Business Continuity",
      ]),
      publishedDate: coercedDate("publishedDate"),
      updatedDate: coercedDate("updatedDate").optional(),
      image: requiredTrimmedString("image").refine(
        isValidInsightsImagePath,
        {
          message:
            "image must be a site-relative path under /images/insights/ with a valid filename, no query or fragment, no traversal segments, and a supported extension (.webp, .png, .jpg, or .jpeg).",
        }
      ),
      imageAlt: requiredTrimmedString("imageAlt"),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      order: z
        .number({
          required_error: "order is required.",
          invalid_type_error: "order must be a number.",
        })
        .int("order must be a whole number.")
        .positive("order must be a positive integer."),
    })
    .superRefine(({ publishedDate, updatedDate }, context) => {
      if (updatedDate && updatedDate.getTime() < publishedDate.getTime()) {
        context.addIssue({
          code: "custom",
          message: "updatedDate must be on or after publishedDate.",
          path: ["updatedDate"],
        });
      }
    }),
});

export const collections = { insights };
