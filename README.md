# Polar Bear - Based on Dawn Ghost Theme

A highly functional theme that adapts to the reader's preferences. Let them read, search, subscribe, navigate, and more with ease. Completely free and fully responsive, released under the MIT license.

**Demo: <https://www.bishoptech.io>**

&nbsp;

# TODO

- [ ] Change virbiage to Blockchain development
- [ ] Update Tagging Structure and Define it here. 
- [ ] Investing in Crypto
   - Please not this is not finanical advice, I am not a certified professional. These are only my opinion towards how I am investing. 

- [ ] Add Disclaimer based on hidden tag
  - Disclaimer: This article is for ethical and educational purposes only.
- [ ] Tags page (listing out series)
- [ ] Set up Author Page to link to about
- [ ] Create a hire me page 
  - Offering Shopify Store Creation
  - Blockchain Development
  - Full-Stack Web Development 
- [ ] Store Page 
  - [ ] Offer Shopify Themes
  - [ ] Offer Ghost Themes
  - [ ] Offer Vue / Nuxt Themes
- [ ] Courses 
  - [ ] Intro to Ethereum Development


# Tag Guide

## Category 
A category has a public tag which is the category you would like the post to fall under. The primary or first tag is the only one that will appear on post cards and all other 

### List of Categories
- Blockchain
- Weekly Update
  + What did i do this week? 
  + Lesson of the Week?
  + FIRE Goal update
  + Fit Goal
  + Recommendation of the week
- Solidity
- Javascript
- Vue
- Announcement
- Monthly Newsletter
- Career Advice
- Dictionary


## Course 
Has a public Tag which is the name of the course and a private tag "course" to identify it is in fact a course. 





# Colors:

Light Grey: f1f2f2
Dark Blue: 0b1422
Light Blue: 92ccef

Dark Mountain Blues:
Shade - 142844
Light - 2d486c

Light Mountain Blues:
Shade - 92ccef
Light - ebf7fc

Additional Blue that is not used often but can be added - 2c6baf (Saturated Neutral Blue)

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
