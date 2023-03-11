import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { autolinkConfig } from './plugins/rehype-autolink-config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://cade.site',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'slack-dark',
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true
    },
    remarkPlugins: [remarkMath,
      remarkDefinitionList,
      [remarkRehype, {
        handlers: {
          ...defListHastHandlers,
        }
      }],
    ],

    rehypePlugins: [rehypeSlug,
      // This adds links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
      // Tweak GFM task list syntax
      //rehypeTasklistEnhancer(),
      // Translates the autolink headings anchors
      //rehypei18nAutolinkHeadings(),
      [rehypeKatex, {
        displayMode: true
      }]]
  }
});