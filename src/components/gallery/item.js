import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import styled from "styled-components"
import Img from 'gatsby-image'


const LinkedItem = styled(Link)`
  text-decoration: none;
  color: black;
`
const Title = styled.h3` 
  font-weight: 600;
  margin-bottom: 0.22rem;
`
const Copy = styled.p`
  font-size: 0.9em;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 2rem;
`
const Date = styled.h4`
  margin-bottom: 0;
`

const Item = ({ title, slug, copy, date, image }) => (
  <LinkedItem to={`/${slug}/`}>
    <figure>
      <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
      <figcaption>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Copy>{copy}</Copy>
      </figcaption>
    </figure>
  </LinkedItem>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;


