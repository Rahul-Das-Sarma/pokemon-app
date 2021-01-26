import React, { useEffect } from "react";
import {
  PokemonDetailsAction,
  AddtoFavourites
} from "../../store/actionCreators/actionCreators";
import { connect } from "react-redux";
import "./pokemonDetails.css";

const PokemonDetailsInfo = (props) => {
  const PokemonName = props.match.params.pokemon_name;
  const getPokemonDetails = props.onPokemonDetails;

  useEffect(() => {
    getPokemonDetails(PokemonName);
  }, [getPokemonDetails, PokemonName]);

  return (
    <div className="PokeDetails_container">
      {props.pokemonCharacter.loading ? (
        <h3>Loading .... </h3>
      ) : (
        <div className="Pokemon_Info_container">
          <div className="pokemon_Image">
            <img
              className="Pokemon_Details_Img"
              src={
                props.pokemonCharacter.PokeDetails?.data.sprites.other
                  .dream_world.front_default
              }
              alt=""
            />
          </div>
          <div className="details_info">
            <h1>Abilities </h1>
            <h4>
              {" "}
              {props.pokemonCharacter.PokeDetails?.data.abilities.map(
                (resullt) => {
                  return <p> {resullt.ability.name} </p>;
                }
              )}{" "}
            </h4>
            <button
              onClick={() =>
                props.onaddtoFavourites(props.pokemonCharacter.PokeDetails.data)
              }
              className="btn btn-primary"
            >
              {" "}
              Add to Favourite list{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    pokemonCharacter: state.pokemonDetails
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onPokemonDetails: (PokemonName) =>
      dispatch(PokemonDetailsAction(PokemonName)),
    onaddtoFavourites: (item) => dispatch(AddtoFavourites(item))
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PokemonDetailsInfo);
