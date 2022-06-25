module.exports = {
  siteMetadata: {
    title: `Mehdi Bouchard - Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'fr',
        useLangKeyLayout: false,
      },
    },
  ],
};
