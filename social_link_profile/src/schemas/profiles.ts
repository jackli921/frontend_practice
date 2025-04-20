import { z } from "zod";

export const SocialLinkSchema = z.object({
    platform: z.string(),
    url: z.string().url(),

})

export const ProfileSchema = z.object({
  id: z.number(),
  profileUrl: z.string().url(),
  fullName: z.string(),
  city: z.string(),
  country: z.string(),
  bio: z.string(),
  socialLinks: z.array(SocialLinkSchema),
});

export type Profiel = z.infer<typeof ProfileSchema>;