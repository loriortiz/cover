import React from 'react'
import { Link } from "gatsby"
import styled from "styled-components"
import logoPath from '../components/logo.gif'

const SiteNav = styled.div`
  display: flex;
  justify-content: flex-end;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.02rem;
  padding-top: 0.7rem;
  flex-grow: 2;
`
const NavList = styled.ul`
  display:flex;
  justify-content: flex-end;
  margin-bottom: 0;
`
const ListItem = styled.li`
  display: inline-block;
  padding: 0 2rem;
` 
const LinkItem = styled(Link)`
  text-decoration: none;
`
const Nav = () => (
  <SiteNav>
    <NavList>
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