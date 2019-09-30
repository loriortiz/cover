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
const ArticleSubtitle = styled.h3`
  font-size: 2rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`
const Caption = styled.small`
  font-size: 0.80em;
  line-height: 0.08em;
`

const ReedPortraitPage = () => (
  <StaticQuery
    query={graphql`
      {
        introImage: file(relativePath: {eq: "reed1.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 650) {
              ...GatsbyImageSharpFluid
          }
        }
      }
       detailImage: file(relativePath: {eq: "reed2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render={(data) => (
      <Layout>
        <Article>
          <SEO title="Lou Reed"
            description="Timothy Greenfield-Sanders' portrait diary of work he did on Lou Reed films Rock and Roll Heart and Time Rocker" />
          <h1>Lou Reed</h1>
          <div style={{ maxWidth: `650px`, marginBottom: `1.85rem`, lineHeight: `106%` }}>
            <Img fluid={data.introImage.childImageSharp.fluid} alt="installation" />
            <Caption><em><b>Lou Reed</b></em> 1998.</Caption>
          </div>
          <ArticleTitle><em>Portrait Diary</em></ArticleTitle>
          <p>By <strong>Timothy Greenfield-Sanders</strong>. In <b>COVER Magazine 1998</b> Vol.12 No.3</p>
         
        <p><b>May 11 1997</b>: Start of production as Director and Producer of <em>Lou Reed: Rock and Roll Heart</em>, for Susan Lacy's American Masters series. Fly to Amsterdam with co-producer Karen Bernstein and Senior Researcher Karin Greenfield-Sanders to film Lou Reed and Robert Wilson production of <em>Time Rocker</em>.</p>
        
        <p><b>June 4, 1997</b>: First interview for the film: David Bowie in London.</p>

        <p><b>Sept. 17, 1997</b>: Start avid editing Lou Reed film with Jed Parker.</p>
          
        <p><b>Dec. 24, 1997</b>: Lou Reed film completed.</p>

        <p><b>May 14, 1998</b>: <em>Lou Reed: Rock and Roll Heart</em> opens at the Anthology Film Archive for a two week run.</p>

        <ArticleSubtitle>Favorite Quotes from the Film</ArticleSubtitle>

        <p><b>LOU REED</b>: <em>I was interested in subject matter that hadn't been covered in pop and rock. I had dreams of writing certain kinds of things. I was influenced by Burroughs and Ginsberg. Raymond Chandler and Hubert Selby, I thought. that's what I want to do except with a drum and guitar.</em></p>

        <p><b>DAVID BOWIE</b>: <em>Lou Reed brought rock and roll into the avant-garde.</em></p> 
          <p><b>JOHN CALE</b>: <em>Lou was lyrically really incredible in a different sort of way. I think Lou created mythology on the street.</em></p>
        
        <p><b>LOU REED</b>: <em>I think of New York as being something almost like my DNA. you know, I have my parents and then there's New York.</em></p>

        <p><b>RONNIE CUTRONE</b>: <em>The 60's have a reputation of being, you know, totally cool; and the fact was there was 35 cool people in New York at the time, tops.</em></p>

        <p><b>JIM CARROLL</b>: <em>The Velvet Underground was like the band but, as Lou once said, everyone thinks we're great but we don't have a pot to piss in.</em></p>

        <p><b>DAVID BYRNE</b>: <em> l love the song "Walk On The Wild Side"...but I'd hear it on the radio all the time and you'd hear it in restau­rants and bars and bus stations, whatever. And I'd wonder — do any of these people have any idea of what's being talked about, who is being talked about, and what's going on?</em></p>

        <p><b>HOLLY WOODLAWN</b>: <em>I plucked my eyebrows, I shaved, I... you know, from one end of the country to the other...</em></p>

        <p><b>JOE DALLESANRO</b>: <em>And you are still a very beautiful girl. Very beautiful girl.</em></p>

        <p><b>THURSTON MOORE</b>: <em>To sing so explicitly about heroin, should be considered one of the most groundbreaking things in Rock and Roll. And it definitely was. I think lyric writing for a lot of people after that was never the same.</em></p>

        <p><b>CHARLIE ROSE</b>: <em>How bad was it [drug use] at the worst?</em></p>
        <p><b>LOU REED</b>: <em>As bad as it gets.</em></p>

        <p><b>LOU REED</b>: <em>Glam rock, androgyny, polymorphic sex. I was right in the middle of it. Some say I could have been at the head of the class.</em></p>

        <blockquote>I think real­ly with Lou, the poet in him won out.</blockquote>

        <p><b>DAVID FRICKE</b>: <em>One thing I remember from the liner notes about that record [Metal Machine Music] — it was something like "my week beats your year" and I thought man, that is the shit, he's saying if you don't like it, I don't care.</em></p>

        <p><b>VACLAV HAVEL</b>: <em>I know Lou Reed a long time as a musician and also personally and I like him very much. He and his Velvet Underground influenced very much the rock music in our country, which played in former time the special social role.</em></p>

        <p><b>PATTI SMITH</b>: <em>One wants to communicate with the people... one wants to mind-meld with the people... but one must do their work and be the guardian of their work and I think real­ly with Lou, the poet in him won out.</em></p>

        <p><b>PHILLIP GLASS</b>: <em>It is not music that is made as a reaction to a particular market place. It really comes from the inside and by that I mean that it comes from Lou's own consciousness. </em></p>

        <div style={{ maxWidth: `650px`, margin: `0 auto` }}>
          <Img fluid={data.detailImage.childImageSharp.fluid} alt="portrait" />
          <Caption><em><b>Reed</b></em> 1998</Caption>
        </div>

        </Article>
      </Layout>
    )}
  />
)

export default ReedPortraitPage