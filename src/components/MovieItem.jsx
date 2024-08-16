import "../index.css";
import React from "react";
const MovieItem = ({title, img, desc, rating,ranking}) => {
  // console.log("Render element");
  
  return (
    <div className="movieitem">
      <h2>#{ranking}</h2>
        <img className="preview-img" src={img} alt="" />
      <h3>{rating}</h3>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
};
export default React.memo(MovieItem);
