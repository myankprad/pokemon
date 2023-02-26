import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 
 const [pokemonName, setPokemonName] = useState("")
 const [pokemonChosen, setPokemonChosen] = useState(false)
 const [pokemon, setPokemon] = useState({
  name:"",
       species:"",
        img:"",
         hp:"",
         attack:"",
         defense:"",
         type:"",
 })
 
 const searchPokemon =()=>{
   axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response)=>{
    console.log(response)
    setPokemon({name:pokemonName,
       species:response.data.species.name,
        img:response.data.sprites.front_default,
         hp:response.data.stats[0].base_stat,
         attack: response.data.stats[1].base_stat,
         defense: response.data.stats[2].base_stat,
         type: response.data.types[0].type.name,
    })
    setPokemonChosen(true)
   })
 }
  return (
    <div className="App">
      <div className='TitleSection'>
      <h1>Pokemon Stats</h1> 
      <input type="text" onChange={(e)=>{setPokemonName(e.target.value)}} />
      <button onClick={searchPokemon}>Search Pokemon</button>
      </div>
       
       <div className='displaysection'>
           {!pokemonChosen ? (<h1>Please Choose a Pokemon</h1>) : (
            <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt="" />
            <h3>Species: {pokemon.species}</h3>
            <h3>HP: {pokemon.hp}</h3>
            <h3>Type: {pokemon.type}</h3>
            <h3>Attack: {pokemon.attack}</h3>
            <h3>Defense: {pokemon.defense}</h3>


            </>
           )  } 
       </div>
    </div>
  );
}

export default App;
