import * as actionTypes from "../../../common/actionTypes/MovieDetail.actiontype";

export const initialState = {
      MovieDetail : [],
};


export const MovieDetailReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_MOVIEDETAILS:
        return {
            ...state,
            MovieDetail : action.payload,
        };
        default:
        return state;
    }
}