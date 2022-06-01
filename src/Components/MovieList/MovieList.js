import React from 'react'
import MovieCrad from '../MovieCard/MovieCrad'
import "./MovieList.css"

const MovieList = ({movies,deleteMovie}) => {
  return (
    <div style={{display:"flex",flexDirection: "row"}}  >{
      movies.map( (el,index)=>(
          <MovieCrad key={index} el={el} deleteMovie={deleteMovie} />
      ))
      }
      </div>
  )
}

export default MovieList