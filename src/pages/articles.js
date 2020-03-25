import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const ArticlesPage = () => (
  <Layout>
    <SEO title="Articles" />
    <h1>Articles</h1>

    <p>A Rachel Youens review of <Link to="/jensen">Bill Jensen</Link>'s Mary Boone Gallery exhibit, from the COVER November 1995 issue.</p>

    <p><Link to="/writers">Portrait Album</Link> Art photos from the archive: some poets and writers we covered.</p>

    <p><Link to="/reed-portrait">Timothy Greenfield-Sanders’ portrait diary</Link> of his year (1998) directing and producing <em>Lou Reed: Rock and Roll Heart</em> for PBS and filming Reed and Robert Wilson's <em>Time Rocker</em>.</p>

    <p><Link to="/andrei-coddrescu">Andrei Codrescu</Link> discusses his new (1995) novel <em>Blood Countess</em>, his first under his own name.</p>

    <p><Link to="/milla">Milla: On Runway, Record, and Film.</Link> A 1995 interview with the ubiquitous artist.</p>

    <p><Link to="/kiki-smith">Kiki Smith</Link> on her 1998 Mattress Factory Installation.</p>

    <p>Do you have a favorite <em>COVER</em> article you'd like to see re<em>COVER</em>ed? <Link to="/contact">Drop us a line.</Link></p>
  </Layout>
)

export default ArticlesPage