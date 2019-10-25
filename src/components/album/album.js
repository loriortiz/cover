import React from 'react';
import PropTypes from 'prop-types'
import Photo from './photo'

const Album = ({ photos }) => (
  <>
    {photos.map((photo, i) => (
      <Photo {...photo} key={i} />
    ))} 
  </>
);

Album.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Album;