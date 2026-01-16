export default function SchemaMarkup() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Appscrip Product Listing Page Task",
    url: "https://your-netlify-url.netlify.app",
    description:
      "A Product Listing Page built using Next.js with Server Side Rendering and SEO best practices for the Appscrip frontend assessment.",
    author: {
      "@type": "Person",
      name: "P.S. Mohammed Sowban",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
    />
  );
}
