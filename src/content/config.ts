import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.string(),
    image: z.string(),
    category: z.string(),
    excerpt: z.string(),
  }),
});

export const collections = {
  articles,
};
