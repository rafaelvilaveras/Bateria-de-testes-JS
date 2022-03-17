var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");


function btnAnimation(currentKey) {
    
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)

}

function caseTemplate(a){
    switch (a){
        case "w":
            btnAnimation(a);
            tom3.currentTime = 0;
            tom3.play();
            break;
        case "a":
            btnAnimation(a);
            tom1.currentTime = 0;
            tom1.play();
            break;
        case "s":
            btnAnimation(a);
            snare.currentTime = 0;
            snare.play();
            break;
        case "d":
            btnAnimation(a);
            kickBass.currentTime = 0;
            kickBass.play();
            break;
        case "j":
            btnAnimation(a);
            crash.currentTime = 0;
            crash.play();
            break;
        case "k":
            btnAnimation(a);
            tom2.currentTime = 0;
            tom2.play();
            break;
        case "l":
            btnAnimation(a);
            tom4.currentTime = 0;
            tom4.play();
            break;
        default: 
            console.log(a);
    }
}

