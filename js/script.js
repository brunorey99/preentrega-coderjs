

// hola nacho y profe jaja
// mi proyecto es una app de cine, tiene buscador por nombre y director, filtro por edad, selector de horario y carrito
// usé bootstrap y toastify
// la parte de asincronia fue la que más me costó y no creo que la haya entendido del todo
// la verdad es que debería haberle puesto mas tiempo al proyecto, agregarle mas funciones 
// y hacer un diseño más personalizado y muchas veces lo dejé a último momento (como ahora :'( ),
// pero dentro de todo me esforcé en hacerlo lo más prolijo posible, y estoy contento con el avance que hice.
// mañana arranco el curso de react.
// les agradezco profe y tutores por la cursada,
// éxitos!

class Movie {
    constructor(id, title, price, director, showtime1, showtime2, room, age, img) {
        this.id = id,
        this.title = title,
        this.price = price,
        this.director = director,
        this.showtime1 = showtime1,
        this.showtime2 = showtime2,
        this.room = room,
        this.age = age,
        this.img = img
    }
    showInfo() {
        console.log(`${this.title} de ${this.director} para mayores de ${this.age}.`)
    }
}

const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];
const movies = [];

const loadMovies = async () =>{
    const resp = await fetch("movies.json")
    const movieData = await resp.json()
    for(let movie of movieData){
        let moviesArr = new Movie (movie.id, movie.title, movie.price, movie.director, movie.showtime1, movie.showtime2, movie.room, movie.age, movie.img)
        movies.push(moviesArr)
    }
    localStorage.setItem("listOfMovies", JSON.stringify(movies))
}

if (localStorage.getItem("listOfMovies")) {
    for (let movie of JSON.parse(localStorage.getItem("listOfMovies"))){
        let storageMovies = new Movie (movie.id, movie.title, movie.price, movie.director, movie.showtime1, movie.showtime2, movie.room, movie.age, movie.img)
        movies.push(storageMovies)
    }
} else {
    loadMovies()
}

let searchMovie = document.getElementById('searchMovie')
let selectOption = document.getElementById('selectOrden')
let movieContainer = document.getElementById('movies')
let tableCart = document.getElementById('tableCart')
let btnCart = document.getElementById('btnCart')

function showMovies(array) {
    movieContainer.innerHTML = ''
    for (let movie of array) {
        let movieCard = document.createElement('div')
        movieCard.innerHTML = (`
        <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4 col-sm-4 col-4">
            <img src="./posters/${movie.img}" class="img-fluid" alt="">
          </div>
          <div class="col-md-8 col-sm-8 col-8">
            <div class="card-body">
              <h5 class="card-title">${movie.title}</h5>
              <p>${movie.director}</p>
              <select id="selectShowtime${movie.id}" class="form-select form-select-sm w-auto mb-3" aria-label=".form-select-sm example">
                <option value="1">${movie.showtime1}</option>
                <option value="2">${movie.showtime2}</option>
              </select>
              <button class="btn btn-primary" id="cartBtn${movie.id}">Comprar ticket</button>
            </div>
          </div>
        </div>
    </div>`)
    movieContainer.append(movieCard)
    let cartBtn = document.getElementById(`cartBtn${movie.id}`)
    let selectShowtime = document.getElementById(`selectShowtime${movie.id}`)
    cartBtn.addEventListener('click', () => addToCart(shoppingCart, movie, selectShowtime.value))
    }
}

//
// añade peliculas al carrito y les agrega key con el horario que selecciones
//

function addToCart(array, item, selectedST) {
    let inCart = array.find(movie => movie.id == item.id)
    if (inCart == undefined) {
        array.push(item);
        item.selectedST = (selectedST === 1) ? item.showtime1 : item.showtime2;
        Toastify({
            text: `Agregaste ${item.title} al carrito.`,
            duration: 2000
            }).showToast();
    } else {
        Toastify({
            text: `${item.title} ya está en el carrito.`,
            duration: 2000
            }).showToast();
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

//
// muestra info sobre las peliculas en el modal
//

function showCartDom(array) {
    tableCart.innerHTML = ''
    array.forEach(movie => {
        tableCart.innerHTML += `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.selectedST}</td>
            <td>${movie.room}</td>
            <td>${movie.price}</td>
        </tr>
        `
    });

}

//
// buscador por titulo y director
//

function searcher(array, input) {
    let searchedMovie = array.filter(
        (movie) => {return movie.title.toLowerCase().startsWith(input.toLowerCase()) || movie.director.toLowerCase().startsWith(input.toLowerCase())}
        )
        showMovies(searchedMovie)
}

//
// filtrado por edad
//

function searchByAge(array, selectValue) {
    if (selectValue == 1){
        let ratedG = array.filter(
            (movie) => movie.age < 18
        )
        showMovies(ratedG)
    } else if (selectValue == 2) {
        showMovies(movies)
    } else {
        showMovies(movies)
    }

}


searchMovie.addEventListener('input', () => searcher(movies, searchMovie.value))
selectOption.addEventListener('change', () => searchByAge(movies, selectOption.value))
btnCart.addEventListener('click', () => showCartDom(shoppingCart))


// showMovies(movies)
setTimeout(()=>{
    showMovies(movies)
},1000)