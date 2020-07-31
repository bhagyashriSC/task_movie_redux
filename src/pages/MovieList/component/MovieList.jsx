import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Buttons from '../../../components/UI_Component/Buttons/Buttons';
import Textbox from '../../../components/UI_Component/Textbox/Textbox';
import Star from '../../../components/UI_Component/Star/Star';
import '../scss/MovieList.scss';
import paginate from 'paginate-array';


class MovieList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        searchMovie: '',
        MovieList: [],
        size: 4,
        page: 1,
        currPage: null
      }    
      this.showMovieDetails = this.showMovieDetails.bind(this);
      this.searchMe = this.searchMe.bind(this);
      this.previousPage = this.previousPage.bind(this);
      this.nextPage = this.nextPage.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    componentDidMount() {
      this.getMovieList();
      const { page, size } = this.state;
      const MovieList = this.props.MovieList;
      const currPage = paginate(MovieList, page, size);

        this.setState({
          ...this.state,
          MovieList,
          currPage
        });
    }
  
    getMovieList = async () => {
      this.props.setAddMovieList();
      this.setState({ MovieList: this.props.MovieList });
    }
    showMovieDetails (e) {
      let path = `movieDetail/${e}`; 
      this.getMovieList();    
      this.props.history.push(path);     
    }
    searchMe(val){     
      this.setState({ searchMovie: val });                    
      if(val.length > 0){
        const filteredItems = this.state.MovieList.filter((item) => item.movieName.toLowerCase().includes(val) || item.category.toLowerCase().includes(val) || item.language.toLowerCase().includes(val));
       // this.setState({MovieList : filteredItems})
        const { page, size } = this.state;       
        const currPage = paginate(filteredItems, page, size);  
          this.setState({
            MovieList : filteredItems,
            currPage
          });
      }
      else{          
        const { page, size } = this.state;
        const MovieList = this.props.MovieList;
        const currPage = paginate(MovieList, page, size);  
          this.setState({
            ...this.state,
            MovieList,
            currPage,
            searchMovie:""
          });
      }      
    }
    previousPage() {
      const { currPage, page, size, MovieList } = this.state;  
      if (page > 1) {
        const newPage = page - 1;
        const newCurrPage = paginate(MovieList, newPage, size);
  
        this.setState({
          ...this.state,
          page: newPage,
          currPage: newCurrPage
        });
      }
    }
  
    nextPage() {
      const { currPage, page, size, MovieList } = this.state;
  
      if (page < currPage.totalPages) {
        const newPage = page + 1;
        const newCurrPage = paginate(MovieList, newPage, size);
        this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
      }
    }
  
    handleChange(e) {
      const { value } = e.target;
      const { MovieList, page } = this.state;
  
      const newSize = +value;
      const newPage = 1;
      const newCurrPage = paginate(MovieList, newPage, newSize);
  
      this.setState({
        ...this.state,
        size: newSize,
        page: newPage,
        currPage: newCurrPage
      });
    }
    render() {
      const { MovieList, rating, searchMovie, page, size, currPage } = this.state;
      return (
        <div className="movie-list_container">
          <section className="blue_theme">
            <div className="search_container">
            <Col xs={12} md={12} lg={12} >   
                {/*----  <h2 className="text-center">Search Movie Here</h2> */}
                  <Row className="justify-content-md-center">                       
                <Col xs lg="4" className="aaa">
                <Textbox
                  value={searchMovie}
                  fieldLabel=""
                  id="searchMovie"
                  type="text"
                  placeholder="Search Movie Here"
                  title="Enter movie name or category or language"
                  name="searchMovie"
                  aria-label="Enter movie name"
                  aria-describedby="Enter movie name"
                  onChange={(val) => {
                   this.searchMe(val)                  
                  }}
                  style={{marginTop:"8px"}}
                />
                <div className="searchIcon"  title="Enter movie name or category or language"><i className="fa fa-search"></i></div>
                </Col>
              </Row>   
             
                </Col>
                </div>
                {searchMovie === "" ? 
                 <Carousel>
                 {this.props.MovieList.map(images => {
                   if(images.poster !== ""){
                   return( <Carousel.Item onClick={() => this.showMovieDetails(images.movieId)}>
                     <img
                       className="d-block w-100"
                       src={images.poster}
                       alt="First slide"
                     />
                     <Carousel.Caption>
                       <h3>{images.movieName}</h3>
                       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                     </Carousel.Caption>
                   </Carousel.Item>);
                 } 
               })}         
             </Carousel>
                : null}
         
            <Container>
              <hr />
              <div className={searchMovie !== "" ? "margin-top-50" : null}></div>
              <div>
              <button onClick={this.previousPage} className="transperent-btn" style={{marginRight:"10px"}}>Previous Page</button>
              <button onClick={this.nextPage} className="transperent-btn">Next Page</button>
              <br /><br />
              </div>
              <Row>
             
              {searchMovie !== "" ? <><br /><br /><br /></> : null } 
        {currPage &&         
            currPage.data.map(movie =>             
                 <Col  md={3} xs={2} sm={2} key={movie.movieId}>
                 <div className="card" key={movie.movieId}>
                   <div className="box">
                     <div className="img"  onClick={() => this.showMovieDetails(movie.movieId)} >
                       <img src={movie.img} title={movie.movieName} alt={movie.movieName} />
                     </div>
                     <h3>{movie.movieName}<br /><span>{movie.language} | {movie.category}</span></h3>
                     <div className="star-rating">
                       <Star rating={movie.rating} />
                     </div>
                     <p>
                       Release Date: <b>{movie.releaseDate} </b><br />
                       Duration:  <b>{movie.duration}</b>
                     </p>
                     <Buttons
                       value="Show Details"
                       onClick={() => this.showMovieDetails(movie.movieId)}                       
                        />
                   </div>
                 </div>
               </Col>           
            )}
     
              </Row>
            </Container>
            <br /> <br />
          </section>
        </div>
      )
    }
  }
  
  export default MovieList;