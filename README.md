# cade.site (Near Computronium)

This is the source code for my personal website and blog, Near Computronium ([cade.site](https://cade.site)), which is built with [Astro](https://astro.build). It's intended to be very fast, [highly semantic](https://web.dev/learn/html/semantic-html/), [highly accessible](https://web.dev/accessible/), and strongly opinionated as a simple design.

Feel free to copy, modify, and use it for your own website.

You can read about how I build it [here](https://cade.site/how-i-built-this-website). This README describes the project structure and setup instructions.

## Links

  * [Near Computronium (cade.site)](https://cade.site): this website, hosted with GitHub Pages
  * [Astro Documentation](https://docs.astro.build): site generator used
    * [Astro Icons](https://github.com/natemoo-re/astro-icon#readme): icon package, uses local icons in `src/icons`
    * [Astro + KaTeX: rendering math equations](https://ileumas.com/writing/2022/03/astro-math-katex/) - for math equations in `$$` blocks
    * [Astro: accessible-astro-components](https://www.npmjs.com/package/accessible-astro-components)
  * [Adding a Copy Code Button in Astro](https://timneubauer.dev/blog/copy-code-button-in-astro/)
  * [Holy grail layout](https://web.dev/patterns/layout/holy-grail/)
  * [Jam Icons (free SVGs)](https://jam-icons.com/)
  * [HTML Element Reference](https://www.w3schools.com/tags/ref_byfunc.asp)

## Setup

To develop locally, download the [repository](https://github.com/cadebrown/cade.site) and install the requirements:

  * Node.js/npm: [how to install Node.js/npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Then, install the dependencies of this project:

```shell
$ npm install
```

Now, you can run the development server and host on your local machine:

```shell
$ npm run dev
  🚀  astro  v2.1.2 started in 377ms
  
  ┃ Local    http://localhost:3000/
  ┃ Network  use --host to expose
```

By default, the site is only visible on `localhost`. To make it visible on your local network, use the `--host` flag (note: make sure to use the extra `--` to seperate the arguments, i.e. `-- --host`, not just `--host`):

```shell
$ npm run dev -- --host
  🚀  astro  v2.1.2 started in 289ms
  
  ┃ Local    http://localhost:3000/
  ┃ Network  http://10.0.0.106:3000/
             http://10.0.0.138:3000/
```

### Commands

You can run the following commands from the root of the project, in a shell/terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro -- ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


### Project Structure

This project largely follows the [Astro project structure](https://docs.astro.build/en/core-concepts/project-structure/), meaning that the following files/folders are special:

```text
├── plugins/           # custom plugins
├── public/            # static assets, copied verbatim
├── src/               # source code for the site
│   ├── components/        # reusable components
│   ├── layouts/           # reusable layouts
│   ├── content/           # collections of content
│   └── pages/             # actual pages/routes
├── astro.config.ts        # Astro configuration
├── package.json           # npm package configuration
└── tsconfig.json
```

Astro looks for `.astro`/`.mdx`/`.md` files the in `src/pages/` directory, and creates a URL route for each one. For example, `src/pages/links.mdx` becomes `your.url/links`. It also supports generic/variable endpoints, like `src/pages/[var].astro` which becomes `your.url/[var]` (i.e. in my site, `src/pages/[postslug].astro` becomes `cade.site/[postslug]`).

Blog posts are organized as a [Astro content collection](https://docs.astro.build/en/guides/content-collections/) in `src/content/blog/[postslug].mdx`. Then, the `src/pages/[postslug].mdx` contains the code for generating/rendering pages for each post. 

Every page can use the re-usable layouts and components in `src/layouts/` and `src/components/`, respectively. And, they can refer to static assets in the `public/` directory. However, it is recommended to use `src/components/MyImage.astro` and other `MyCOMPONENT.astro` files, which use the `import.meta.glob` Astro API to build optimized images and other assets at build time. 

I also have custom plugins in `plugins/`, which are written in TypeScript. 

To edit the site configuration, see the `astro.config.ts` file.

#### Static Assets (public/)

This section documents how I organize my static assets that live in `public/`. Obviously, you can organize them however you want, but these are best practices.

Directly in `public/`, I store the favicon and all the generated formats (you can generate them with [realfavicongenerator.net](https://realfavicongenerator.net/), or a similar tool). I also store `CNAME` here, which is used by GitHub Pages to set the custom domain (this is important, because by default GitHub pages puts a `CNAME` file in the root of your project).

Within `public/docs/`, I store various documents (for example, my resume and CV).

Within `public/slides/`, I store the slide decks for talks I've given.

Within `public/images/`, I store all images. Within this directory, I have subdirectories for each image type (e.g. `public/images/avatars/`, `public/images/blog/`, `public/images/projects/`, etc.).


#### Components (src/components/)

This is a rough overview of the components and how to use them. Generally, I've written a few kind of compoents:

  * content wrapper components (`src/components/MyCOMPNAME.astro`), that provide site-specified themed elements. for example, `MyImage` and `MyFigure` makes HTML figures easier to generate, and uses sane defaults as far as sizing goes (it also uses static image optimization, when possible)
  * global utility components (`src/components/GlobalCOMPNAME.astro`), that provide utilities and bells and whistles and use some sort of global state, meaning they should only be included once per page (i.e. not re-usable like most). For example, `GlobalCodeCopy.astro` installs a JavaScript hook to add `Copy Code` buttons to all code blocks when the page runs, but it only needs to be included once per page.
  * formatting components (`src/components/FormatCOMPNAME.astro`), that provide standardized formatting for reusable and consistent aesthetics. For example, `FormatDate.astro` takes a date (or, defaults to the current date) and formats it in a consistent way (and, makes it into an HTML `<time>` element)

#### Misc Files/Folders

I use the [Astro icons](https://github.com/natemoo-re/astro-icon#readme) package, which expects SVGs in `src/icons`. For example, see `src/icons/cade-social` for social media icons. You can create new directories and make new local packs.
