import React from 'react';
import './SingleCart.css'
const SingleCart = ({movie,handleWatchTime}) => {
    const {movieName,poster,watchTime,imdbRating,description,category} = movie;
    return (
        <div className='side-cart'>
            <div className="movie-cart card text-center w-100 m-auto col-md-6">
                <div className="movie-poster w-50 m-auto">
                    <img className='w-50 mb-3' src={poster} alt="" />
                </div>
                <h3>{movieName}</h3>
                <p>{description}</p>
                <div className="timeAndrating d-flex justify-content-around ">
                    <p>Watch Time: {watchTime}m</p>
                    <p>IMDB Rating: {imdbRating} Starts</p>
                </div>
                <button onClick={()=> handleWatchTime(watchTime)} className='btn btn-info w-75 m-auto'>Book Now</button>
            </div>
        </div>
    );
};

export default SingleCart;