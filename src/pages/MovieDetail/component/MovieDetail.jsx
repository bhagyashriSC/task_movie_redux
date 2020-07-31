import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../scss/MovieDetail.scss';
import { Link } from "react-router-dom";
import Star from '../../../components/UI_Component/Star/Star';
import Buttons from '../../../components/UI_Component/Buttons/Buttons';

function MovieDetail(props) {  
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    const filteredItems = props.MovieDetails.map((item) => {     
    if(item.movieId == props.match.params.id){
      setMovieDetails([item]);
      return;
    }
    else{
      return;
    }
    });
    }, []);
  const showAll = () =>{      
      props.history.push('/home');    
  }
  
  return (
    <div className="movie_container">
      <br /><br />
      <section className="blue_theme">
        <Container>
          <Row>
          {movieDetails.map(movie => (
            <>
            <Col xs={12} md={8} lg="3" >
            <img className="" style={{padding:"20px 0px"}} src={movie.img} alt="" style={{width: "100%", paddingTop:"15px"}} />
            <hr />
           
                      <h6 className="small-title"> Production companies: <br /><span>{movie.production_companies}</span></h6>
                      <h6 className="small-title">Produced by‎: <br /> <span>{movie.produced_by}</span></h6>
                      <h6 className="small-title">Directors: <br /><span>{movie.Directors} </span></h6>
                      <h6 className="small-title">Characters: <br /><span>{movie.characters}</span></h6>
                      <br /><br />
            </Col>
           
            <Col xs={12} md={8} lg="9" >
              <h2 className="text-center">{movie.movieName}</h2>                
            <hr/>
              <h6 className="text-capitalize">language: <span className="text_span_color">{movie.language}</span> | 
              Category: <span className="text_span_color">{movie.category} </span> | 
              Release Date: <span className="text_span_color">{movie.releaseDate} </span> | 
              Duration: <span className="text_span_color">{movie.duration} </span></h6>
              <hr />
              <div className="star-rating">
                        <Star rating={movie.rating} />
                      </div>
                      <hr />
              <h4>About</h4>
              <p>{movie.description}</p>             
              <br/><br/>            
            </Col>
            <Col className="copy-text">
            <Buttons
                       value="Show All movies"
                       onClick={() => showAll()}                       
                        />
            
            </Col>
            </>
        ))}           
          </Row>
        </Container>
        <br /><br /><br /><br />
      </section>
    </div>
  )
}

export default MovieDetail;