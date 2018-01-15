var movePixels = 10; // numar pixeli
var delayMs = 50; // numar milisecunde
var dogTimer = null;
var timp;

  // mutam imaginea cu 10 px in dreapta
  function dogWalk() {
    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = (currentLeft + movePixels) + 'px';
    // reset image position to start
    if (currentLeft > (window.innerWidth-img.width)) {
      img.style.left = '0px';
    }
  }

  // apelam functia dogWalk la fiecare 50ms
  function startDogWalk() {
    dogTimer = window.setInterval(dogWalk, delayMs);
  }

  var start = document.getElementById("start-button");
  var stop = document.getElementById("stop-button");
  var speed = document.getElementById("speed-button");

  start.addEventListener("click",startDog);
  stop.addEventListener("click",stopDog);
  speed.addEventListener("click",speedDog);

  function startDog(){
    startDogWalk();

    // blocam apasarea butonului
    document.getElementById("start-button").disabled = true;

    startSesiune();
    stopSesiune();
  }

  function stopDog(){
    window.clearInterval(dogTimer);

    //deblocam apasarea butonului
    document.getElementById("start-button").disabled= false;

    startSesiune();
    stopSesiune();
  }

  function speedDog(){
    movePixels = movePixels + 5;
    vit = movePixels * 20;
    document.getElementById('info').innerHTML = "Viteza este de " + vit + " px/sec.";
  
    startSesiune();
    stopSesiune();
    
  }

  //creare buton reset
  var reset = document.createElement("button");
  reset.innerHTML = "Reset Speed";

  var butoane = document.getElementById("Buttons");
  buttons.appendChild(reset);

  function resetSpeed(){
    movePixels = 10;
    vit = movePixels * 20;
    document.getElementById('info').innerHTML = "Viteza este de " + vit + " px/sec.";

    //apelare functii start si stop sesiune
    startSesiune();
    stopSesiune();
  }

  //adaugare functionalitate buton dinamic
  reset.addEventListener("click",resetSpeed);


  //creare functii start si stop sesiune dupa 30 sec de inactivitate
  function startSesiune() {
    timp = window.setTimeout(function(){ 
      alert("Sesiune expirata"); 
    }, 30000);
  }
  
 
  function stopSesiune() {
    window.clearTimeout(timp);
  }
  
  // inceperea sesiunii
  startSesiune();
   
  