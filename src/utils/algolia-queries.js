const pageQuery = `{
  posts: allMarkdownRemark(filter: {frontmatter: {publish: {eq: true}, draft: {ne: true}}}) {
    edges {
      node {
        frontmatter {
          title
          description
        }
        fields {
          slug
        }
        id
      }
    }
  }
}
`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, headings, excerpt,...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.posts.edges.map(pageToAlgoliaRecord),
    indexName: process.env.ALGOLIA_INDEX_NAME,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries