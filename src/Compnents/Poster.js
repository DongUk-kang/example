import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div``
const ImageContainer = styled.div``
const Img = styled.div``
const Rating = styled.span``
const Title = styled.span``
const Year = styled.span``

const Poster = ({id, title, rating, year, poster}) => {
    return (
        <Container>
            <ImageContainer>
                <Img/>
                <Rating>{rating}</Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <Year>{year}</Year>
        </Container>
    );
};

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string,
    poster: PropTypes.string

};

export default Poster;
