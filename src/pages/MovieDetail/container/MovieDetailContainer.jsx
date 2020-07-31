import { connect } from 'react-redux';
import { MovieDetailAction } from '../modules/MovieDetailAction';
import MovieDetail from '../component/MovieDetail';


const mapDispatchToProps = (dispatch) => {
  return {
    setSingleMovieDetail: (data) => dispatch(MovieDetailAction.setSingleMovieDetail(data))
  };
};


const mapStateToProps = (state) => { 
  return {
    MovieDetails: state.MovieReducer.MovieList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
 
 