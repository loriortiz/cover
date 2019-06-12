/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "./header"
import "./layout.css"

function Wrapper(props) {
  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      {props.children}
    </div>
    )
}
function Footer(){
  return (
    <footer>
      © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
  )
}
function Layout(props) {
  return (
    <>
      <Header siteTitle="Cover" />
      <Wrapper> 
        <main>{props.children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
