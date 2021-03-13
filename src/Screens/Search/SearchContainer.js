import React, {useState} from 'react';
import SearchPresneter from "./SearchPresenter";




const SearchContainer = () => {
    const [keyword, setKeyword] = useState("")
    const [results, setResults] = useState({
        movies : [],
        shows : [],
        moviesError: null,
        showsError: null,
        loading: false
    })

    return (
        <SearchPresneter />
    );
};

export default SearchContainer;
