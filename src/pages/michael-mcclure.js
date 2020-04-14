import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from 'gatsby-image'

const Article = styled.div`
  max-width: 300px;
  margin: 0 auto;
`
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
  text-transform: uppercase;
  font-style: italic;
`
const Caption = styled.small`
  font-size: 0.80em;
  line-height: 0.08em;
  font-family: Merriweather, Georgia, serif;
  font-weight: normal;
`
const Poem = styled.div`
  text-align: center;
  line-height: 0.2;
  margin-right: 75px;

  @media screen and (max-width:425px) {
    margin-right: 0;
 
  }
`
const ArticleSubtitle = styled.h3`
  font-size: 2rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`

const McclurePage = () => (
  <StaticQuery
    query={graphql`
      {
        introImage: file(relativePath: {eq: "mcclure.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 280) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render={(data) => (
      <Layout>
        <Article>
          <SEO title="Michael McClure"
            description="The poem Dark Meat was published in Cover Magazine, October 1995."
          image={data.introImage}/>
          <h1>A Michael McClure Poem </h1>
          <div style={{ maxWidth: `280px`, marginBottom: `1.85rem`, lineHeight: `106%` }}>
            <Img fluid={data.introImage.childImageSharp.fluid} alt="installation" />
            <Caption><em><b>The Beard</b></em> program cover from McClure's play.</Caption>
          </div>
          <ArticleTitle><em>Dark Meat</em></ArticleTitle>
          <p>In <b>COVER Magazine </b> October, 1995</p>
        <Poem>
          <p>1.</p>
          <p>THERE'S</p>
          <p>A</p>
          <p>SIGH</p>
          <p>of relief</p>
          <p>from</p>
          <p>WHOEVER</p>
          <p>I</p>
          <p>am</p>
          <p>NOW</p>
          <p>a deep</p>
          <p>BREATH</p>
          <p>&nbsp;</p>
          <p>2.</p>
          <p>WHOEVER</p>
          <p>ER</p>
          <p>I</p>
          <p>AM</p>
          <p>I</p>
          <p>&nbsp;</p>
          <p>am</p>
          <p>not</p>
          <p>&nbsp;</p>
          <p>just</p>
          <p>meat</p>
          <p>&nbsp;</p>
          <p>in</p>
          <p>the</p>
          <p>dark</p>
          <p>&nbsp;</p>
          <p>3.</p>
          <p>IN</p>
          <p>this</p>
          <p>dark</p>
          <p>meat</p>
          <p>&nbsp;</p>
          <p>is</p>
          <p>&nbsp;</p>
          <p>no</p>
          <p>light</p>
          <p>&nbsp;</p>
          <p>at the</p>
          <p>edge</p>
          <p>&nbsp;</p>
          <p>O</p>
          <p>F</p>
          <p>NOWHERE</p>
          <p>&nbsp;</p>
          <p>here</p>
          <p>&nbsp;</p>
          <p>no</p>
          <p>here</p>
          <p>&nbsp;</p>
          <p>4.</p>
          <p>IN</p>
          <p>SIDE</p>
          <p>&nbsp;</p>
          <p>out</p>
          <p>side</p>
          <p>&nbsp;</p>
          <p>six</p>
          <p>trillion</p>
          <p>&nbsp;</p>
          <p>STARS</p>
          <p>&nbsp;</p>
          <p>squared</p>
          <p>&nbsp;</p>
          <p>to</p>
          <p>old</p>
          <p>&nbsp;</p>
          <p>velvet</p>
          <p>&nbsp;</p>
          <p>fingers</p>
          <p>&nbsp;</p>
          <p>5.</p>
          <p>&nbsp;</p>
          <p>THE TER</p>
          <p>RIBBLE</p>
          <p>self</p>
          <p>hangs</p>
          <p>&nbsp;</p>
          <p>on</p>
          <p>&nbsp;</p>
          <p>lean</p>
          <p>ing</p>
          <p>&nbsp;</p>
          <p>out</p>
          <p>of</p>
          <p>&nbsp;</p>
          <p>past</p>
          <p>&nbsp;</p>
          <p>finger / star</p>
          <p>clusters</p>
          <p>&nbsp;</p>
          <p>6.</p>
          <p>&nbsp;</p>
          <p>It's</p>
          <p>&nbsp;</p>
          <p>O.</p>
          <p>&nbsp;</p>
          <p>K.</p>
          <p>&nbsp;</p>
          <p>faces</p>
          <p>&nbsp;</p>
          <p>stop</p>
          <p>&nbsp;</p>
          <p>like</p>
          <p>sighs</p>
          <p>&nbsp;</p>
          <p>in</p>
          <p>the dark</p>
          <p>&nbsp;</p>
          <p>relief</p>
          <p>&nbsp;</p>
          <p>of</p>
          <p>no</p>
          <p>where</p>
          <p>&nbsp;</p>
          <p>7.</p>
          <p>&nbsp;</p>
          <p>EV</p>
          <p>ER</p>
          <p>&nbsp;</p>
          <p>WHO</p>
          <p>terrible</p>
          <p>faces</p>
          <p>&nbsp;</p>
          <p>spasms</p>
          <p>&nbsp;</p>
          <p>demi</p>
          <p>spasms</p>
          <p>&nbsp;</p>
          <p>re</p>
          <p>liefs</p>
          <p>&nbsp;</p>
        </Poem>
        <ArticleSubtitle>&nbsp; &mdash;&nbsp;Michael McClure</ArticleSubtitle>
        </Article>
      </Layout>
    )}
  />
)

export default McclurePage