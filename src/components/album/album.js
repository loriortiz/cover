import React from 'react'
import PropTypes from 'prop-types'
import Photo from './photo'
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
`

const Album = ({ photos }) => (
  <Container>
    {photos.map((photo, i) => (
      <Photo {...photo} key={i} />
    ))} 
  <Container/>
);

Album.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Album;