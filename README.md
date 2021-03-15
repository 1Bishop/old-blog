# Polar Bear - Based on Dawn Ghost Theme

A highly functional theme that adapts to the reader's preferences. Let them read, search, subscribe, navigate, and more with ease. Completely free and fully responsive, released under the MIT license.

**Demo: <https://www.bishoptech.io>**

&nbsp;

# TODO

- [x] Added FormSpree
- [ ] Set up footer
- [ ] Fix author on posts
- [ ] Add my icons:
  - [ ] post next and prev
  - [ ] look at getting search and menu icons
- [ ] Add highlight.js to site code blocks
- [ ] Add custom fonts to theme (source code pro and dank mono)
- [ ] add tailwindcss?
- [ ] Set up home page
- [ ] Fix blog page to have bg + Blog Text
- [ ] Make about page
- [ ] Tags page (listing out series)
- [ ] set up Author Page to link to about
- [ ] Add Share to LinkedIn Button
- [ ] Create Contact Page
- [ ] Set up Subscriptions
- [ ] Set up Zapier
- [ ] Resume Page
- [ ] Style HR in the home page to look like a dotted line (pixels)

# Tasks for Cristain

- [ ] Update Canva Templates
- [ ] Icons:
  - [ ] Site menu
  - [ ] table of contents
  - [ ] Search Icons
  - [ ] RSS
- [ ] Style Guide PDF (colors and usage)
- [ ] Update Business Cards
- [ ] Series Posters (Rectangle) in canva
- [ ] Square Logo image 800x800px

# Theme

1. Edit colors in the `misc/dark.css`

# Search

1. Navigate to the `Integrations` and click on `Add custom integration`.
2. Copy the content API key; this will be used to fetch posts from your site.
3. Insert the generated key in `Code injection > Site Header` field.

```html
<script>
  var gh_search_key = "API_KEY";
  var gh_search_migration = "v1";
</script>
```

The theme generates an index of posts for highly performant search. The index is updated automatically when posts are added or updated. However, it isn't updated when posts are unpublished or deleted.

To force update the index, increment the search index migration version like `'v2'`.

# Dropdown Menu

The theme looks for a menu item with three dots (`...`) in its URL, and uses that as a dropdown menu toggle. All menu items after the toggle will be added to the dropdown list automatically.

| Label      | URL                         |
| ---------- | --------------------------- |
| More links | <https://example.com/>...   |
| Sub-1      | <https://example.com/sub-1> |
| Sub-2      | <https://example.com/sub-2> |

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
$ yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/<theme-name>.zip`, which you can then upload to your site.

```bash
yarn zip
```

# PostCSS Features Used

- Autoprefixer - Don't worry about writing browser prefixes of any kind, it's all done automatically with support for the latest 2 major versions of every browser.

# Copyright & License

Copyright (c) 2013-2021 Ghost Foundation - Released under the [MIT license](LICENSE).
