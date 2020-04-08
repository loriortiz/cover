import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"

const SiteNav = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: futura-pt-condensed, sans-serif;
  letter-spacing: 0.02rem;
  padding-top: 0.7rem;
  flex-grow: 2;
`
const NavList = styled.ul`
  display:flex;
  justify-content: flex-end;
  font-family: futura-pt-condensed, sans-serif;
  margin-bottom: 0;
`
const ListItem = styled.li`
  display: inline-block;
  padding: 0 2rem;
` 
const LinkItem = styled(Link)`
  font-size: 1.4rem;
  font-weight: bold;
  text-decoration: none;
  :hover {
    color: black;
  }
`
const Nav = () => (
  <SiteNav>
    <NavList>
      <ListItem>
        <LinkItem to="/about/">About</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem to="/articles/">Articles</LinkItem>
      </ListItem>
      <ListItem>
        <LinkItem to="/contact/">Contact</LinkItem>
      </ListItem>
    </NavList>
  </SiteNav>
)

export default Nav