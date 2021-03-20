import React, { useState, useEffect } from 'react';
import DetailPresenter from "./DetailPresenter";
import {movieAPI, tvAPI} from "../../api";
import { useParams, useLocation } from "react-router-dom"




const DetailContainer = ({ pathname }) => {

    let { id } = useParams()
    let location = useLocation()


    const [detail, setDetail] = useState({
        loading: true,
        result: {},
        similar: [],
        resultError: null
    })

    const getDetail = async () => {
        const [result, resultError] = location.pathname.includes("/movie/")
        ? await movieAPI.detail(id)
        : await tvAPI.detail(id)

        const [similar, similarError] = location.pathname.includes("/movie/")
        ? await movieAPI.similar(id)
        : await tvAPI.similar(id)

        setDetail({
            loading: false,
            result: result,
            similar: similar,
            resultError: resultError
        })
        console.log(similar)


    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <DetailPresenter
            loading={detail.loading}
            result={detail.result}
            similar={detail.similar}
            error={detail.resultError}
        />
    );
};

export default DetailContainer;
