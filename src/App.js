import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navBar";
import FavouriteList from "./components/favouriteList/favouriteList";
import Home from "./components/home/home";
import PokemonDetails from "./components/pokemonDetails/pokemonDetails";
import WelcomeScreen from "./components/welcomeScreen/welcomeScreen";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={WelcomeScreen} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/home/favorites" component={FavouriteList} />
        <Route
          exact
          path="/home/:pokemon_name/detail"
          component={PokemonDetails}
        />
      </Switch>
    </div>
  );
}
