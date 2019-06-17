import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Image from "../components/image"
import Nav from "../components/nav"

const SiteHeader = styled.header`
  background: #fcf0e6; 
  margin-bottom: 1.45rem;
`
const Inner = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem 1rem 1.0875rem;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`
const HomeLink = styled(Link)`
  text-decoration: none;
  flex-grow: 1; 
`
const Logo = styled.div`
  width: 300px;
  height: auto;
  background-color: transparent;
  display: inline-block;
`
const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Inner> 
        <HomeLink to="/">
         <Logo>
           <Image />
         </Logo>  
        </HomeLink>
      <Nav />
    </Inner>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}


export default Header
