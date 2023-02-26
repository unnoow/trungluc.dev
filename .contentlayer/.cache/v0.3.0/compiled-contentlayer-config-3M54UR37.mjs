// contentlayer.config.js
import { remarkCodeHike } from "@code-hike/mdx";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { createRequire } from "module";
import readingTime from "reading-time";
var require2 = createRequire(import.meta.url);
var theme = require2("shiki/themes/monokai.json");
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};
var Writings = defineDocumentType(() => ({
  name: "Writing",
  filePathPattern: "writings/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true },
    description: { type: "string" },
    tags: { type: "list", of: { type: "string" }, required: true },
    thumbnail: { type: "string", required: true }
  },
  computedFields
}));
var contentLayerConfig = makeSource({
  contentDirPath: "contents",
  documentTypes: [Writings],
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
    rehypePlugins: []
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-3M54UR37.mjs.map
