import { useState } from 'react';
import { ParsedSite } from '../types';
import { parse } from 'valibot';
import { SiteSchema } from '../schema/site-schema';
import axios from 'axios';

export const useSites = () => {
  const [parsedSites, setParsedSites] = useState<ParsedSite[]>([]);

  const getSites = async () => {
    const { data } = await axios(
      'https://load.neuronweb.online/domain/allNotActive'
    );
    const result = parse(SiteSchema, data);
    if (result) {
      const normalizedData = result.data.map((site) => {
        if (site.seo) {
          site.seo.value = JSON.parse(site.seo.value);
        }

        if (!site.url.includes('http')) {
          site.url = `https://${site.url}`;
        }
        return site as ParsedSite;
      });
      setParsedSites(
        normalizedData.filter(
          (site) => site.seo && +site.seo?.value.status === 1
        )
      );
    }
  };

  return {
    parsedSites,
    getSites,
  };
};
