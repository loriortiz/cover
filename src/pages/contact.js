import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Us</h1>
    <p>Cover Magazine<br />PO Box 1215<br />Cooper Station, NY 10129.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ArticlesPage