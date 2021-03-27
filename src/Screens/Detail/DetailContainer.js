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
        videos: [],
        resultError: null
    })


    const getDetail = async () => {
        const [result, resultError] = location.pathname.includes("/movie/")
        ? await movieAPI.detail(id)
        : await tvAPI.detail(id)

        const [similar, similarError] = location.pathname.includes("/movie/")
        ? await movieAPI.similar(id)
        : await tvAPI.similar(id)

        const [videos, videosError] = location.pathname.includes("/movie/")
        ? await movieAPI.video(id)
        : await tvAPI.video(id)


        // const [video, videoError] = location.pathname.includes("/movie/")
        // ? await movieAPI.video(id)
        // : await tvAPI.video(id)

        setDetail({
            loading: false,
            result: result,
            similar: similar,
            videos: videos,
            resultError: resultError,
            similarError: similarError,
            videosError: videosError
        })

        console.log(detail.videos)


    }

    useEffect(() => {
        getDetail()
    }, [])

    return (
        <DetailPresenter
            loading={detail.loading}
            result={detail.result}
            similar={detail.similar}
            videos={detail.videos}
            error={detail.resultError}
        />
    );
};

export default DetailContainer;
