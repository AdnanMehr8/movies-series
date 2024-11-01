import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './movie-list.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import MovieCard from '../movie-card/MovieCard';

const MovieList = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            try {
                if (props.type !== 'similar') {
                    switch (props.category) {
                        case category.movie:
                            response = await tmdbApi.getMoviesList(props.type, { params });
                            break;
                        default:
                            response = await tmdbApi.getTvList(props.type, { params });
                    }
                } else {
                    response = await tmdbApi.similar(props.category, props.id);
                }

                // Set items if response is valid; otherwise, set an empty array
                setItems(response?.results || []);
            } catch (error) {
                console.error('Error fetching movie list:', error);
                setItems([]); // Fallback to empty array on error
            }
        };

        getList();
    }, [props.category, props.type, props.id]);

    return (
        <div className="movie-list">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
                {items.length > 0 ? (
                    items.map((item, i) => (
                        <SwiperSlide key={i}>
                            <MovieCard item={item} category={props.category} />
                        </SwiperSlide>
                    ))
                ) : (
                    <p>No items available.</p> // Display a message if items are empty
                )}
            </Swiper>
        </div>
    );
};

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string,
};

export default MovieList;
