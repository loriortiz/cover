import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MillaPage = () => (
  <Layout>
    <SEO title="Milla" />
    <h1>Milla</h1>
    <p>Future Milla article.</p>
    <Link to="/">Back to homepage</Link>
  </Layout>
)

export default MillaPage