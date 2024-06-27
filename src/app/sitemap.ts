import { MetadataRoute } from 'next';

const BaseUrl = process.env.DOMAIN;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${BaseUrl}/`,
    },
    {
      url: `${BaseUrl}/about`,
    },
    {
      url: `${BaseUrl}/contact`,
    },
    {
      url: `${BaseUrl}/portfolio`,
    },
    {
      url: `${BaseUrl}/services`,
    },
    {
      url: `${BaseUrl}/teams`,
    },
  ];
}
