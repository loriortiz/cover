import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Article = styled.div`
  max-width: 650px;
  margin: 0 auto;
`
const AboutPage = () => (
  <Layout>
    <Article>
    <SEO title="About" 
      description="This page has information about the New York City based Cover Magazine published by Jeffrey Cyphers Wright for 13 years until 2000."
    />
    <h1>About COVER Magazine</h1>
      <p><em>Cover Magazine</em> was founded in 1987 in the East Village of New York City. The neighborhood was a triple crown winner — an epicenter of punk music, the home of a vibrant poetry and writers’ community, and center of a booming art scene with over 80 galleries. Poet Jeffrey Cyphers Wright put it all together in a monthly publication devoted to covering all the arts.</p>
      <p>As publisher and editor, Wright recruited many of his friends and associates in the broader arts community to become contributors. Some of them were already known such as poet and art critic John Yau. Other critics who went on to become widely known included Robert C. Morgan, Saul Ostrow, Phyllis Braff, and David Ulin who now reviews books for the <em>LA Times</em>.</p>
      <p>Over the almost 15 year of publication, <em>Cover</em> ran reviews of hundreds of artists, musicians, writers, dancers, and performance artists. Poetry Editor Lita Hornick brought in poems by Michael McClure, Lawrence Ferlinghetti, Clark Coolidge, Bernadette Mayer, and many others. The magazine featured original art and artist statements by artists as diverse as Sue Coe and Cary Smith. Each issue featured an interview with a master in their field: Allen Ginsberg, Rufino Tamayo, Kiki Smith, Louise Fishman, Spike Lee, and Lou Reed.</p>
      <p>Local heroes were touted, often before receiving mainstream attention. Penny Arcade, Colette, Eileen Myles, and Sarah McLaughlin were all featured cover stories. The magazine often broke new talent. For instance, the iconoclastic fine artist Andres Serrano, received his first cover story in <em>Cover</em>.</p>
      <p>The advertising base that supported the magazine during its decade and a half, reflected the depth of sources that <em>Cover</em> was able to recruit. From blue chip uptown galleries like Marlboro, Hirschl & Adler, and Knoedler, to downtown startups like Stefan Stux, June Kelly, and Curt Marcus. From the legendary Ritz nightclub, to the Merce Cunningham dance company, the arts found a home in <em>Cover Magazine</em>.</p>
      <p>Absolut Vodka under the direction of Michel Roux, allowed <em>Cover</em> to commission its own artists. Ron English, Steven Lack, and others contributed  artwork for original ads that appeared only in <em>Cover Magazine</em>. Dewar’s and Camel became regular advertisers as well.</p>
      <p><em>Cover</em> also hosted parties at nightclubs. Webster Hall hosted a monthly rock and roll and arts showcase.  The founders of Tears for Fears played one night. Peter Beard’s artwork was featured at another event. At the Knitting Factory (now City Winery) the Tiger Lilies played. The Limelight hosted two anniversary parties. Wright recited poetry with rock and roll star, the lead singer of the Cars, Ric Ocasik at the Palladium at one of several <em>Cover</em> parties at that club.</p>
      <p>The magazine was distributed nationally by Ingrams. At its height it was a glossy, staple-bound, 64-page monthly periodical.</p>
    </Article>
  </Layout>
)

export default AboutPage