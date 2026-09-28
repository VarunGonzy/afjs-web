import type { MetadataRoute } from "next";

// Verified search engines and AI assistants are explicitly welcome.
// Abusive/attack traffic is handled at the host firewall (Hostinger), not here.
const allowedBots = [
  "Googlebot", "Googlebot-Image", "Google-Extended", "GoogleOther", "Bingbot", "DuckDuckBot", "Applebot",
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User", "CCBot", "Meta-ExternalAgent", "Amazonbot", "cohere-ai", "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...allowedBots.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: "https://joyfullsmiles.org/sitemap.xml",
    host: "https://joyfullsmiles.org",
  };
}
