import React from 'react';
import styled from "styled-components";

const Container = styled.div`
`
const ImageContainer = styled.div`
`

const Image = styled.div`
`

const Poster = ({title, releas, vote}) => {
    return (

        <Container>
            <ImageContainer>
                <Image>

                </Image>
                <span>{vote}</span>
            </ImageContainer>
            <span>{title}</span>
            <span>{releas}</span>
        </Container>

    );
};

export default Poster;
