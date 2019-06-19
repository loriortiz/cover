import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'

const KikiPage = () => (
  <StaticQuery
    query={graphql`
      {
        introImage: file(relativePath: {eq: "installation.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
          }
        }
      }
       detailImage: file(relativePath: {eq: "detail.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render={(data) => (
    <Layout>
      <SEO title="Kiki Smith" />
      <h3>Kiki Smith</h3>
      <div style={{ maxWidth: `300px`, marginBottom: `1rem` }}>
        <Img fluid={data.introImage.childImageSharp.fluid} />
      </div>
      <p>Future Kiki article.</p>
      <div style={{ maxWidth: `600px`, margin: `0 auto` }}>
        <Img fluid={data.detailImage.childImageSharp.fluid} />
      </div>
      <Link to="/">Back to homepage</Link>
    </Layout>
  )}
  />
)

export default KikiPage