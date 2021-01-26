import React from "react";
import { connect } from "react-redux";
import "./favouriteList.css";
import { RemoveFromFavourites } from "../../store/actionCreators/actionCreators";

const FavouriteLists = (props) => {
  return (
    <div className="favorite_list_container">
      <h1 style={{ textAlign: "center" }}>My Favourites </h1>

      {props.favouriteCharacters.Myfavourites.length === 0 ? (
        <h4> No Pokemons to show... Add Pokemons in Your FavouriteList </h4>
      ) : (
        props.favouriteCharacters.Myfavourites.map((data) => {
          return (
            <div className="Pokemon_Info_container fav_padd">
              <div className="pokemon_Image">
                <img className="Pokemon_Fav_Img" src={data.photo} alt="" />
              </div>
              <div className="details_info">
                <h1> {data.name} </h1>

                <h3>Abilities </h3>
                <h4>
                  {" "}
                  {data.ability.map((resullt) => {
                    return <p> - {resullt.ability.name} </p>;
                  })}{" "}
                </h4>
                <button
                  onClick={() => props.removeFromFavouriteList(data)}
                  className="btn btn-danger"
                >
                  {" "}
                  Remove from Favourite list{" "}
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favouriteCharacters: state.favouriteList
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    removeFromFavouriteList: (data) => dispatch(RemoveFromFavourites(data))
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(FavouriteLists);
