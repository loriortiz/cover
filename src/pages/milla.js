import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
/* import Img from 'gatsby-image' */
import BackgroundImage from 'gatsby-background-image'

const StyledBackgroundSection = styled.section`
  width: 100%;
  margin: 0 auto;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
const Headline = styled.h1`
  text-align: right;
  color: #fff7f0;
  display: block;
  padding: 10em 5.5em 2em 0;
`
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
  text-align: center;
`
const HomeLink = styled(Link)`
  text-align:center;
  display: block;
  font-family: futura-pt-condensed, sans-serif;
  font-size: 1.4rem;
  text-decoration: none;
  :hover {
    color: black;
`

const MillaPage = () => (
  <StaticQuery
    query={graphql`
      {
        millaImage: file(relativePath: {eq:
        "milla-bg.jpg"}) {
          childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render={(data) => (
      <Layout>      
        <SEO title="Milla" />
        <SEO description="Model, musician, and film star Milla Jovovich is the subject of this 1991 Cover Magazine article by Rosemary Grillo" />
      <Article>
        <BackgroundImage Tag="section"
          fluid={data.millaImage.childImageSharp.fluid}
          backgroundColor={`#fff7f0`}
        >
          <Headline>Milla<br />Jovovich<br />Plays a part<br />On runway<br /> record and film</Headline>
        </BackgroundImage>
        <Caption>Director:Jan Dikkers; Make-up: Michael Del Fino; Shot at Sun Studios, NYC</Caption>
        <ArticleTitle><em>ROLE MODEL</em></ArticleTitle>
        <p>By <strong>Rosemary Grillo</strong>. Photo: <strong>Stephen Churchill Downes</strong></p>
          <p>Future Milla article.</p>
        </Article>
        <HomeLink to="/">COVER</HomeLink>
      </Layout>
    )}
  />
)

export default MillaPage