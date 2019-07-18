import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Gallery from "../components/gallery/gallery"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>COVER Magazine: The Underground National</h1>
    <p>Poet Jeffrey Cyphers Wright launched <em>Cover Magazine</em> in 1987. Its contributors included the era's vibrant local talent: Molly Jong-Fast, Timothy Greenfield-Sanders, David Ulin, and many more artists and writers covering their culture. The 64-page monthly journal circulated nationally until 2000. The complete set of <em>Cover</em> issues are archived at NYU Fales Library and at MoMA. Learn more on the About page and peruse the articles as we add them (below).</p>
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

