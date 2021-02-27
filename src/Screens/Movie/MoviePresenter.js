import React from 'react';
import Poster from "../../Compnents/Poster";



const MoviePresneter = ({upcoming, nowPlaying, toprated, popular}) => {
    return (
        <div>
            {upcoming.map(item => (
               <Poster
                   title={item.title}
                   releas={item.release_date}
                   vote={item.vote_average}
               />
            ))}
            {nowPlaying.map(item => (
                <Poster
                    title={item.title}
                    releas={item.release_date}
                    vote={item.vote_average}
                />


            ))}
            {toprated.map(item => (
                <Poster
                    title={item.title}
                    releas={item.release_date}
                    vote={item.vote_average}
                />

            ))}
            {popular.map(item => (
                <Poster
                    title={item.title}
                    releas={item.release_date}
                    vote={item.vote_average}
                />
            ))}
        </div>





    );
};

export default MoviePresneter;
