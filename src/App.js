import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokedex from './Components/Pokedex/Pokedex.component';
import Button from '@material-ui/core/Button';

function App() {

  

  return (
    <div >
      <Pokedex /*pokemons={pokemons} nextPage={{nextPage, goToNextPage}} previousPage={{previousPage, goToPreviousPage}}*/ />
    </div>
  );
}

export default App;
