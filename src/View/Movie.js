import React, {useState, useEffect} from 'react';
import { movieAPI } from "../api";

const Movie = () => {
    const [movies, setMovies] = useState([])

    const getdata = async () => {
       const [data, dataError] = await movieAPI.nowPlaying()
        setMovies(data)
    }


    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <h1>{movies.length}</h1>
        </div>
    );
};

export default Movie;
