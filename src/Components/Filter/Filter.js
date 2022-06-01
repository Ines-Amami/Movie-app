import React  from 'react'
import"./Filter.css";
import ReactStars from "react-rating-stars-component";
const Filter = ({setsearch,setRate,rate}) => {

  const ratingChanged = (newRating) => {
    setRate(newRating)
  }
  return (
    <div>
  <form className="nav" >
<input className="search-box" type="text" name="search" placeholder="Search.." onChange={(e)=>setsearch(e.target.value)} ></input>
<ReactStars  count={10}  edit={true} size={50} activeColor="#ffd700" value={rate} onChange={ratingChanged} />
</form>
    </div>
  )
}

export default Filter