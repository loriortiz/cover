import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <h1>Articles</h1>
    <p><Link to="/reed-portrait">Timothy Greenfield-Sanders’ portrait diary</Link> of his year directing and producing <em>Lou Reed: Rock and Roll Heart</em> for PBS.</p>
  </Layout>
)

export default ArticlesPage