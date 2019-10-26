import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Album from "../components/album/album"

const Article = styled.div`
  max-width: 650px;
  margin: 0 auto; */
/* `
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`


const WriterPortraitsPage = ( { data }) => (
  
  <Layout>
      <SEO title="Literati"
        description="Portraits of poets and playwrights from the COVER archive: Eileen Miles, Allen Ginsberg, Bina Sharif, Rene Ricard, Alice Notley, and Amiri Baraka" />
      <h1>Luminaries of Literature</h1>
      
      <ArticleTitle><em>Portrait Album</em></ArticleTitle>
      <p>Art photos of literary rock stars from the <em>COVER</em> archives.</p>

      <Album photos={data.albumsJson.album}/>
  </Layout>
)

export default WriterPortraitsPage

export const query = graphql`
  query AlbumpageQuery {
    albumsJson {
      album {
        title
        imgw
        image {
          childImageSharp {
          fluid(maxHeight:500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `