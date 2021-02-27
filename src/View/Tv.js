import React, {useState, useEffect} from 'react';
import { tvAPI } from "../api";

const Tv = () => {
    const [tvs, setTvs] = useState([])

    const getdata = async () => {
        const [data, dataError] = await tvAPI.ontheair()
        setTvs(data)
    }




    useEffect(() => {
        getdata()
    }, [])
    return (
        <div>
            <h1>{tvs.length}</h1>
        </div>
    );
};

export default Tv;
