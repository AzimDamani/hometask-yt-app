import { useContext, useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MyContext } from "../App";
import React from "react";
const MoviesList = () => {
  const { filteredMovie }= useContext(MyContext);

  return (
    <div className="movielist">
      {filteredMovie.map((item, index) => (
        <MovieItem
          key={index}
          title={item.title}
          img={item.big_image}
          desc={item.description}
          rating={item.rating}
          ranking={item.rank}
        />
      ))}
    </div>
  );
};

export default React.memo(MoviesList);
