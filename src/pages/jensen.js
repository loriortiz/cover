import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from 'gatsby-image'

const Article = styled.div`
  max-width: 650px;
  margin: 0 auto;
`
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`
const Caption = styled.small`
  font-size: 0.80em;
  line-height: 0.08em;
`

const JensenPage = () => (
  <StaticQuery
    query={graphql`
      {
        introImage: file(relativePath: {eq: "jensen.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render={(data) => (
      <Layout>
        <Article>
          <SEO title="Bill Jensen"
            description="Rachel Youens review of Bill Jensen's  painting show at Mary Boone Gallery, in Cover Magazine November 1995." />
          <h1>Bill Jensen at Mary Boone</h1>
          <div style={{ maxWidth: `600px`, marginBottom: `1.85rem`, lineHeight: `106%` }}>
            <Img fluid={data.introImage.childImageSharp.fluid} alt="installation" />
            <Caption><em><b>Hour of the Wolf</b></em> 1994 oil on burlap 33 x 33 in.</Caption>
          </div>
        <ArticleTitle><em>Natural Abstract</em></ArticleTitle>
          <p>By <strong>Rachel Youens</strong>. In <b>COVER Magazine </b> November, 1995</p>
         
        <p>Lush and craggy, naturalistically expressionist, cosmopolitan and sublime, Bill Jensen has continued in his naturalistic abstraction to reach a place of well developed, consistent invention.</p>
        
        <p>Smallish, none measure more than 39 inches, Jenson may cloak his motives with titles like “Colossus,” “Hour of the Wolf,” and "Winter Light,” but at first glance,the density of the horizon and the  and fiction of its aftermath form some promise of an intrinsic beyond, held hostage by its borders.</p>

        <p>Jenson brings to the paintings, as he has in the past, a signature of brush strokes that heighten their scale to reach right across the depth of the gallery space. Stroke builds form and form here is often posited by horizontal bands whose weight and opacity are obtained through placement and degree of thickness, surprising the viewer.</p>
          
        <p>Sky and ground are washed and scraped repeatedly and yield veils of unusually sensual and luminous bright lime greens and ochres.</p>

        <p>The effect of all this is to pinpoint time and light into a perpetual “now," an unnerring presence, while simultaneously obscuring any reference to specific place or location.</p>

        <p>Jensen also masterfully utilizes modernist frontally, by foreshortening. He simplifies spacial and structual relations, thus generating an unexpected monumentality. By eliding the problematics of peripheral vision he synchronizes differences in surface texture, bracketing and suspending the viewer at birds-eye level. The consequent contracting of closeness and distance gives a depth of field that is entirely pictorial and yet implicates infinity as unproffered and unobtainable promise.</p>

        </Article>
      </Layout>
    )}
  />
)

export default JensenPage