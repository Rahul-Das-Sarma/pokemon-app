import axios from "../../axios";
import * as actionTypes from "../actionTypes/actionTypes";

export const AllPokemons = (page) => async (dispatch) => {
  dispatch({ type: actionTypes.POKEMON_LOADING });
  const perPage = 10;
  const offset = page * perPage - perPage;

  await axios
    .get(`/?limit=${perPage}&offset=${offset}`)
    .then((results) => {
      console.log(results);
      dispatch({
        type: actionTypes.POKEMON_SUCCESS,
        payload: results.data
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: actionTypes.POKEMON_ERROR,
        payload: error
      });
    });
};

export const PokemonDetailsAction = (pokeName) => async (dispatch) => {
  dispatch({ type: actionTypes.POKEMON_DETAILS_LOADING });

  await axios
    .get(`/${pokeName}`)
    .then((results) => {
      dispatch({ type: actionTypes.POKEMON_DETAILS_SUCCESS, payload: results });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.POKEMON_DETAILS_ERROR, payload: error });
    });
};

export const AddtoFavourites = (item) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_FAVOURITES,
    payload: {
      name: item.name,
      id: item.id,
      photo: item.sprites.other.dream_world.front_default,
      ability: item.abilities
    }
  });
  localStorage.setItem(
    "Myfavourites",
    JSON.stringify(getState().favouriteList.Myfavourites)
  );
};

export const RemoveFromFavourites = (item) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_FAVOURITES,
    payload: {
      name: item.name,
      id: item.id
    }
  });
  localStorage.setItem(
    "Myfavourites",
    JSON.stringify(getState().favouriteList.Myfavourites)
  );
};
