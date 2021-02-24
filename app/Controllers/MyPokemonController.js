import { myPokemonService } from '../Services/MyPokemonService.js'
import { ProxyState } from '../AppState.js'


function _drawmyPokemon() {
    let myPokemon = ProxyState.myPokemon
    let template = ''

    myPokemon.forEach(m => template += `
        <div class="col-3">
            <img src="${m.img}" />
            <h3>${m.name}</h3>
            <h4>Type: ${m.types[1] ? m.types[0].type.name + ' / ' + m.types[1].type.name : m.types[0].type.name}</h4>
        </div>
    `)


    document.getElementById('myPokemon').innerHTML = template
}


export default class MyPokemonController {
    constructor() {
        _drawmyPokemon()
        ProxyState.on('myPokemon', _drawmyPokemon)

    }

    addToTeam() {
        myPokemonService.addToTeam()
    }

}