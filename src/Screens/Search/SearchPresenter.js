import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
  padding-top: 80px;
`

const Form = styled.form`
  
`

const Input = styled.input`
`

const SearchPresenter = ({movies, shows, onSubmit, keyword, onChange, loading, error}) => {
    return (
        <Container>
            <Form onSubmit={onSubmit}>

                <Input
                    placeholder={"Search Movie and Tv Show"}
                    value={keyword}
                    onChange={onChange}
                />
            </Form>
        </Container>
    );
};

SearchPresenter.propTypes = {
    movies: PropTypes.array,
    shows: PropTypes.array,
    keyword: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
}

export default SearchPresenter;
