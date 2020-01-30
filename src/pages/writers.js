import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
/* import Album from "../components/album/album" */

const Article = styled.div`
  max-width:960px;
  margin: 0 auto;
`
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`
const Album = styled.figure`
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
/* const Citation = styled.p`
  @media (max-width: 480px) {
    display:none;
  }
` */

export default () => {
  const data = useStaticQuery(graphql`
    query imageQuery {
      allFile(filter: {extension: {regex: "/(jpg)/"}, relativeDirectory: {eq: "images/album"}}) {
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
        <SEO title="Literati"
          description="Portraits of poets and playwrights from the COVER archive: Eileen Miles, Allen Ginsberg, Bina Sharif, Rene Ricard, Alice Notley, and Amiri Baraka" />
        <h1>Luminaries of Literature</h1>
        <p>Art photos of literary rock stars from the <em>COVER</em> archives.</p>
        <ArticleTitle><em>Portrait Album</em></ArticleTitle>

        <Album>
        {data.allFile.edges.map(({node}) => (
          <Img fluid={node.childImageSharp.fluid}
          key={node.id}
          maxWidth={node.sizes}
          alt={node.base.split(".")[0]}
          />
        ))} 
        </Album>
        <p>Amiri Baraka at The Knitting Factory, photo: Luigi Cazzaniga; Bina Sharif; Eileen Myles; Allen Ginsberg; Rene Ricard sitting at table, photo: Allen Ginsberg; Alice Notley; William Borroughs with cane; Emilio Cubierto, photo: Luigi Cazzaniga</p>
      </Article>
    </Layout >
  )
}
