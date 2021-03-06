import React from 'react';
import styled from "styled-components";

const Container = styled.div`
`
const ImageContainer = styled.div`
`

const Image = styled.div`
`

const Title = styled.span`
    font-size: 12px;
    font-weight: 800;
`

const Poster = ({title, releas, vote}) => {
    return (

        <Container>
            <ImageContainer>
                <Image>

                </Image>
                <span>{vote}</span>
            </ImageContainer>
            <Title>{title}</Title>
            <span>{releas}</span>
        </Container>

    );
};

export default Poster;
