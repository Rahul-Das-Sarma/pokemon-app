import * as actiontypes from "../actionTypes/actionTypes";

const reducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case actiontypes.POKEMON_DETAILS_LOADING:
      return {
        ...state,
        loading: true
      };
    case actiontypes.POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        PokeDetails: action.payload
      };
    case actiontypes.POKEMON_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
