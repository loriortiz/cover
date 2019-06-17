import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery/gallery"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>Jeffrey Cyphers Wright launched <em>Cover Magazine</em> in 1987. Its contributors included Molly Jong-Fast, Timothy Greenfield-Sanders, John Yau, Robert C. Morgan, David Ulin, Jeanne C. Wilkinson, and KK Kozik. The 64 page monthly journal circulated nationally until 2000.</p>
    <p>The complete set of <em>Cover</em> issues are archived in New York University Fales Library.</p>
    <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
      <Gallery items={data.homeJson.gallery} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    homeJson {
      gallery {
        title
        slug
        date
        copy
        image {
          childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `

