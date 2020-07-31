import * as actionTypes from "../../../common/actionTypes/MovieList.actiontype";

export const initialState = {
    MovieList : [],
};
export const MovieReducer = (state = initialState, action) => { 
    switch(action.type){
        case actionTypes.SHOW_MOVIELIST:
        return {
            ...state,
            MovieList : action.payload,
        };
        default:
        return state;
    }
}