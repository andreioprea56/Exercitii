
var Filme = [
    {
        titlu: "Titanic",
        durata:"3h 15min",
        actori : ["Kate Winslet", "Leonardo DiCaprio"],
        pic: "https://metrouk2.files.wordpress.com/2017/11/titanic-door-2.jpg?w=620&h=402&crop=1",
        vizualizat: false
    },
    {
        titlu: "Frozen",
        durata: "1h  49mi",
        actori : ["Kristen Bell", "Idina Menzel", "Jonathan Groff"],
        pic: "http://static.cinemarx.ro/poze/cache/t26/filme-poze/2013/09/Frozen_1380455345_2_2013.jpg",
        vizualizat: false
    },    
    {
        titlu: "Fast&Furious7",
        durata: "2h 20min",
        actori : ["Paul Walker", "Vin Diesel", "Michelle Rodigruez"],
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5_WkWtq27-gjoPFL-SsQzefK7kYbPm7uNmtIf5u-MehlNdZj",
        vizualizat: true
    } 
];


var listaFilme = document.createElement('ul');

for (var i = 0; i < Filme.length; i++) 
{
    var film = document.createElement('li');
    var pic = document.createElement('img');
    // adaugam imagini
    pic.src = Filme[i].pic;
    film.appendChild(pic);
    // adaugam descriere
    var movieDescription = document.createTextNode(Filme[i].titlu + ' dureaza ' + Filme[i].durata + ', jucand urmatorii actori: ' + Filme[i].actori.join());
    film.appendChild(movieDescription);
    // modificam stilul filmelor vizualizate
    if (Filme[i].vizualizat) {
        film.style.color = 'red';
    }
    listaFilme.appendChild(film);
}
document.body.appendChild(listaFilme);