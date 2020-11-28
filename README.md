# CMS für linke-im-westend.de

## Custom

## Todos

- [x] Integration alter Daten der Website-Westend
- [x] Entscheidung wie generell vorgehen. Änderungen auf WordPress Server oder über Netlifly wie hier und damit neu.
- [x] Nuxt und Awake Code base ersetzen.
  - Es bleibt jetzt dabei. Schon zuviel Zeit hierein gesteckt.
- [ ] Googles Analytics anschalten

## laufende Site

- [x] Bugfix Categories Menue.
- [ ] Author Link to Posts
- [ ] Termine Section
  - [x] Add Ort
- [x] Member Section
  - [x] Bild load in Site only
  - [ ] ...
- [x] Contact-Email an Oefinger@WEB.de. ()
- [ ] Newsletter Funktion einrichten. (Account MailChunk)
- [ ] wichtige Termine mit auf die StartSite
- [ ] static links in Markdown. nuxt failure?
- [x] navbar click brand

## Features

- Simple modern design based on the Bulma css framework (with unused css purged via [purgecss](https://www.purgecss.com/))
- Site search
- Statically generated API for posts and categories
- Disqus powered comments
- Mailchimp powered newsletter
- Highly customizable with out of the box configurations
- Built with performance in mind
- Isolated Netlify CMS driver (with more CMS drivers planned for future) for easily migrating between various headless cms'
- Images automatically resized for various screens and given srcsets

## Configuration

Site configuration is found in `/config/_siteConfig.js`. Here you can customize site settings such as the site name, layout, disqus and mailchimp setup, image sizes and more. Any of these can be setup to use environment variables if you so desire, in order to be able to configure them directly from the Netlify interface. See the setup for google analytics which already uses an environment variable as an example of this.

```[js]
googleAnalytics: {
    on: true,
    id: process.env.GOOGLE_ANALYTICS_ID
},
```

## Editing Content

Posts and categories can be edited in Netlify CMS at \[your-site-url]/admin. At this time any new pages must be created in the code itself and committed to the repo. Before you visit the admin for the first time, make sure you have [Netlify Identity](https://www.netlify.com/docs/identity/) setup with your user and make sure "Git Gateway" is enabled via the Identity Settings page in the Netlify admin.

## Local Development

Since all content is store in the git repo with Netlify CMS, local development is a breeze. Simply install node, pull down the repo, install the dependencies with `npm install`, and run `npm run dev`.
