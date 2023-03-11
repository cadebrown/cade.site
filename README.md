# Near Computronium (cade.site)

This is my personal website, where I write about my work and personal interests. It's implemented with [Astro](https://astro.build), and meant to be minimal but opinionated. For example, the basic design philosophy is:

  * fast to load (lightweight)
  * using basic CSS, minimal JS for maximum portability
  * canonical URLs (no '.html', no convoluted paths, or trailing slashes)
  * no tracking, no ads, no analytics

You can read about it here: [cade.site/how-i-built-this-website](https://cade.site/how-i-built-this-website)

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Resources

  * [Astro Documentation](https://docs.astro.build)
  * [Astro + KaTeX: rendering math](https://ileumas.com/writing/2022/03/astro-math-katex/)
  * [accessible-astro-components](https://www.npmjs.com/package/accessible-astro-components)
  * [jampack](https://jampack.divriots.com/installation/): for optimization post processing