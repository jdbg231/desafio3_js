let newPokemonToAdd = prompt("quieres agregar un pokemon?");

class Pokemon {
    constructor(nombre, tipo, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.tipo = tipo;
    }


    toString(){
        return `{nombre: ${this.nombre}, nivel: ${this.nivel}, tipo: ${this.tipo}}`
    }
}

const pokemones = []

while (newPokemonToAdd == "si") {
    let nombreP = prompt("Nombre Pokemon")
    let tipoP = prompt("Tipo de Pokemon")
    let nivelP = prompt("Nivel del pokemon")
    const pokemon = new Pokemon(nombreP, tipoP, nivelP);
    pokemones.push(pokemon);
    newPokemonToAdd = prompt("quieres agregar un pokemon?");
}

// let infoP = "Tu pokemon es " + nombreP + ", es del tipo " + tipoP + " y su nivel es " + nivelP;

// alert(infoP)


alert("estos son todos los pokemones =>" + pokemones.toString())
//
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//
// for (const pokemon of pokemones) {
//     guardarLocal(pokemon.nombre, JSON.stringify(pokemon));
// }
guardarLocal("listaPokemones", JSON.stringify(pokemones));