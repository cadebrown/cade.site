// src/consts.ts - site-wide global constants, data, and helper functions

// the site's static assets paths
// SEE: https://vkbansal.me/blog/resolving-images-astro-md/
export const ASSETS = import.meta.glob([
    // all images
    '../public/images/*',
    '../public/images/*/*',
    '../public/images/*/*/*',
    '../public/images/*/*/*/*',

    // all site asset
    //'../public/assets/*',
    //'../public/assets/*/*',

    // some assets are stored in the root directly
    //'../public/*',
], { 
    import: 'default' 
})


// attempt to import and asset and return a local handle, if it exists within /public. otherwise, it will return 'undefined' (which signals the caller should treat it like an arbitrary URL to an external resource)
// NOTE: 'src' should start with a leading slash, but not a '/public' prefix (since '/public' disappears at runtime)
// for example, if a file is stored in '/public/images/thumb.png', you should call 'getAsset("/images/thumb.png")'
export const getAsset = async (src: string) => {
    // construct a key to the 'ASSETS' variable, since it is imported at build time and does need to include '/public' in the path (specifically, '../public' since we are in 'src/'
    const key = "../public" + src
    if (key in ASSETS) {
        // found the asset, so call the promise and return the result
        return (await ASSETS[key]())
    }
    
    // not a valid asset, so signal it
    return undefined
}

// helper function to format a date object into a string, using the site's default format
export const formatDate = (value: Date) => {
    // return iso8601, just YYYY-MM-DD
    return value.toISOString().split('T')[0]
    // if you want to use a 'normie' date format, use this:
    /*
    return value.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })
    */
}


// the site's navigation structure, kept in a global place so they can be edited
export const NAVIGATION = [
    { text: "cade.site", link: "/", class: 'no-mobile' },
    { text: "/blog", link: "/blog" },
    { text: "/links", link: "/links" },
]

// frontmatter for the site itself
export const SITE_TITLE = "Near Computronium"
export const SITE_DESCRIPTION = "Musings on math, music, meaning, machines, and more."
export const SITE_AUTHOR = "Cade Brown"
export const SITE_DATE = new Date('1999-12-31T23:59:59.999Z')
export const SITE_KEYWORDS = "computing, programming, philosophy, music, art, science, technology"
export const SITE_IMAGE = "/favicon.ico"
export const SITE_LINK = "https://cade.site"

export const SITE_FRONTMATTER = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    author: SITE_AUTHOR,
    date: SITE_DATE,
    keywords: SITE_KEYWORDS,
    image: SITE_IMAGE,
    link: SITE_LINK,
};


// frontmatter defaults (use the site's)
export const DEFAULT_TITLE = SITE_TITLE
export const DEFAULT_DESCRIPTION = SITE_DESCRIPTION
export const DEFAULT_AUTHOR = SITE_AUTHOR
export const DEFAULT_DATE = SITE_DATE
export const DEFAULT_KEYWORDS = SITE_KEYWORDS
export const DEFAULT_IMAGE = SITE_IMAGE
export const DEFAULT_LINK = SITE_LINK

export const DEFAULT_FRONTMATTER = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    author: DEFAULT_AUTHOR,
    date: DEFAULT_DATE,
    keywords: DEFAULT_KEYWORDS,
    image: DEFAULT_IMAGE,
    link: DEFAULT_LINK,
};


// helper function to get frontmatter from possibly undefined/incomplete data
export const getFrontmatter = (data = {}) => {
    // merge the default frontmatter with the given data
    return { ...DEFAULT_FRONTMATTER, ...data, }
}
// the site's messages, kept in a global place so they can be edited
export const MESSAGES = {

    // the message to display in the footer
    footer: "© 2023+ by Cade Brown. All rights reserved.",

};



// author data, in case your site has multiple authors all data can live here
export const AUTHORS: any = {
    "Cade Brown": {
        name: "Cade Brown",
        email: "me@cade.site",
        github: "cadebrown",
        twitter: "dev_ceb",
        instagram: "dev_ceb",
        website: "https://cade.site",
    }
}

// helper function to get the author date given the name of the author, or an existing author (in which case it just returns the author)
// this allows components to accept either the author's name, or the entire authors data if it is already known
export function getAuthor(author: string | object) {
    if (typeof author === "string") {
        // we are given the authors name, so look it up
        return AUTHORS[author]
    } else {
        // assume we are given an already valid author object, so return it
        return author
    }
}
