import { connect } from 'react-redux';
import { MovieListAction } from '../modules/MovieListAction';
import MovieList from '../component/MovieList';


const mapDispatchToProps = (dispatch) => {
  return {
    setAddMovieList: (data) => dispatch(MovieListAction.setAddMovieList(data))
  };
};


const mapStateToProps = (state) => {
  
  return {
    MovieList: state.MovieReducer.MovieList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
 
 