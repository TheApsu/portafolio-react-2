import { Output } from 'valibot';
import { SiteSchema } from '../schema/site-schema';

export type Site = Output<typeof SiteSchema>;
export type ParsedSite = {
  id: number;
  name: string;
  url: string;
  logo: string;
  seo?:
    | {
        value: {
          status: number;
        };
      }
    | undefined;
};
