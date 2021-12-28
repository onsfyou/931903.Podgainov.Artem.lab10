var lightOn = false;
var animalInHat = true; 
var rabbitNext = true;

curtain.onclick = function() {
    this.style.transform = "translate(-50%, -150%)"
    this.style.transition = "transform 1s linear"
}

lamp.onclick = function(){
    if (lightOn == false){
        light.style.opacity = 0.5;
        perfomance.style.opacity = 1;
        lightOn = true;
    }
    else{
        light.style.opacity = 0;
        perfomance.style.opacity = 0;
        lightOn = false;
    }
}

hat.onclick = function() {
    if (animalInHat) {
        if (rabbitNext){
            rabbit.style.transform = "translate(0, -150%)";
        }
        else{
            bird.style.transform = "translate(0, -150%)";
        }
        animalNext = false;
    }
}

rabbit.onclick = function(){
    this.style.transform = "translate(0, 0)";
    animalInHat = true;
    rabbitNext = false;
}

bird.onclick = function(){
    this.style.transform = "translate(0, 0)";
    animalInHat = true;
    rabbitNext = true;
}

light.onclick = function(){
    console.log(1);
}
