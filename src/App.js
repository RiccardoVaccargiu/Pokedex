import Pokedex from './Components/Pokedex/Pokedex.component';

function App() {

  return (
    <div style={{backgroundImage: `url(${"./background.png"})`, backgroundSize: 'cover',
    backgroundPosition: 'center'}}>
      <Pokedex />
    </div>
  );
}

export default App;
