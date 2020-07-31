import { combineReducers } from "redux";
import { MovieDetailReducer } from '../pages/MovieDetail/modules/MovieDetail.reducer';
import { MovieReducer } from '../pages/MovieList/modules/MovieList.reducer';
export default combineReducers({
    MovieDetailReducer : MovieDetailReducer,
    MovieReducer: MovieReducer,
});
