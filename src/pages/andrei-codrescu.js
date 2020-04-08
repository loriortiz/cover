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
  text-transform: uppercase;
  font-style: italic;
`
const ArticleSubtitle = styled.h3`
  font-size: 2rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
`
const Caption = styled.small`
  font-size: 0.80em;
  line-height: 0.08em;
`

const AndreiPage = () => (
  <StaticQuery
    query={graphql`
      {
        introImage: file(relativePath: {eq: "bookcover.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
          }
        }
      }
       detailImage: file(relativePath: {eq: "andre-head.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `} render={(data) => (
      <Layout>
        <Article>
          <SEO title="Andrei Codrescu"
            description="COVER interviewed Andrei Codrescu on his 1995 novel about Elizabeth Bathory, The Blood Countess" />
          <h1>A Conversation with Andrei Codrescu on His Chiller <em>The Blood Countess</em></h1>
          <div style={{ maxWidth: `200px`, marginBottom: `1.85rem`, lineHeight: `106%` }}>
            <Img fluid={data.introImage.childImageSharp.fluid} alt="book cover" />
          <Caption><em><b>The Blood Countess</b></em> 1995.<br />Simon & Schuster<br /><a href="https://www.codrescu.com/the-blood-countess-a-novel"><b>Andrei Codrescu</b></a></Caption>
          </div>
        <ArticleTitle><em>Countess and Serial Killer</em></ArticleTitle>
          <p>By <strong>Jeffrey Cyphers Wright</strong>. In <b>COVER September 1995</b> issue.</p>
        <p>Maybe you've heard him on National Public Radio spouting his brilliant anti­platitudes. Maybe you saw him in the movie from Samuel Goldwyn called Road Scholar. Maybe he's published one of your poems in his magazine, <em>The Exquisite Corpse</em>. Or maybe you've read one of his two score books of poems, essays or ribaldry.</p> 
        
        <p>I've known Andrei Codrescu since we were both pups romping in the den of iniquity and I've watched him create scenes in various towns from Baltimore to Baton Rouge to his current home. New Orleans. Recently I interviewed him in conjunction with Simon & Schuster's publica­tion of his new book, <em>The Blood Countess</em>, a fictional­ized account of Elizabeth Bathory, who murdered over 600 virgins in a quest for immortality and thrills.</p> 
        
        <p><b>JCW</b>: <em>Did you have an editor?</em><br /><b>AC</b>: It would have been nice to have line-by-line guidance But I don't want it, don't need it.</p>

        <p><b>JCW</b>: <em>After you wrote it, did you go back and revise it?</em><br /><b>AC</b>: The book took four years, cause I did what's the hardest thing there is to do in writing which is to turn a nonfic­tion project into a novel. I originally went to Hungary in 1992 to research the case of Elizabeth Bathory, who was a real person and that was an adven­ture in itself, trying to get into the background itself. Some of that is also in the book. And then I came back and realized that the whole story was a lot richer. It's not my first novel — I wrote a porno novel, The Repentance of Lorraine, published under another name which has just been reprinted.</p>

        <p><b>JCW</b>: <em>Originally you started to do The Blood Countess more like your last book, Hole in the Flag more like a documentary style?</em><br /><b>AC</b>: Right. originally it was a nonfiction investigation of what in the world would make a 16th century woman with power and mucho money, murder virgin girls.</p>

        <p><b>JCW</b>: <em>Did you see her as a metaphor for the dark side in humans?</em><br /><b>AC</b>: That's quite obvious. You can look at any mass murder­ers and serial killers that way but the scale she killed on put her in a different class. We don’t have Jeffrey Dahmer's dark side in us — we do and we don't. The only criminal I know of on that scale was Jean De Rae, Jeanne d'Arc’s lieutenant and chief strategist, who was a killer of young boys.</p>

        <p><b>JCW</b>: <em>What about Lucrezia Borgia?</em><br /><b>AC</b>: A lot of that stuff was myth and even if she had been a poisoneress she probably would have only killed a few people. And then it was to get power because the way to get power in the 16th century and before was simply to poison and kill whoever stood in your way. They didn’t negotiate.</p>

        <blockquote> The only difference between those people and the way they were then and the way we are now is guilt, a kind of cumulative guilt. It's quite easily removable, but it's there, thank God.</blockquote>

        <p><b>JCW</b>: <em>Tbe choice of Elizabeth Bathory was partially motivated by wanting to write about that part of the world?</em><br /><b>AC</b>: Well, partly, but really the choice of writing about her was about the times she lived in and the things she did in that time. The 16th Century was the time that most of what has come to be known as modern in the 20th century was born. Nationalism first took root as a philosophy. The mass media of print­ing began. We're now seeing the end of that curve. So you have a wonderful perspective of a few centuries in which to see the entire picture.</p>

        <p>And there's the fight between the Lutherans and the Catholics which was magnificent in its own way, because it ideologically resembles the fight between Communism and Capitalism; the Catholic church being just like Communism toward the end — a universalist doctrine which had a big corrupt bureaucracy. In contrast, the Lutheran ideology shifted toward indi­vidual responsibility and hard work. So you have that sort of struggle and then you also had the central state. The idea of central state power was still new and much resisted by feudal lords like Elizabeth Bathory. You had the rise of bourgeois classes of the tradesmen. The age of great peasant revolts was over and the tradesmen were coming up and along with that the national aspi­rations. </p>

        <p><b>JCW</b>: <em>Elizabeth Bathory chose victims from across the class structure. She was egalitar­ian in that sense?</em><br /><b>AC</b>: She started out by killing peasant servant girls out of anger because they didn't do the right thing. And she ended up killing noble girls and that's when they really popped her.</p>

        <p><b>JCW</b>: <em>She froze the noble girl, that's true?</em><br /><b>AC</b>: Yeah that's true. She tried the happy medium too. which is interesting for me because I live in New Orleans, She tried dress­ing up peasant girls as noble girls. She had them washed and perfumed and brought over to the banquet table to sit around. But it became clear the minute they opened their mouth that they hadn't studied Aristotle so she got even madder. So I think that's how she got started refining her techniques of killing.</p>

        <ArticleSubtitle>Iron Maiden</ArticleSubtitle>
        <p>Another fascinating aspect of it, is that her methods coincided with the beginning of clockwork technology. A lot of clockworks were being designed and made by German clockmakers — like the Iron Maiden. But there were others like the refinements of the Procrustian Bed, refinements on the crushing wheel. There was a whole slew of them. And then she had some made to order by German clockmakers. She became a sort of an expert on the limits of endurance by the human body.</p>

        <p><b>JCW</b>: <em>Do you see her as a prototype for the Fascists?</em><br /><b>AC</b>: A kind of domestic Fascist. I see her as a sort of housewife that's got to live out her fantasies but could never get out of the role as a housewife. She's basically a housewife of a large castle and has to oversee a large staff. Her husband was a warrior. He killed a lot of Turks and raped and murdered, yet he's considered a great hero. She killed a few girls and she's considered a monster. </p>

        <p><b>JCW</b>: <em>He defended Christendom.</em><br /><b>AC</b>: But the question of Fascism is inter­esting because I think a lot of that malignant hatred that spored in the 16th century actually keeps surfacing over and over in Europe. lt’s connected directly to the kind of cruelty that is  combined in culture. High culture is no impediment. They played Wagner in Auschwitz and it's the same thing, she's extreme.</p>

        <ArticleSubtitle>Mind Floating</ArticleSubtitle>

        <p><b>JCW: </b><em>You refer to hypnogogy. Did Elizabeth Bathory seem to come out at you in this kind of state?</em><br /><b>AC</b>: Those are the kinds of visions and hallucinations you get in a semi­conscious state before you go to sleep. You’re not dreaming and you’re not awake. You like — are mind floating. I wrote this book in the summer of 1994. It was really hot in New Orleans and I was going out of my mind. A lot of it is like demonic possession. I had no fuck­ing idea what I was writing. </p>

        <blockquote>I think the only guide here was the narrative sense of trying to get the story told and trying to understand it. I think the concept of monster is sort of incomprehensible. I mean you can touch it or watch it — sometimes that's the hypnogogy ...</blockquote>

        <p><b>JCW</b>: <em>It must have been fun to create a female persona for yourself.</em><br /><b>AC</b>: Well, I wasn’t worried about that as much as her having a real personality. And that was no prob­lem after a while because she came out like gangbusters. She just came screaming right through.</p>
        
        <p><b>JCW</b>: <em>Do you find The 100 Days of Sodom & Gommorah, by Marquis de Sade, erotic?</em><br /><b>AC</b>: No. It’s a product of French rationalism. I think it's a perfect book about the Age of Reason turned on its head. It's like a syllo­gism. Whatever was considered bad, DeSade considered it good.</p>

        <p><b>JCW</b>: <em>DeSade would bave known about her, right?</em><br /><b>AC</b>: You'd think he would but the Hungarians have kept their secrets for four hundred years.</p>     
        <p><b>JCW</b>: <em>Because of the aristocratic thing ... same as Jack the Ripper? </em><br /><b>AC</b>: Because it became almost a myth. And no one's figured how to make money out of it. The Hungarians don’t want it known — so I'm going to catch a lot of shit over it. There are people who think l shouldn't have exposed a national monster.</p>
          <div style={{ maxWidth: `600px`, margin: `0 auto` }}>
            <Img fluid={data.detailImage.childImageSharp.fluid} alt="portrait" />
            <Caption><em><b>Andrei Codrescu</b></em> 1995</Caption>
          </div>
          <p></p>
        
        <p><b>JCW</b>: <em>But in a way she was the pinna­cle of an entire culture. Ruling class, educated, beautiful.</em><br /><b>AC</b>: Yeah, and she was cruel, unsparing, intelligent. It's a great picture of the modern age. The scholars call the 16th century the pre-modern age. Ir's actu­ally the century of Shakespeare and Queen Elizabeth, Kepler and King Mathias.</p>
        <p>The other thing about the 16th century is the discovery of the New World, so that everybody's universe expanded. They suddenly had a sense of all kinds of new possibilities. Exotic things were coming back like the strange feathers and birds and the monkey Elizabeth killed.</p>

        <p><b>JCW</b>: <em>Do you find any simi­larity with Dennis Cooper?</em><br /><b>AC</b>: I'm not so fond of his remote style of murder and dismemberment. I think it's a pose, frankly. You must keep a certain emotional distance from a character like this, otherwise you fall into it. There are two ways of doing that. One is to keep your emotional distance and try to get as close to under­standing it as you can. Another is too remotely cool: describing everything without venturing forth any analysis. I tried to be in her skin for as long as I could without actually killing anybody.</p>

        <p><b>JCW</b>: <em>Did it help you to have the male character Andre, sort of the alter-ego char­acter?</em><br /><b>AC</b>: Well, that's why I made him up. But also to try and figure out what happened between a time when some­body could do anything they wanted to if they had the power, and our time which is so hemmed in by various moral and societal proscrip­tions. That was a discovery of mine. The only difference between those people and the way they were then and the way we are now is guilt, a kind of cumulative guilt. It's quite easily removable, but it's there, thank God.</p>

        <p><b>JCW</b>: <em>Did you start it with her charac­ter and then develop her or did you have more of a plan?</em><br /><b>AC</b>: I started out by just getting the documents together. I made a huge pile of things. They were partly in old Hungarian and partly in Latin. I had to have them translated. My mother helped translate some of them. They didn"t have to be smuggled out. But I had to flirt with a Hungarian historian. The documents were scat­tered around the National Archives of Hungary. I had the archival numbers but the documents weren’t where they were supposed to be. I had to do some detective work. That's where the flirta­tion came in.</p>

        <p><b>JCW</b>: <em>Is Elizabeth immortal, as she wished to be?</em><br /><b>AC</b>: Parts of her are in every woman, you know... But she is locked in her body. She had chil­dren of her own. I didn't make a big deal about it, but what is weird is that her son was one of the judges at her trial, and probably one of the reasons she was treated so leniently. Imagine how he must have felt hearing about all this shit that his mother did.</p>

        <p><b>JCW</b>: <em>Did you have a model like Dante or a guide like Virgil? There is that one part about the ashes that is an allusion to the Inferno.</em><br /><b>AC</b>: That·s really a good question. I think the only guide here was the narrative sense of trying to get the story told and trying to understand it. I think the concept of monster is sort of incomprehensible. I mean you can touch it or watch it — sometimes that's the hypnogogy, but to understand you have to have maybe a taste for it. The only thing I had was the story. I kept thinking well, this is what happened, it goes from here to there.</p><p>I would say that there is a common store of horror that is available in Eastern European. Like a savings account full of horror, filled with body parts. lt's part of our common store, not just in Eastern Europe but in Western culture as well — a common store of hells.</p>

        <p><b>JCW</b>: <em>In the novel you have seemingly a thousand terms for the female geni­talia; you refer to the "rusty key taste."</em><br /><b>AC</b>: If you notice there are absolutely no vulgar words in the novel. Everyone is having an elegantly perverted time.</p>

        <p><b>JCW</b>: <em>Would Elizabeth have felt you treated her with sympathy?</em><br /><b>AC</b>: Yeah. Sometimes I felt possessed and I take no responsibility for her.</p>

        <p><b>JCW</b>: <em>If you were going to have a guide, like Dante had Virgil, who would you have?</em><br /><b>AC</b>: Ted Berrigan.</p>


          
        </Article>
      </Layout>
    )}
  />
)

export default AndreiPage