
export default class Pokeman {
    constructor({ name, img, sprites, types }) {
        this.name = name
        this.img = img || sprites.front_shiny 
        this.types = types
    }

    get Template() {
        return /*html*/

    }

    get ActiveTemplate() {
        return /*html*/ `
        <div class="row justify-content-center">
            <div class="col-10 d-flex">
                <h5 class="mt-3">Try To Catch It!</h5>
                <img class="ml-3" style="height: 50px; width: 50px;" src="./assets/img/pokeball.png" onclick="app.myPokemonController.addToTeam('${this.name}')" />
            </div>
                <img class="col-10" src="${this.img}"/>
                <h3 class="col-10">${this.name.toUpperCase()}</h3>
                <h5 class="col-10">Type: ${this.Types.toUpperCase()}</h5>

        </div>
        `
    }

    get Types() {
        if (this.types.length > 1) {
            return this.types[0].type.name + ' / ' + this.types[1].type.name
        }
        return this.types[0].type.name
    }
}