import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Container = styled.div`
  padding-top: 40px;
`

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`

const Input = styled.input`
    all: unset;
    font-size: 32px;
    width: 100%;
`

const SearchPresenter = ({movies, shows, onSubmit, keyword, onChange, loading, moviesError, showsError}) => {
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
    moviesError: PropTypes.string,
    showsError: PropTypes.string
}

export default SearchPresenter;
