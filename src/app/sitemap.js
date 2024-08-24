export default function sitemap() {
  return [
    {
      url: `${process.env.BASE_URL}`,
      priority: 1,
    },
    {
      url: `${process.env.BASE_URL}about`,
      priority: 0.7,
    },
    {
      url: `${process.env.BASE_URL}newsleter`,
      priority: 0.9,
      changeFrequency: "yearly",
    },
    {
      url: `${process.env.BASE_URL}schools`,
      priority: 0.9,
    },
    {
      url: `${process.env.BASE_URL}contact`,
      priority: 0.8,
    },
  ];
}
