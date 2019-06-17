import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const KikiPage = () => (
  <Layout>
    <SEO title="Kiki Smith" />
    <h1>Kiki Smith</h1>
    <p>Future Kiki article.</p>
    <Link to="/">Back to homepage</Link>
  </Layout>
)

export default KikiPage