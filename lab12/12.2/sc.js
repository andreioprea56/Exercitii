//metoda get
fetch('http://localhost:3000/dogs',
{
    method:'get'
})
.then(function(response) {

    response.json().then(function(data) {
        console.log(data);


   //creare dinamica a informatiilor
   var box = document.getElementsByClassName("box")[0];
   for (var i=0;i<data.length;i++)
   {
   var nume = document.createElement("p");
   nume.innerHTML = data[i].name;
   box.appendChild(nume);
       
   var poza = document.createElement("img");
   poza.src= data[i].img;
   box.appendChild(poza);
   }
      });
});

//metoda post
function preluare (){
var nume = document.getElementById("nume").value;
var poza  = document.getElementById("poza").value;

fetch('http://localhost:3000/dogs', {
  method: 'post',
  headers: {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  },
  body:"id="+id + "&name="+nume+ "&img="+poza

})
.then(function (data) {
  console.log('Succes!', data);

})
.catch(function (error) {
  console.log('Esec!', error);
});
}

//metoda delete 
function stergere() {

    var nr = document.getElementById("id").value;
    if (nr)
    {
        var url = "http://localhost:3000/dogs" + "/" + nr;
        fetch(url, {
    method: 'delete'
    })

    .then(function (data) {
    console.log('Succes!', data);

    })
    .catch(function (error) {
    console.log('Esec!', error);
    });
    }
}

//metoda get pentru a lua informatiile pentru update
function cerere(){
    var nr = document.getElementById("id").value;
    if (nr)
    {
    var url = "http://localhost:3000/dogs" + "/" + nr;
    fetch(url, {
        method: 'get'
        })
        .then(function(response) {

            response.json().then(function(data) {

           var nume = document.getElementById("nume");
           var poza = document.getElementById("poza");

           nume.value = data.name;
           poza.value = data.img;
          
              });
        });
    }
    document.getElementById("update").disabled = false;
}

//metoda update
function update(){

    var nume = document.getElementById("nume").value;
    var poza  = document.getElementById("poza").value;
    var nr = document.getElementById("id").value;
    var url = "http://localhost:3000/dogs" + "/" + nr;


    fetch(url, {
        method: 'put',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: "name="+nume+ "&img="+poza
      
    })

    .then(function (data) {
        console.log('Succes!', data);
    })

    .catch(function (error) {
        console.log('Esec!', error);
    })
}
