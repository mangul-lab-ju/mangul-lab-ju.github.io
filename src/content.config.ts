import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    type: z.enum(['Journal Article', 'Conference Paper', 'Preprint', 'Book Chapter']),
    journal: z.string(),
    doi: z.string().optional(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    pdf: z.string().optional(),
    image: z.string().optional()
  })
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default("Mangul Lab"),
    description: z.string(),
    thumbnail: z.string().optional(),
    highlight: z.boolean().default(false)
  })
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string())
  })
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string().optional(),
    orcid: z.string().optional(),
    googleScholar: z.string().optional(),
    github: z.string().optional(),
    cv: z.string().optional(),
    interests: z.array(z.string()).optional()
  })
});

const alumni = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/alumni" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    period: z.string(),
    currentAffiliation: z.string().optional()
  })
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

const education = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/education" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']),
    link: z.string(),
    topic: z.string()
  })
});

const software = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/software" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    github: z.string(),
    status: z.enum(['Active', 'Archived']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

const funding = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/funding" }),
  schema: z.object({
    name: z.string(),
    institution: z.string(),
    period: z.string(),
    active: z.boolean()
  })
});

const gallery = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gallery" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string(),
    images: z.array(z.string())
  })
});

export const collections = {
  research,
  news,
  blog,
  team,
  alumni,
  resources,
  education,
  software,
  funding,
  gallery
};
