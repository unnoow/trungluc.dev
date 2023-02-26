// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import codeTitle from "rehype-code-titles";
import highlight from "rehype-prism-plus";
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
    remarkPlugins: [],
    rehypePlugins: [codeTitle, highlight]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-C6ACTMWW.mjs.map
