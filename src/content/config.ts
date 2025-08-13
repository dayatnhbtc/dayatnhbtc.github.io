import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  // Stable, SEO-friendly slugs: YYYY-MM-DD-title
  slug: ({ defaultSlug, data }) => {
    const custom = (data as any).slug as string | undefined;
    if (custom) return custom.toLowerCase();
    const d = typeof (data as any).date === 'string' ? new Date((data as any).date) : (data as any).date as Date | undefined;
    const iso = d ? d.toISOString().slice(0, 10) : undefined;
    return iso ? `${iso}-${defaultSlug}` : defaultSlug;
  },
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Accept either a native Date or an ISO string for flexibility
    date: z.union([z.date(), z.string()]),
    draft: z.boolean().optional().default(false),
  }).passthrough(),
});

export const collections = { posts };
