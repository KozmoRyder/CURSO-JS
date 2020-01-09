//JSON - JavaScript Object Notation

let pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: "Estados unidos"
}

let peliculas = [
    { titulo: "la verdad duele", year: 2016, pais: "Francia" },
    pelicula
];

let caja_peliculas = document.querySelector("#peliculas");

// for(index in peliculas){
//        let p = document.createElement("p");
//         p.append(peliculas[index].titulo +' - ' + peliculas[index].year);
//         caja_peliculas.append(p);
// };

// for (peli of peliculas) {
//     let p = document.createElement("p");
//     p.append(peli.titulo + ' - ' + peli.year);
//     caja_peliculas.append(p);
// }

peliculas = peliculas.map(peli => {
    return { titulo: peli.titulo, year: peli.year+1000, pais: peli.pais }
    // return peli.year+1000;
});

peliculas.forEach(peli => {
    let p = document.createElement("p");
    p.append(peli.titulo + ' - ' + peli.year);
    caja_peliculas.append(p);
})