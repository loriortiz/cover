import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components"
import Img from 'gatsby-image'



const Title = styled.small`
  font-weight: 400;
  line-height: normal;
  `
const StyledFigure = styled.figure`
  max-width: ${imgw};
  margin: 0 auto;
`

const Photo = ({ title, imgw, image }) => (
  <StyledFigure>
    <Img 
      fluid={image ? image.childImageSharp.fluid : {}}
      objectFit="none"  
      maxWidth={imgw} 
      margins="0 auto" 
      alt="photo" 
    />
    <figcaption>  
      <Title>{title}</Title>
    </figcaption>
  </StyledFigure>
);

Photo.propTypes = {
  title: PropTypes.string,
  imgw: PropTypes.number.isRequired,
  image: PropTypes.object.isRequired,
};

export default Photo;