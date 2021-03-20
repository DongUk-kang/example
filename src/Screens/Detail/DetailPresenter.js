import React from 'react';
import PropTypes from 'prop-types';

const DetailPresenter = ({result, loading, error}) => {
    return (
        <div>

        </div>
    );
};

DetailPresenter.propTypes = {
    result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default DetailPresenter;
