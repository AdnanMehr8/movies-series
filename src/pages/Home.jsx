// import React from 'react';
// import {Link} from 'react-router-dom';

// import { OutlineButton } from '../components/button/Button';
// import HeroSlide from '../components/hero slide/HeroSlide';
// import MovieList from '../components/movie-list/MovieList';

// import { category, movieType, tvType } from '../api/tmdbApi';

// const Home = () => {
//   return (
//     <>
//       <HeroSlide/>
//       <div className="container">
//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Trending Movies</h2>
//             <Link to= "/movie">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.movie} type={movieType.popular}/>
//         </div>

//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Top Rated Movies</h2>
//             <Link to= "/movie">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.movie} type={movieType.top_rated}/>
//         </div>

//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Trending TV</h2>
//             <Link to= "/tv">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.tv} type={tvType.popular}/>
//         </div>

//         <div className="section mb-3">
//           <div className="section__header mb-2">
//             <h2>Top Rated TV</h2>
//             <Link to= "/tv">
//               <OutlineButton className="small">View more</OutlineButton>
//             </Link>
//           </div>
//           <MovieList category={category.tv} type={tvType.top_rated}/>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Home;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { OutlineButton } from '../components/button/Button';
import HeroSlide from '../components/hero slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { category, movieType, tvType } from '../api/tmdbApi';
import { MovieSearch } from '../components/movie-grid/MovieGrid';
import Search from '../components/search/search';

const Home = () => {

  return (
    <>

      <HeroSlide />
   <Search />

      <div className="container">
        {/* Trending Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>

        {/* Top Rated Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        {/* Now Playing Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Now Playing Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.now_playing}/>
        </div>

            {/* airing_today Movies Section */}
    <div className="section mb-3">
          <div className="section__header mb-2">
            <h2> Airing Today Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.airing_today}/>
        </div>

            {/* on_the_air Movies Section */}
    <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>On the air Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.on_the_air}/>
        </div>

        {/* upcoming Movies Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Upcoming Movies</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.upcoming}/>
        </div>



        {/* Trending TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending TV</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>

        {/* Top Rated TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Rated TV</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>

         {/* Now Playing TV Section */}
         <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Now Playing TV</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.now_playing}/>
        </div>

        
            {/* on_the_air TV Section */}
    <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>On the air TV</h2>
            <Link to= "/movie">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air}/>
        </div>

        
        {/* Airing Today TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Airing Today</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.airing_today}/>
        </div>

        {/* Upcoming TV Shows Section */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Upcoming Shows</h2>
            <Link to= "/tv">
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.upcoming}/>
        </div>
      </div>
    </>
  );
}

export default Home;
