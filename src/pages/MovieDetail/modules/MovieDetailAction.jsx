import clients from '../../../common/clients';
import * as actionTypes from "../../../common/actionTypes/MovieDetail.actiontype";

export const MovieDetailAction = {
    setAddMovieDetailList: (data) => {
        return async (dispatch) => {
          return clients.AllMovies.get('', data).then(res =>{
            dispatch({
                type : actionTypes.ADD_MOVIEDETAILS,
                payload : res.data
            });
        }
            ).catch(
              error => {
              return (error.response.data);   
            }
            );
          }
      },
    
    
}
