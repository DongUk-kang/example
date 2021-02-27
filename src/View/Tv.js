import React, {useState, useEffect} from 'react';
import { tvAPI } from "../api";

const Tv = () => {
    const [tvs, setTvs] = useState({
        ontheair: [],
        popular: [],
        toprated: [],
        lastestError: null,
        ontheairError: null,
        popularError: null,
        topratedError: null
    })

    // lastest: () => getAnything("/tv/lastest"),
    //     ontheair: () => getAnything("/tv/on_the_air"),
    //     popular: () => getAnything("/tv/popular"),
    //     toprated: () => getAnything("/tv/toprated"),

    const getdata = async () => {
        const [ontheair, ontheairError] = await tvAPI.ontheair()
        const [popular, popularError] = await tvAPI.popular()
        const [toprated, topratedError] = await tvAPI.toprated()
        console.log(ontheair)
        setTvs({

            ontheair,
            popular,
            toprated,
            ontheairError,
            popularError,
            topratedError
        })
    }




    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <h1>{tvs.ontheair.length}</h1>
        </div>
    );
};

export default Tv;
