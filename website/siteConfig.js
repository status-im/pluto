/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

const siteConfig = {
  title: 'Pluto',
  tagline: 'A grammar for data manipulation',
  url: 'https://status-im.github.io',
  baseUrl: '/pluto/',

  // Used for publishing and more
  projectName: 'pluto',
  organizationName: 'status-im',

  headerLinks: [
    {doc: 'Manifesto', label: 'Docs'},
    {page: 'examples', label: 'Examples'},
    {page: 'todo', label: 'Try'},
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo_white.png',
  footerIcon: 'img/logo_white.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#4A5AB5',
    secondaryColor: '#6CC1F6',
  },

  /* custom fonts for website */
  fonts: {
    myFont: [
      "PostGrotesk-Book",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Status.im',

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js',
            '/pluto/js/pluto.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  wrapPagesHTML: true,

  usePrism: true
};

module.exports = siteConfig;
