// `let newPokemonToAdd = prompt("quieres agregar un pokemon?");
//
// class Pokemon {
//     constructor(nombre, tipo, nivel) {
//         this.nombre = nombre;
//         this.nivel = nivel;
//         this.tipo = tipo;
//     }
//
//
//     toString(){
//         return `{nombre: ${this.nombre}, nivel: ${this.nivel}, tipo: ${this.tipo}}`
//     }
// }
//
// const pokemones = []
//
// while (newPokemonToAdd === "si") {
//     let nombreP = prompt("Nombre Pokemon")
//     let tipoP = prompt("Tipo de Pokemon")
//     let nivelP = prompt("Nivel del pokemon")
//     const pokemon = new Pokemon(nombreP, tipoP, nivelP);
//     pokemones.push(pokemon);
//     newPokemonToAdd = prompt("quieres agregar un pokemon?");
// }
//
// // let infoP = "Tu pokemon es " + nombreP + ", es del tipo " + tipoP + " y su nivel es " + nivelP;
//
// // alert(infoP)
//
//
// alert("estos son todos los pokemones =>" + pokemones.toString())
//
// pokemones.forEach(value => console.log(`pokemon saved => ${value}`))
// //
// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
// //
// // for (const pokemon of pokemones) {
// //     guardarLocal(pokemon.nombre, JSON.stringify(pokemon));
// // }
// guardarLocal("listaPokemones", JSON.stringify(pokemones));`


// let boton = document.getElementById("btn_form")
// boton.addEventListener("click", respuestaClick)
// function respuestaClick(){
//
//     console.log("sdasdsa " +document.getElementById('nameInput'))
//
//     let pokemonName = getValuePerId("nameInput")
//     let type = getValuePerId("typeInput")
//
//     if (type === "") {
//         alert("select the pokemon type")
//     }
//
//     console.log("my pokemonName is ", pokemonName)
//     console.log("this is my type => ", type)
//
//
//     alert("pokemon creado " + pokemonName + "nivel " + );
// }
//
// function getValuePerId(inputId){
//     return document.getElementById(inputId).value
// }