import * as actionTypes from "../actionTypes/actionTypes";

const reducer = (state = { Myfavourites: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_FAVOURITES:
      const item = action.payload;

      const existItem = state.Myfavourites.find(
        (existingItem) => existingItem.id === item.id
      );
      if (existItem) {
        return {
          ...state,
          Myfavourites: state.Myfavourites.map((newItem) =>
            newItem.id === existItem.id ? item : newItem
          )
        };
      } else {
        return { ...state, Myfavourites: [...state.Myfavourites, item] };
      }

    case actionTypes.REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        Myfavourites: state.Myfavourites.filter(
          (remainingPokemon) => remainingPokemon.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default reducer;
