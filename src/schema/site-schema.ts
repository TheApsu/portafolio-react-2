import { object, array, number, string, optional } from 'valibot';

export const SiteSchema = object({
  data: array(
    object({
      id: number(),
      name: string(),
      url: string(),
      logo: string(),
      seo: optional(
        object({
          value: string(),
        })
      ),
    })
  ),
});
