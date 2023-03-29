import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css'
const Home = ({handleWatchTime}) => {
    const [movies,setMovie] = useState([])
    useEffect(()=>{
        fetch(`data.json`)
        .then(res => res.json())
        .then(data => setMovie(data))
    },[])
    return (
        <div>
          <div className="movie-container  row">
            {
                movies.map(movie => <SingleCart 
                // key={movieName}
                handleWatchTime={handleWatchTime}
                movie={movie}
                ></SingleCart>)
            }
          </div>
        </div>
    );
};

export default Home;