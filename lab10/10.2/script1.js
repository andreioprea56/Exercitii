var but1 = document.getElementById("square-button");
var but2 = document.getElementById("half-button");
var but3 = document.getElementById("percent-button");
var but4 = document.getElementById("area-button");

function patrat(){
    var nr = document.getElementById("square-input").value;
    document.getElementById("solution").innerHTML = nr*nr;
}

function jumatate(){
    var nr = document.getElementById("half-input").value;
    document.getElementById("solution").innerHTML = nr/2;
}

function procent(){
    var nr = document.getElementById("percent2-input").value;
    var proc = document.getElementById("percent1-input").value;
    document.getElementById("solution").innerHTML = (nr*proc)/100;
}

function aria(){
    var r = document.getElementById("area-input").value;
    document.getElementById("solution").innerHTML = 3.14*r*r;
}

but1.addEventListener("click",patrat);
but2.addEventListener("click",jumatate);
but3.addEventListener("click",procent);
but4.addEventListener("click",aria);