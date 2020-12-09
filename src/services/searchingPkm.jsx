import axios from 'axios';

const RandomPokemon = () => (1 + Math.floor(806 * Math.random()))

export const SearchingPokemon = () => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${RandomPokemon()}`)
}