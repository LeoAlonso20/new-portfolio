import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      summary: z.string(),
      date: z.coerce.date(),
      tags: z.array(z.string()),
      cover: image(),
      images: z.array(image()).optional().default([]),
      repoUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),
      featured: z.boolean().default(false),
      locale: z.enum(["en", "es"]),
      order: z.number().default(0),
    }),
});

export const collections = { projects };
