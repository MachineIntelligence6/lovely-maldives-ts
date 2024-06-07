import { z } from 'zod'

export const socialLinkSectionSchema = z.object({
  title: z.string({ required_error: 'This field is required.' }),
  socialMedia: z.string({ required_error: 'This field is required.' }),
  link: z.string({ required_error: 'This field is required.' }),
})

export type SocialLinkSectionSchema = z.infer<typeof socialLinkSectionSchema>
