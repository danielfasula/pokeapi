import { ProxyState } from "../AppState.js";
import Pokeman from "../Models/Pokeman.js";
import { sandboxApi } from "./AxiosService.js";

class MyPokemonService {
    constructor() {
        this.getMyPokemon()
    }

    async getMyPokemon() {
        try {
            let res = await sandboxApi.get('')
            ProxyState.myPokemon = res.data.map(rawPokemonData => new Pokeman(rawPokemonData))
            console.log(ProxyState.myPokemon);
        } catch (error) {
            console.error(error);
        }



    }
    async addToTeam() {
        try {
            let pokemon = ProxyState.activePokemon
            await sandboxApi.post('', pokemon)
            this.getMyPokemon()
        } catch (error) {
            console.error(error);
        }
    }
}
export const myPokemonService = new MyPokemonService();