import React, { useState } from 'react'
import { category } from '../../api/tmdbApi';
import { MovieSearch } from '../movie-grid/MovieGrid';
import './search.scss';
const Search = () => {
    const [searchCategory, setSearchCategory] = useState(category.movie); // Default to movies

    // Function to handle category change
    const handleCategoryChange = (event) => {
        setSearchCategory(event.target.value);
    };
  return (
    <div className="section mb-3"
    style={{  justifyItems: 'center'}}
  >
            <h2>Search for Movies or TV Shows</h2>
            {/* Category selection */}
            <div className="category-selection">
                <label>
                    <input 
                        type="radio" 
                        value={category.movie} 
                        checked={searchCategory === category.movie} 
                        onChange={handleCategoryChange} 
                    />
                    Movies
                </label>
                <label>
                    <input 
                        type="radio" 
                        value={category.tv} 
                        checked={searchCategory === category.tv} 
                        onChange={handleCategoryChange} 
                    />
                    Series
                </label>
            </div>
            {/* Render MovieSearch with the selected category */}
            <MovieSearch category={searchCategory} />
        </div>
  )
}

export default Search