import React from 'react'
import PropTypes from 'prop-types'
import Photo from './photo'
<<<<<<< HEAD
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
  
  @media (max-width: 400px) {
      display: block;
      padding: 0;
    }
  }
`

||||||| merged common ancestors
=======
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
`
>>>>>>> useStaticQuery

const Album = ({ photos }) => (
  <Container>
    {photos.map((photo, i) => (
      <Photo {...photo} key={i} />
    ))} 
<<<<<<< HEAD
  </Container>
||||||| merged common ancestors
  </>
=======
  <Container/>
>>>>>>> useStaticQuery
);

Album.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Album;