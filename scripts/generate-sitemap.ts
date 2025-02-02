// import { writeFile } from "fs/promises"
// import { MetadataRoute } from "next"
// import prettier from "prettier"
// import sitemap from "../app/sitemap"

// async function generateSitemap() {
//   const sitemapEntries = await sitemap()

//   const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//       xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
//       xmlns:xhtml="http://www.w3.org/1999/xhtml"
//       xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
//       xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
//       xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
// ${sitemapEntries
//   .map(
//     (entry) => `
//   <url>
//     <loc>${entry.url}</loc>
//     <lastmod>${entry.lastModified.toISOString()}</lastmod>
//     <changefreq>${entry.changeFrequency}</changefreq>
//     <priority>${entry.priority}</priority>
//     ${
//       entry.images
//         ? entry.images
//             .map(
//               (image) => `
//       <image:image>
//         <image:loc>${image.loc}</image:loc>
//         <image:title>${image.title}</image:title>
//       </image:image>`,
//             )
//             .join("")
//         : ""
//     }
//   </url>
// `,
//   )
//   .join("")}
// </urlset>`

//   const formattedXml = await prettier.format(xmlContent, { parser: "xml" })
//   await writeFile("./public/sitemap.xml", formattedXml)
//   console.log("Sitemap generated successfully!")
// }

// generateSitemap().catch(console.error)

import { writeFile } from "fs/promises"
import { MetadataRoute } from "next"
import prettier from "prettier"
import sitemap from "../app/sitemap"

async function generateSitemap() {
  const sitemapEntries = await sitemap()

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml"
          xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
          xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${sitemapEntries
    .map(
      (entry) => {
        const sanitizedUrl = entry.url.replace(/<\/?script[^>]*>/g, "");  // Remove script tags if any
        return `
    <url>
      <loc>${sanitizedUrl}</loc>
      <lastmod>${entry.lastModified.toISOString()}</lastmod>
      <changefreq>${entry.changeFrequency}</changefreq>
      <priority>${entry.priority}</priority>
      ${
        entry.images
          ? entry.images
              .map(
                (image) => `
        <image:image>
          <image:loc>${image.loc}</image:loc>
          <image:title>${image.title}</image:title>
        </image:image>`
              )
              .join("")
          : ""
      }
    </url>
    `;
    })
    .join("")}
  </urlset>`;
  
  // Format XML using Prettier
  const formattedXml = await prettier.format(xmlContent, {
    parser: "xml",
    // Explicitly preserve the first line with the XML declaration
    printWidth: 90,
    proseWrap: "always",
  })

  await writeFile("./public/sitemap.xml", formattedXml)
  console.log("Sitemap generated successfully!")
}

generateSitemap().catch(console.error)
