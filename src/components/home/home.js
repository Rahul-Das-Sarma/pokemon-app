import React, { useEffect } from "react";
import "./home.css";
import { connect } from "react-redux";
import { AllPokemons } from "../../store/actionCreators/actionCreators";
import ReactPaginate from "react-paginate";
import _ from "lodash";
import { Link } from "react-router-dom";

const Home = (props) => {
  const getAllPokemons = props.getAllPokemon;

  useEffect(() => {
    getAllPokemons(1);
  }, [getAllPokemons]);

  return (
    <div className="card_container">
      {props.onGettingPokemons.loading ? (
        <h1>loading...</h1>
      ) : (
        props.onGettingPokemons.allPokemon?.results.map((data, idx) => {
          return (
            <div key={idx} className="card">
              <h1> {data.name}</h1>
              <Link to={`/home/${data.name}/detail`}>
                {" "}
                <p> view </p>{" "}
              </Link>
            </div>
          );
        })
      )}
      {!_.isEmpty(props.onGettingPokemons.allPokemon) && (
        <ReactPaginate
          pageCount={Math.ceil(props.onGettingPokemons.count / 10)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => getAllPokemons(data.selected + 1)}
          containerClassName={"pagination"}
        />
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state.pokemons);
  return {
    onGettingPokemons: state.pokemons
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPokemon: (page) => dispatch(AllPokemons(page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
