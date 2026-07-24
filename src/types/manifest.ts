import { z } from "zod";

export const ProjectSchema = z.object({
  slug: z.string(),
  name: z.string(),
  tagline: z.string(),
  category: z.enum(["static", "full-stack", "terminal"]),
  subdomain: z.string(),
  repo: z.string(),
  branch: z.optional(z.string()),
  tags: z.array(z.string()),
  featured: z.optional(z.boolean()),
  date: z.iso.date(),
  media: z
    .object({
      poster: z.url(),
      video: z.url(),
    })
    .optional(),
});

export type Project = z.infer<typeof ProjectSchema>;
