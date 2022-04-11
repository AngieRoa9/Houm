import React from "react";
import Navbar from "./components/Navbar.jsx";
import PokemonPage from "./components/PokemonPage/PokemonPage.jsx";
import Pokemons from "./components/Pokemons/Pokemons.jsx";
import { BrowserRouter as  Router, Switch, Route} from "react-router-dom";

function App() {

  return (
    <Router>
      <div >
      <Navbar/>
        <Switch>
        <Route path="/" exact>
          <Pokemons/>
        </Route>
        <Route path="/pokemons/:id">
          <PokemonPage/>
        </Route>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
