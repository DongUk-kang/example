import React from 'react';
import PropTypes from 'prop-types';
import Section from "../../Compnents/Section";

const MoviePresenter = ({nowPlaying, topRated, popular, upcoming}) => {
    return (
        <div>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title={"Now Playing"}>
                    {nowPlaying.map(item => (
                        <span>{item.title}</span>
                    ))}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title={"Top Rate"}>
                    {topRated.map(item => (
                        <span>{item.title}</span>
                    ))}
                </Section>
            )}
            {popular && popular.length > 0 && (
                <Section title={"Popular"}>
                    {popular.map(item => (
                        <span>{item.title}</span>
                    ))}
                </Section>
            )}
            {upcoming && upcoming.length > 0 && (
                <Section title={"Upcoming"}>
                    {upcoming.map(item => (
                        <span>{item.title}</span>
                    ))}
                </Section>
            )}

        </div>
    );
};

MoviePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    topRated: PropTypes.array,
    popular: PropTypes.array,
    upcoming: PropTypes.array
};

export default MoviePresenter;
