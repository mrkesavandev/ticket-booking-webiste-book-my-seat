import { Link } from "react-router-dom"
import "./index.css"

const MovieItem = props => {
   const {movieData} = props
   const { title, image} = movieData

   return (
    <Link to = "/TicketBooking" className="link">
    <li className="card" >       
      <img src = {image} alt = {title} className="image-card" />
      <h1 className="title">{title}</h1>
      </li> 
      </Link>
   )
}


export default MovieItem