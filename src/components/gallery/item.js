import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Img from 'gatsby-image'

const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 2rem 1rem;
`
const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
`
const Issue = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
  font-style: oblique;
`

const Item = ({ title, copy, issue, image }) => (
  <figure>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    <figcaption>
      <Title>{title}</Title>
      <Issue>{issue}</Issue>
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
