import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Img from 'gatsby-image'



const Title = styled.small`
  font-size: 0.80em;
  line-height: 0.08em;
`

const Photo = ({ title, width, image }) => (
  <figure>
    <Img 
      fluid={image ? image.childImageSharp.fluid : {}}
      objectFit="none"  
      maxWidth={width} 
      width="100%" 
      alt="photo" 
    />
    <figcaption>  
      <Title>{title}</Title>
    </figcaption>
  </figure>
 
  
);

Photo.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Photo;