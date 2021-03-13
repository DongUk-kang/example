import React, {useState} from 'react';
import SearchPresenter from "./SearchPresenter";




const SearchContainer = () => {
    const [keyword, setKeyword] = useState("")
    const [results, setResults] = useState({
        movies : [],
        shows : [],
        moviesError: null,
        showsError: null,
        loading: false
    })

    const onChange = (event) => setKeyword(event.target.value)


    const onSubmit = async () => {
        console.log(keyword)

    }

    return (
        <SearchPresenter
            {...results}
            // movies={results.movies}
            // shows={results.shows}
            keyword={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
            // loading={results.loading}
            // moviesError={results.moviesError}
            // showsError={results.showsError}
        />
    );
};

export default SearchContainer;
