import React. { useState, useEffect } from 'react';
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
    const [detail, setDetail] = useState({
        loading: true,
        result: null,
        resultError: null
    })

    const getDetail = async () => {

    }

    useEffect(() => {
        getDetail()
    }, {})

    return (
        <div>
            <h1>sdsd</h1>
        </div>
    );
};

export default DetailContainer;
