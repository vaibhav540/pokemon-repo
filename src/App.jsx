import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
import PokemonNavigator from './PokemonNavigator'

function App() {
  const pokemonList = [
    {
      id: 1,
      name: "bulbasaur",
      description:
        "A strange seed was planted on its back at birth. The plant sprouts and grows with this PokÃ©mon.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
    },
    {
      id: 2,
      name: "ivysaur",
      description:
        "There is a bud on this PokÃ©mon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
    },
    {
      id: 3,
      name: "venusaur",
      description:
        "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    },
    {
      id: 4,
      name: "charmander",
      description:
        "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
    },
    {
      id: 5,
      name: "charmeleon",
      description:
        "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
    },
    {
      id: 6,
      name: "charizard",
      description:
        "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    },
    {
      id: 7,
      name: "squirtle",
      description:
        "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
    },
    {
      id: 8,
      name: "wartortle",
      description:
        "Often hides in water to stalk unwary prey. For swimming fast, it moves its ears to maintain balance.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
    },
    {
      id: 9,
      name: "blastoise",
      description:
        "A brutal PokÃ©mon with pressurized water jets on its shell. They are used for high-speed tackles.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
    },
    {
      id: 10,
      name: "caterpie",
      description:
        "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
    },
    {
      id: 11,
      name: "metapod",
      description:
        "This PokÃ©mon is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
    },
    {
      id: 12,
      name: "butterfree",
      description:
        "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
    },
    {
      id: 13,
      name: "weedle",
      description:
        "Often found in forests, eating leaves. It has a sharp, venomous stinger on its head.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
    },
    {
      id: 14,
      name: "kakuna",
      description:
        "Almost incapable of moving, this PokÃ©mon can only harden its shell to protect itself from predators.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
    },
    {
      id: 15,
      name: "beedrill",
      description:
        "Flies at high speed and attacks using the large venomous stingers on its forelegs and tail.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
    },
    {
      id: 16,
      name: "pidgey",
      description:
        "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
    },
    {
      id: 17,
      name: "pidgeotto",
      description:
        "Very protective of its sprawling territory, this PokÃ©mon will fiercely peck at any intruder.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
    },
    {
      id: 18,
      name: "pidgeot",
      description:
        "When hunting, it skims the surface of water at high speed to pick off unwary prey such as Magikarp.",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
    },
  ];


  return (<PokemonNavigator pokemonList={pokemonList}/>)
}

export default App
