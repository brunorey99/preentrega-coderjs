//app de cine

class Movie {
    constructor(title, price, showtime1, showtime2, room) {
        this.title = title,
        this.price = price,
        this.showtime1 = showtime1,
        this.showtime2 = showtime2,
        this.room = room
    }
}

const movie1 = new Movie(title = 'Alien', price = 2200, showtime1 = '19:30', showtime2 = '21:00', room = 1);
const movie2 = new Movie(title = 'The Shining', price = 3000, showtime1 = '19:00', showtime2 = '21:30', room = 2);

function movieMenu() {
    let menu = parseInt(prompt(`Bienvenido a Cine Random!\n\n1. Funcion de ${movie1.title}.\n2. Funcion de ${movie2.title}.\n3. Quiero ver las dos.`))

    if (menu == 1) {
        let option = prompt(`Funcion de ${movie1.title}. Tiene los siguientes horarios:\n1. ${movie1.showtime1}\n2. ${movie1.showtime2}.`)
        if (option == 1) {
            alert(`La funcion de ${movie1.title} de las ${movie1.showtime1} tiene precio de $${movie1.price} y la podes encontrar en la sala ${movie1.room}.`)
        } else if (option == 2){
            alert(`La funcion de ${movie1.title} de las ${movie1.showtime2} tiene precio de $${movie1.price} y la podes encontrar en la sala ${movie1.room}.`)
        } else {
            alert('Hubo un error, intenta de nuevo.')
        }
    
    } else if (menu == 2) {
        let option2 = prompt(`Funcion de ${movie2.title}. Tiene los siguientes horarios:\n1. ${movie2.showtime1}\n2. ${movie2.showtime2}.`)
        if (option2 == 1) {
            alert(`La funcion de ${movie2.title} de las ${movie2.showtime1} tiene precio de $${movie2.price} y la podes encontrar en la sala ${movie2.room}.`)
        } else if (option2 == 2){
            alert(`La funcion de ${movie2.title} de las ${movie2.showtime2} tiene precio de $${movie2.price} y la podes encontrar en la sala ${movie2.room}.`)
        } else {
            alert('Hubo un error, intenta de nuevo.')
        }
    
    } else if (menu == 3) {
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


// estaba por entregar y me di cuenta que no habia usado ningun ciclo, no sabia como implemetarlo y me ayude con chatgpt

while (true) {
    movieMenu();

    let rerun = prompt('¿Queres realizar otra selección? (Sí/No)').toLowerCase();
    if (rerun !== "si" && continuar !== "sí") {
        alert("¡Gracias por visitar Cine Random!");
        break
    }
}