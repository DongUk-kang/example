import React from 'react';
import Poster from "../../Compnents/Poster";

const TvPresenter = ({ontheair, toprated, popular}) => {
    return (
        <div>
            {ontheair.map(item => (
                <Poster
                    title={item.original_name}
                    releas={item.first_air_date}
                    vote={item.vote_average}
                />
            ))}
            {toprated.map(item => (
                <Poster
                    title={item.original_name}
                    releas={item.first_air_date}
                    vote={item.vote_average}
                />
            ))}
            {popular.map(item => (
                <Poster
                    title={item.original_name}
                    releas={item.first_air_date}
                    vote={item.vote_average}
                />
            ))}



        </div>
    );
};

export default TvPresenter;
