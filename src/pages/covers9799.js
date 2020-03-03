import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"

const Article = styled.div`
  max-width:960px;
  margin: 0 auto;
`
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`
const Covers9799 = styled.figure`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  
  @media (max-width: 480px) {
    grid-template-columns: minmax(100%, 1fr);
    grid-gap: 1rem;
    padding: 0;
    margin: 0;
    }
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query covers9799Query {
      allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "images/covers9799"}}) {
        edges {
          node {
            id
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
  return (
    < Layout >
      <Article>
        <SEO title="Glossy Covers"
          description="COVER magazine's later years: our signature cultural mix of reviews, features, and interviews on Captain Beefheart, Kiki Smith, and more with contributors Timothy Greenfield-Sanders, Molly Jong-Fast, and more." />
        <h1>1997-1999</h1>

        <ArticleTitle><em>Late Covers</em></ArticleTitle>

        <Covers9799>
          {data.allFile.edges.map(({ node }) => (
            <Img fluid={node.childImageSharp.fluid}
              key={node.id}
              maxWidth={node.sizes}
              alt={node.base.split(".")[0]}
            />
          ))}
        </Covers9799>
      </Article>
    </Layout >
  )
}