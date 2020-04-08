import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"

const ArticleWrap = styled.article`
  max-width: 650px;
  margin: 0 auto;
`
const ArticleTitle = styled.h3`
  font-size: 3rem;
  text-shadow: 1px 0 0 #000, 2px 0 0 rgba(255, 5, 0, 1);
  text-transform: uppercase;
  font-style: italic;
`
const Caption = styled.small`
  font-size: 0.80em;
  line-height: 0.08em;
`

const Article = () => (
  <Layout>
    <ArticleWrap>
    

    </ArticleWrap>
  </Layout>
  )

export default Article