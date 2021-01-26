import * as actionTypes from "../actionTypes/actionTypes";

const InitialState = { loading: false };

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.POKEMON_LOADING:
      return {
        ...state,
        loading: true
      };
    case actionTypes.POKEMON_SUCCESS:
      return {
        ...state,
        loading: false,
        allPokemon: action.payload,
        count: action.payload.count
      };
    case actionTypes.POKEMON_ERROR:
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
