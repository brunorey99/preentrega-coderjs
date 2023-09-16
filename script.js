//app de cine

class Movie {
    constructor(title, price, director, showtime1, showtime2, room, age) {
        this.title = title,
        this.price = price,
        this.director = director,
        this.showtime1 = showtime1,
        this.showtime2 = showtime2,
        this.room = room,
        this.age = age
    }
    showInfo() {
        console.log(`${this.title} de ${this.director} para mayores de ${this.age}.`)
    }
}

const movie1 = new Movie('Alien', 2200, 'Ridley Scott', '19:30', '23:00', 1, 18);
const movie2 = new Movie('The Shining', 3000, 'Stanley Kubrick', '19:00', '23:30', 2, 18);
const movie3 = new Movie('Hereditary', 3000, 'Ari Aster', '21:30', '01:30', 1, 18);
const movie4 = new Movie('Midsommar', 3000, 'Ari Aster', '21:00', '01:00', 2, 18);
const movie5 = new Movie('Suspiria', 3000, 'Dario Argento', '21:30', '23:30', 3, 16);
const movie6 = new Movie('The Thing', 3000, 'John Carpenter', '20:30', '22:30', 3, 14);

const movies = [];
movies.push(movie1, movie2, movie3, movie4, movie5, movie6);

function showMovies(array) {
    console.log('Nuestras peliculas en cartelera son:')
    for (let movie of array) {
        movie.showInfo()
    }
}

// filtro de peliculas por director 

function searchDir(array) {
    let searchedDir = prompt('Ingresar director a buscar:')
    let search = array.filter(
        (movie) => movie.director.toLowerCase() == searchedDir.toLowerCase()
    )
    if (search == 0) {
        console.log('No se encuentran resultados.')
    } else {
        showMovies(search)
    }
}

// filtro de peliculas por edad

function searchAge(array) {
    let searchedAge = parseInt(prompt('Ingresar edad:'))
    let search = array.filter(
        (movie) => movie.age <= searchedAge
    )
    if (search == 0) {
        console.log('No se encuentran resultados.')
    } else {
        showMovies(search)
    }
}

// searchAge(movies)

// searchDir(movies)

// showMovies(movies);

function movieMenu() {
    let menu = parseInt(prompt
        (`Bienvenido a Cine Random!
        1. Mostrar cartelera.
        2. Buscar pelicula por director.
        3. Buscar pelicula por edad.
        4. Funcion de ${movie1.title}.
        5. Funcion de ${movie2.title}.
        6. Quiero ver las dos.`))

    
    
    if (menu == 1){
        showMovies(movies)

    } else if (menu == 2) {
        searchDir(movies)

    } else if (menu == 3) {
        searchAge(movies)

    } else if (menu == 4) {
        let option = prompt(`Funcion de ${movie1.title}. Tiene los siguientes horarios:\n1. ${movie1.showtime1}\n2. ${movie1.showtime2}.`)
        if (option == 1) {
            alert(`La funcion de ${movie1.title} de las ${movie1.showtime1} tiene precio de $${movie1.price} y la podes encontrar en la sala ${movie1.room}.`)
        } else if (option == 2){
            alert(`La funcion de ${movie1.title} de las ${movie1.showtime2} tiene precio de $${movie1.price} y la podes encontrar en la sala ${movie1.room}.`)
        } else {
            alert('Hubo un error, intenta de nuevo.')
        }
    
    } else if (menu == 5) {
        let option2 = prompt(`Funcion de ${movie2.title}. Tiene los siguientes horarios:\n1. ${movie2.showtime1}\n2. ${movie2.showtime2}.`)
        if (option2 == 1) {
            alert(`La funcion de ${movie2.title} de las ${movie2.showtime1} tiene precio de $${movie2.price} y la podes encontrar en la sala ${movie2.room}.`)
        } else if (option2 == 2){
            alert(`La funcion de ${movie2.title} de las ${movie2.showtime2} tiene precio de $${movie2.price} y la podes encontrar en la sala ${movie2.room}.`)
        } else {
            alert('Hubo un error, intenta de nuevo.')
        }
    
    } else if (menu == 6) {
        let option3 = prompt(`Para ver las dos tenes las siguientes opciones:\n\n1. ${movie1.title} a las ${movie1.showtime1} y ${movie2.title} a las ${movie2.showtime2}\n2. ${movie2.title} a las ${movie2.showtime1} y ${movie1.title} a las ${movie1.showtime2}`)
        if (option3 == 1) {
            alert('El precio seria de ' + (movie1.price + movie2.price) + '.' + ` En la sala ${movie1.room} a las ${movie1.showtime1} horas.`)
        } else if (option3 == 2){
            alert('El precio seria de ' + (movie1.price + movie2.price) + '.' + ` En la sala ${movie2.room} a las ${movie2.showtime1} horas.`)
        } else {
            alert('Hubo un error, intenta de nuevo.')
        }
    }
}


while (true) {
    movieMenu();

    let rerun = prompt('¿Queres realizar otra selección? (Sí/No)').toLowerCase();
    if (rerun !== "si" && continuar !== "sí") {
        alert("¡Gracias por visitar Cine Random!");
        break
    }
}