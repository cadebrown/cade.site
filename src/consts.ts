// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

/* ideas for site names: (don't include any duplicates)

cade.site
51934
LiMiNiL
LMNL
Liminal Digital Wizardry
Digital Arcanum
Arcane Crypt
Beyond the Veil
Singularity Simulation
Incomplete Singularity
Void or Aether
Aetheric Void
Dyson Sphere
NeurOptic
NeuroSynthetic
Neuronomicon
Singularity Sorcerer
Occult Intelligence
Metaphysical Machines
Digital Divination
Metaphysical Matrix
Metamachine
Machinations
Mythical Machines
PsuedoSentience

*/


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

// get the author data given by the given name (also, allows passing an existing author data to return it)
export function getAuthorData(author: string | object) {
    if (typeof author === "string") {
        return AUTHORS[author]
    } else {
        // already has author data
        return author
    }
}

export const formatDate = (date: Date) => {
    // return iso8601, just YYYY-MM-DD
    return date.toISOString().split('T')[0]
    /*
    return date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })*/
}


/// Site Props (global props) ///

export const SITE_TITLE = "Near Computronium"
//export const SITE_TITLE = "Near Computronium"
//export const SITE_DESCRIPTION = "A blog about computing, programming, philosophy, music, art, science, technology, and more."
export const SITE_DESCRIPTION = "Musings on math, music, meaning, machines, and more."
export const SITE_AUTHOR = "Cade Brown"
export const SITE_DATE = new Date()
export const SITE_KEYWORDS = "computing, programming, philosophy, music, art, science, technology"
export const SITE_IMAGE = "/placeholder-hero.jpg"

export const SITE_FRONTMATTER = {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    author: SITE_AUTHOR,
    date: SITE_DATE,
    keywords: SITE_KEYWORDS,
    image: SITE_IMAGE, 
};


/// Default Props (if none are given) ///

export const DEFAULT_TITLE = SITE_TITLE
export const DEFAULT_DESCRIPTION = SITE_DESCRIPTION
export const DEFAULT_AUTHOR = undefined
export const DEFAULT_DATE = undefined
export const DEFAULT_KEYWORDS = SITE_KEYWORDS
export const DEFAULT_IMAGE = undefined

export const DEFAULT_FRONTMATTER = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    author: DEFAULT_AUTHOR,
    date: DEFAULT_DATE,
    keywords: DEFAULT_KEYWORDS,
    image: DEFAULT_IMAGE,
};


// helper function to get frontmatter from possibly undefined data
export const getFrontmatter = (data = {}) => {
    // merge the default frontmatter with the given data
    return {
        ...DEFAULT_FRONTMATTER,
        ...data,
    }
}
