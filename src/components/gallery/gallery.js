import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components"
import Item from './item'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  margin: 2rem 0;
`

const Gallery = ({ items }) => (
  <Container>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
);

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Gallery;
