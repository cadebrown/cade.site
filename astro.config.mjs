// astro.config.ts - Astro configuration for Near Computronium (cade.site)
//
// this file contains the global configuration for the website
//
// Links:
//   * https://astro.build/config
//
// @author: Cade Brown <me@cade.site>

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import { autolinkConfig } from './plugins/rehype-autolink-config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
//import image from "@astrojs/image";
import { imagesPlugin } from './plugins/images-plugin';

import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';

import remarkRehype from 'remark-rehype';

// these were plugins I used to use for math/markdwon extension rendering...
// they seemed unneccessary, so now all I really need is remarkRehyp
//import remarkParse from 'remark-parse';
//import remark2rehype from 'remark-rehype';
//import rehypeStringify from 'rehype-stringify';
//import rehypeHighlight from 'rehype-highlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://cade.site',
  /*integrations: [mdx(), sitemap(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],*/
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: undefined,
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
    remarkPlugins: [
      // parse/recognize math
      remarkMath,
      
      // parse/recognize definition lists (this works in conjunction to the rehype plugin with 'defListHastHandlers')
      remarkDefinitionList,
    ],

    rehypePlugins: [
      // add definition lists, parsable by remark, but as a rehype plugin
      // NOTE: I had a lot of trouble with this, so try not to mess with it
      [remarkRehype, {
        handlers: {
          ...defListHastHandlers
        }
      }],
      // add slug to headings
      rehypeSlug,
      // add links to headings
      [rehypeAutolinkHeadings, autolinkConfig],
      // apply math formatting
      [rehypeKatex, {
        displayMode: true,
      }],
    ]
  },
  vite: {
    plugins: [imagesPlugin()]
  }
});