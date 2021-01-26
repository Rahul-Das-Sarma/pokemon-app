import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import pokeReducer from "./reducers/pokereducers";
import PokemonDetailsReducer from "./reducers/pokedetailsreducer";
import FavouriteListReducer from "./reducers/favouriteListReducer";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching", action);
      const result = next(action);
      console.log("[Middleware]", store.getState());
      return result;
    };
  };
};

const InitialState = {
  favouriteList: {
    Myfavourites: localStorage.getItem("Myfavourites")
      ? JSON.parse(localStorage.getItem("Myfavourites"))
      : []
  }
};

const rootReducer = combineReducers({
  pokemons: pokeReducer,
  pokemonDetails: PokemonDetailsReducer,
  favouriteList: FavouriteListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  InitialState,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
