import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
/* import Img from 'gatsby-image' */
import BackgroundImage from 'gatsby-background-image'

const StyledBackgroundSection = styled(BackgroundImage)`
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
`
const Headline = styled.h1`
  text-align: right;
  color: #fff7f0;
  display: block;
  padding: 10em 5.5em 2em 0;
  
  @media (max-width: 680px) {
    padding: 10em 4em 1em 0;
  }
  @media (max-width: 409px) {
    padding: 2.5em 3em 0;
  }
  @media (max-width: 368px) {
    padding: 1em 2em 0;
  }
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
        <Article>      
          <SEO title="Milla"
          description="Model, musician, and film star Milla Jovovich is the subject of this 1991 Cover Magazine article by Rosemary Grillo" />
          <StyledBackgroundSection Tag="section"
            fluid={data.millaImage.childImageSharp.fluid}
            backgroundColor={`#fff7f0`}
            alt={`Milla performing`}
          >
          <Headline>Milla<br />Jovovich<br />Plays a part<br />On runway<br />Record and film</Headline>
        </StyledBackgroundSection>
        <Caption><em><b>Milla</b></em>. Director:Jan Dikkers; Make-up: Michael Del Fino; Shot at Sun Studios, NYC</Caption>
        <ArticleTitle><em>ROLE MODEL</em></ArticleTitle>
        <p>By <strong>Rosemary Grillo</strong>. Photo: <strong>Stephen Churchill Downes</strong>; In: <em><b>COVER</b></em> Summer 1995</p>
        <p>Milla was a model at eleven, and a world traveler, and <em>haute-couture femme fatale</em> by thirteen. Her mother, a Ukrainian actress, and her father, a Yugoslavian doctor, had left the USSR when Milla was five. The family landed in Southern California where Milla became the existentialist, reading Balzac and Latin American lit from Allende to Marquez, and partying from modeling shoots to movie sets.</p>
        <p>(Remember <em>Return to the Blue Lagoon</em> and Richard Linklater's recent <em>Dazed and Confused</em>?)</p>
        <p>Now a seasoned star at nineteen, Milla describes her mother as a long-standing influence. She wanted to follow in her mother's footsteps and become an actress. One thing lead to another and Milla found herself at twelve made up to look twenty. Being in front of the lens became natural.</p>
        <p>Now she's living in New York with her band, composed of a fiddler, guitarist and bassist. "We tour together, live together, and they know me. Chris and l are in sync. We met four years ago in LA. We were glued like boyfriend and girlfriend — everything except the sex. It made it difficult to have other relationships, and my ex-boyfriend didn't understand. Basically I went from different dependencies on my mom, [to] my agent, and then Chris.</p>
        <p>"Now, I have too many pressures and responsibilities, so I need to be my own person. I'm breaking into my own identity."</p>
        <p>Her first album, <em>The Divine Comedy</em>, had lyric resonance. "I'm a writer and a performer. My lyrics are like my journal. I don't have the skill of a musician; the people I work with have devoted their whole lives to it and we're perfectly in sync. I don't want to be an ego and say I do everything.</p>
        <p>"I love working with the band as a collective. I hate to be dictated to by a producer. At this point I've put so much into learning to perform and focus on the music, that I could do it forever, but I can't be totally dependent on my record company.</p>
        <p>“Look, I love modeling. Its a blast to work with everyone. I just shot here last week with Testino Magni for <em>Italian Vogue</em>. It was great to see old friends after not working for a while, like Testino who's known me since I was a kid."</p>
        <p>Milla’s definitely on her way up in the world but her dreams about flying are most revealing. "I have these sensual dreams about Courtney [Love]: she's usually smiling. I know it's cheesy but she's so beautiful, cool, awesome — a goddess. I'm in love with her," she bursts out, jumping up from her director's chair. But would she like to meet? "No, I wouldn't want to break the pedestal I've put her on."</p>
        </Article>
        <HomeLink to="/">COVER</HomeLink>
      </Layout>
    )}
  />
)

export default MillaPage