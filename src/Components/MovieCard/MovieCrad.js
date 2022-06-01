import React from "react";
import ReactStars from "react-rating-stars-component";
import "./MovieCard.css";

const MovieCrad = ({ el,deleteMovie  }) => {
  
  return (
   
    <div className="Container">
   <div className="card">
  <div className="image">
    <img src={el.posterURL} alt="" />
  </div>
  <div className="details">
    <div className="center">
      <h1>{el.title}</h1>
      <p>{el.description}</p>
    <  button  onClick={()=>deleteMovie(el.id)}>Delete Movie    </button>
      <ReactStars  edit={false} name="rate" starColor="red" value={el.rating} count={10}/>
    </div>
  </div>
</div>
</div>

  );
};

export default MovieCrad;
