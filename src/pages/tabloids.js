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
  text-transform: uppercase;
  font-style: italic;
`
const Tabloids = styled.figure`
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
    query tabloidQuery {
      allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "images/tabloids"}}) {
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
        <SEO title="Tabloid Covers"
          description="COVER magazine was laid out and printed in tabloid form in its beginning years." />
        <h1>1986-1994</h1>
        
        <ArticleTitle><em>Tabloid Covers</em></ArticleTitle>

        <Tabloids>
          {data.allFile.edges.map(({ node }) => (
            <Img fluid={node.childImageSharp.fluid}
              key={node.id}
              maxWidth={node.sizes}
              alt={node.base.split(".")[0]}
            />
          ))}
        </Tabloids>
      </Article>
    </Layout >
  )
}