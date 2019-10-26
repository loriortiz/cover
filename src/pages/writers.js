import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Img from "gatsby-image"
/* import Album from "../components/album/album" */

const Article = styled.div`
  max-width:650px;
  margin: 0 auto;
`
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`
const StyledImage = styled(Img)`
  object-fit: none;
  margin-bottom: 1em;
`

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


        {data.allFile.edges.map(({node}) => (
          <Img fluid={node.childImageSharp.fluid}
          key={node.id}
          maxWidth={node.sizes}
          alt={node.base.split(".")[0]}
          />
        ))} 

      </Article>
    </Layout >
  )
}

/* export const query = graphql`
  query AlbumpageQuery {
    albumsJson {
      album {
        title
        width
        image {
          childImageSharp {
          fluid(maxWidth: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  ` */