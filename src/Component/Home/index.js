import MovieItem from "../MovieItem"
import { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Navbar from "../Navbar";
import "./index.css";



const MOVIES = [
  {
    id: 1,
    title: "Leo",
    image:
      "https://akm-img-a-in.tosshub.com/indiatoday/styles/medium_crop_simple/public/2023-09/f6tsfwpa4aa_gtg.jpg?VersionId=3YZPKlG4indGck4QqrfIVfwDOiJQjaZM&size=750:*",
  },
  {
    id: 2,
    title: "Caption Millor",
    image:
      "https://m.media-amazon.com/images/M/MV5BNzlkMTJkMWItYjliNy00YjA3LWIwZjYtMDY0OTg2MGYzZGNjXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 3,
    title: "Kurup",
    image:
      "https://onlookersmedia.in/wp-content/uploads/2021/07/kurup-team-release-special-poster-dulquer-salmaans-birthday-2.jpg",
  },
  {
    id: 4,
    title: "Avengers",
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/93/Vikram_2022_poster.jpg",
  },
];

class Home extends Component {
  
  
  render() {
    const setting = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    

    return (
      <div className="home-container">
        <Navbar />
        <section>
          <div className="slider-container">
            <Slider {...setting}>
              <div className="carosel-slider">
                <img
                  src= "https://i.ytimg.com/vi/IqwIOlhfCak/maxresdefault.jpg"
                  className="carosel-poster"
                  alt="carosel"
                />
              </div>
              <div className="carosel-slider">
                <img
                  src="https://e1.pxfuel.com/desktop-wallpaper/777/873/desktop-wallpaper-bachelor-tamil-movie-posters-bachelor-tamil.jpg"
                  className="carosel-poster"
                  alt="carosel"
                />
              </div>
              <div className="carosel-slider">
                <img
                  src="https://igimages.gumlet.io/tamil/gallery/movies/ranjithrajini2017/kaalamoviephotos060618_2.jpg?w=376&dpr=2.6"
                  className="carosel-poster"
                  alt="carosel"
                />
              </div>
            </Slider>
          </div>
        </section>
        
        <div className="recommand-details">
          <h1 className="rec-movie">Recommended Movies</h1>
          <div className="rec-card">
           {
            MOVIES.map(eachMovie => 
              <MovieItem key = {eachMovie.id}  movieData = {eachMovie} />
              )
           }
          </div>
        </div>
        <div>
          <div className="leo">         
          <img src="leo-poster.png" alt="leo" className="leo-poster"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
