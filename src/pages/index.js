import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Gallery from "../components/gallery/gallery"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Cover Magazine</h1>
    <p>Jeffrey Cyphers Wright launched <em>Cover Magazine</em> in 1987. Its contributors included Molly Jong-Fast, Timothy Greenfield-Sanders, John Yau, Robert C. Morgan, David Ulin, Jeanne C. Wilkinson, and KK Kozik. The 64 page monthly journal circulated nationally until 2000.</p>
    <p>The complete set of <em>Cover</em> issues are archived in New York University Fales Library.</p>
    <div style={{ maxWidth: `960px`, marginBottom: `1.45rem` }}>
      <Gallery items={data.homeJson.gallery} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
