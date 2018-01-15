function makeStory(){
    loc = document.getElementById("places").value;
    adj = document.getElementById("adjective").value;
    om = document.getElementById("person").value;
    pov = document.getElementById("story");
    pov.innerHTML = om + " a vizitat " + adj + " " + loc;

}

var button = document.getElementById("story-button");
button.addEventListener("click",makeStory);
