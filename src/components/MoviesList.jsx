import { useContext, useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MyContext } from "../App";

const MoviesList = () => {
        

   const movieData = useContext(MyContext);

   
    
    return(
        <div className="movielist">
            
            {movieData.map((item, index) => (
                <MovieItem key={index} title={item.title} img={item.big_image} desc={item.description} rating={item.rating}/>

            ))}    

            
        </div>
    )
}

export default MoviesList;