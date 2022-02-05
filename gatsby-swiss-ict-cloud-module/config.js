const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://kind-tree-03a002a03.1.azurestaticapps.net',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://www.gravatar.com/avatar/0100?d=identicon&size=32',
    logoLink: '/',
    title: 'Schweizer ICT Berufsbildung',
    githubUrl: 'https://github.com/faxg/swiss-ict-cloud-module-docs',

    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/msdev_ch" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>,`,
    links: [
      { text: 'ICT Berufsbildung', link: 'https://www.ict-berufsbildung.ch/' },
      { text: 'Microsoft Learn', link: 'https://learn.microsoft.com/' },
    ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/module_210',
      '/module_109',
    ],
    collapsedNav: ['/introduction'],
    links: [
      { text: 'ICT Berufsbildung', link: 'https://www.ict-berufsbildung.ch/' },
      { text: 'swissICT - Berufe in der ICT', link: 'https://www.berufe-der-ict.ch/' },
      { text: 'Microsoft Learn', link: 'https://learn.microsoft.com/' },
      { text: 'Skills for Switzerland', link: 'https://sfors.ch/' },
    ],
    frontline: true,
    ignoreIndex: true,
    title: 'Cloud Module | Microsoft',
  },
  siteMetadata: {
    title: 'Swiss ICT Berufsbildung - Microsoft Cloud Modules',
    description: 'Learning material for ICT Berufsbildung . Powered by learn.microsoft.com ',
    ogImage: null,
    docsLocation:
      'https://github.com/faxg/swiss-ict-cloud-module-docs/tree/main/gatsby-swiss-ict-cloud-module/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Swiss ICT Cloud Module',
      short_name: 'ICTBerufsbildung',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
