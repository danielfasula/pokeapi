import { ProxyState } from '../AppState.js';
import Pokemon from '../Models/Pokemon.js';
import Pokeman from '../Models/Pokeman.js'
import { pokeApi } from './AxiosService.js'
class PokemonService {

    constructor() {
        this.getPokemon()
    }

    async getPokemon() {
        try {
            const res = await pokeApi.get('pokemon')
            ProxyState.pokemon = res.data.results.map(rawPokemon => new Pokemon(rawPokemon));
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
        } catch (error) {
            console.error(error);
        }
    }

    async setActivePokemon(url) {
        try {
            let res = await pokeApi.get(url)
            console.log(res);
            ProxyState.activePokemon = new Pokeman(res.data)
            console.log(ProxyState.activePokemon);
        } catch (error) {
            console.error(error);
        }
    }

    next() {
        pokeApi.get(ProxyState.next).then(res => {
            ProxyState.pokemon = res.data.results.map(rawPokemon => new Pokemon(rawPokemon))
            ProxyState.next = res.data.next
            ProxyState.prev = res.data.prev
            console.log(res);
        }).catch(err => console.error(err))
    }

    previous() {
        pokeApi.get(ProxyState.prev).then(res => {
            console.log(res);
            // ProxyState.pokemon = res.data.results.map(rawPokemon => new Pokemon(rawPokemon))
            // ProxyState.next = res.data.next
            // ProxyState.prev = res.data.prev
        }).catch(err => console.error(err))
    }
}

export const pokemonService = new PokemonService();