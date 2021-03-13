import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 45px;
  //align-items: ;
  margin-top: 120px;
`;

const Loading = () => {
    return (
        <Container>
            <span role="img" aria-label="loading">
                🕰
            </span>
            {/*<img src={require("../Img/loading.gif")} alt="Loading" />*/}
        </Container>
    );
};

export default Loading;
