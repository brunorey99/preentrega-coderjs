//app de cine

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

const movie1 = new Movie(1, 'Alien', 2200, 'Ridley Scott', '19:30', '23:00', 1, 18, 'alien.jpg');
const movie2 = new Movie(2, 'The Shining', 3000, 'Stanley Kubrick', '19:00', '23:30', 2, 18, 'the-shining.jpg');
const movie3 = new Movie(3, 'Hereditary', 3000, 'Ari Aster', '21:30', '01:30', 1, 18, 'hereditary.jpg');
const movie4 = new Movie(4, 'Midsommar', 3000, 'Ari Aster', '21:00', '01:00', 2, 18, 'midsommar.jpg');
const movie5 = new Movie(5, 'Suspiria', 3000, 'Dario Argento', '21:30', '23:30', 3, 16, 'suspiria.jpg');
const movie6 = new Movie(6, 'The Thing', 3000, 'John Carpenter', '20:30', '22:30', 3, 14, 'the-thing.jpg');


const shoppingCart = JSON.parse(localStorage.getItem("shoppingCart")) ?? [];
const movies = [];
movies.push(movie1, movie2, movie3, movie4, movie5, movie6);



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
              <select id="selectShowtime${movie.id}" class="form-select form-select-sm w-50 mb-3" aria-label=".form-select-sm example">
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
        array.push(item)
        item.selectedST = (selectedST === 1) ? item.showtime1 : item.showtime2
    } else {
        console.log(`La película ${item.title} ya existe en el carrito`)
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
selectOption.addEventListener('click', () => searchByAge(movies, selectOption.value))
btnCart.addEventListener('click', () => showCartDom(shoppingCart))


showMovies(movies)
