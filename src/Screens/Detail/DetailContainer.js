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
        resultError: null
    })

    const getDetail = async () => {
        const [result, resultError] = location.pathname.includes("/movie/")
        ? await movieAPI.detail(id)
        : await tvAPI.detail(id)

        setDetail({
            loading: false,
            result: result,
            resultError: resultError
        })
        console.log(result)


    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <DetailPresenter
            loading={detail.loading}
            result={detail.result}
            error={detail.resultError}
        />
    );
};

export default DetailContainer;
