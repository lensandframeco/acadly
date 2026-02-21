import type { MetadataRoute } from "next";

const BASE_URL = "https://acadly.com";

const blogSlugs = [
  "future-of-classroom-attendance",
  "boost-student-engagement",
  "hybrid-classroom-best-practices",
  "lms-integration-guide",
  "ferpa-compliance-attendance",
  "reduce-absenteeism",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/acadly",
    "/here",
    "/engage",
    "/features",
    "/pricing",
    "/about",
    "/blog",
    "/support",
    "/demo",
    "/sign-up",
    "/login",
    "/webinars",
    "/privacy",
    "/terms",
    "/here/privacy",
    "/here/terms",
    "/accessibility",
    "/use-cases/in-person",
    "/use-cases/online",
    "/use-cases/hybrid",
    "/use-cases/attendance",
    "/use-cases/engagement",
    "/use-cases/lms",
  ];

  const pages: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/use-cases") ? 0.7 : 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...pages, ...blogPages];
}
