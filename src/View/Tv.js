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
            <div>
                <h1>On the air</h1>
                {tvs.ontheair.map(item => (
                    <h1>{item.original_name}</h1>

                ))}
            </div>

            <div>
                <h1>Popular</h1>
                {tvs.popular.map(item => (
                    <h1>{item.original_name}</h1>

                ))}

            </div>
            <div>
                <h1>Top rated</h1>
                {tvs.toprated.map(item => (
                    <h1>{item.original_name}</h1>

                ))}
            </div>

        </div>
    );
};

export default Tv;
