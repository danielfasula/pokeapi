import MyPokemonController from "./Controllers/MyPokemonController.js";
import PokemonController from "./Controllers/PokemonController.js";


function tab() {
  let triggerTabList = [].slice.call(document.querySelectorAll('#nav-pokemon-tab, #nav-my-pokemon-tab'))
  triggerTabList.forEach(function (triggerEl) {
    // @ts-ignore
    var tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
}

class App {
  constructor() {
    tab()
  }
  pokemonController = new PokemonController();

  myPokemonController = new MyPokemonController();
}

window["app"] = new App();
