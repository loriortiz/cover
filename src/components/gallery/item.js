import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Img from 'gatsby-image'

const Title = styled.h3` 
  font-weight: 600;
`
const Copy = styled.p`
  font-size: 0.9em;
  font-weight: 400;
  margin-bottom: 2rem;
`
const Date = styled.h6`
  margin-bottom: 0;
`

const Item = ({ title, copy, date, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Copy>{copy}</Copy>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
