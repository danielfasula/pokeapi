import { pokemonService } from '../Services/PokemonService.js'
import { ProxyState } from '../AppState.js'


function _draw() {
    let pokemon = ProxyState.pokemon
    let template = ''

    pokemon.forEach(p => template +=
    /*html*/ `
        <ul class="pokemon text-center">
            <ul onclick="app.pokemonController.setActivePokemon('${p.url}')">
                ${p.name}
            </ul>
        </ul>

    `)
    document.getElementById('pokemon').innerHTML = template + /*html*/ `
        <div class="justify-content-around">
            <button class="btn btn-primary" onclick="app.pokemonController.previous()">Previous</button>    
            <button class="btn btn-info" onclick="app.pokemonController.next()">Next</button>    
        </div>
    `
}

function _drawActivePokemon() {
    if (ProxyState.activePokemon) {
        document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.ActiveTemplate
    } else {
        document.getElementById('active-pokemon').innerHTML = ''
    }
}

export default class PokemonController {
    constructor() {
        ProxyState.on("pokemon", _draw)
        ProxyState.on("activePokemon", _drawActivePokemon)
        _draw()
    }

    setActivePokemon(url) {
        pokemonService.setActivePokemon(url)
    }

    next() {
        pokemonService.next()
    }

    previous() {
        pokemonService.previous()
    }
}