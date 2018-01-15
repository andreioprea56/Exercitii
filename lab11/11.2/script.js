exemplu = {
  movePixels: 10,
  delayMs: 50,
  dogTimer: null,
  timp: null,

  // mutam imaginea cu 10 px in dreapta 
  dogWalk: function () {
    var img = document.getElementsByTagName('img')[0];
    var currentLeft = parseInt(img.style.left);
    img.style.left = (currentLeft + this.movePixels) + 'px';
    if (currentLeft > (window.innerWidth-img.width)) {
      img.style.left = '0px';
    }
  },

  // apelam functia dogWalk la fiecare 50ms
  startDogWalk: function () {
    this.dogTimer = window.setInterval(this.dogWalk.bind(this), this.delayMs);
  },
  startDog: function() {
    this.startDogWalk();

    // blocam apasarea butonului
    document.getElementById('start-button').disabled = true;
    //inceperea si oprirea sesiunii dupa 30 sec
    this.startSesiune();
    this.stopSesiune();
  },

  stopDog: function() {
    window.clearInterval(this.dogTimer);

   //deblocam apasarea butonului
   document.getElementById('start-button').disabled = false; 
  //inceperea si oprirea sesiunii dupa 30 sec
   this.startSesiune();
   this.stopSesiune();

  },
  speedDog: function() {
    this.movePixels = this.movePixels + 5;
    var vit = this.movePixels * 20;
    document.getElementById('info').innerHTML = 'Viteza este de ' + vit + 'px/sec';
    //inceperea si oprirea sesiunii dupa 30 sec
    this.startSesiune();
    this.stopSesiune();
  },

  resetSpeed: function() {
    this.movePixels = 10;
    var vit = this.movePixels * 20;
    document.getElementById('info').innerHTML = 'Viteza este de ' + vit + 'px/sec';
    //inceperea si oprirea sesiunii dupa 30 sec  
    this.startSesiune();
    this.stopSesiune();
  },
  
  //creare functii start si stop sesiune dupa 30 sec de inactivitate
  startSesiune: function() {
    this.timp = window.setTimeout(function(){ 
      alert("Sesiune expirata"); 
    }, 30000);
  },
  stopSesiune: function () {
    window.clearTimeout(this.timp);
  },

  incepe: function () {
    var start = document.getElementById('start-button');
    var stop = document.getElementById('stop-button');
    var speed = document.getElementById('speed-button');

    //adaugare functionalitate butoane start,stop si speed
    start.addEventListener('click', this.startDog.bind(this));
    stop.addEventListener('click', this.stopDog.bind(this));
    speed.addEventListener('click', this.speedDog.bind(this));

    // creare buton reset
    var reset = document.createElement("button");
    reset.innerHTML = "Reset Speed";

    //adaugarea butonului in pagina
    var butoane = document.getElementById("buttons");
    butoane.appendChild(reset);
    
    // adaugare functionalitate buton dinamic
    reset.addEventListener ("click", this.resetSpeed.bind(this));
    
    //inceperea sesiunii
    this.startSesiune();
  },
}

//start
exemplu.incepe();
