import clients from '../../../common/clients';
import * as actionTypes from "../../../common/actionTypes/MovieList.actiontype";

export const MovieListAction = {
  setAddMovieList: (data) => {
        return async (dispatch) => {
          return clients.AllMovies.get('', data).then(res =>{   
            dispatch({
                type : actionTypes.SHOW_MOVIELIST,
                payload : res.data
            });
        }
            ).catch(
              error => {                
              return ("error.response.data");   
            }
            );
          }
      },
    
    
}
