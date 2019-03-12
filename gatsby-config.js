module.exports = {
  siteMetadata: {
    title: 'Irene Alegre | Product Designer',
    description: 'Product Designer based in London,
    keywords: 'product designer, london designer, ux designer, ui designer'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'hgpekmn23fhh',
        accessToken: 'd872136d30f294b4e010f7e8cd51a606787320fbff554e5317f5b61b735fb7dc'
      }
    }
  ],
}
