
// let btns = document.querySelectorAll(".drum"); //we used the class to be more specfic
// for(i of btns){
//   i.addEventListener('click', handleClick);
// }
//
// // we didnt add the paranthesis to make sure when the click happens its triggered
//
// function handleClick(){
//   alert("I got clicked!");
// } //or make an anonymous fucntion

// ANOTHER WAY
//Detecing button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i =0; i <numberOfDrumButtons; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var button = this.innerHTML;
        //called when a button using a mouse is clicked
        makeSound(button);

        buttonAnimated(button);

  });
}

//use keydown in the next lesson

//Detecting keyboard press

document.addEventListener("keydown", function(event){// Call back function by the object that has been triggered
// called when a keyboard is pressed
 makeSound(event.key);
 buttonAnimated(event.key);
  // console.log(event);
})

//key is either
// -- a this referring to the numberOfDrumButtons
// -- a letter from the keyboard
function makeSound(key){
  switch (key) {
// play the sound in either ways
    case "w":
    var audio1 = new Audio("sounds/tom-1.mp3");
    audio1.play();
      break;

    case "a":
    var audio2 = new Audio("sounds/tom-2.mp3");
    audio2.play();
      break;

    case "s":
    var audio3 = new Audio("sounds/tom-3.mp3");
    audio3.play();
      break;

    case "d":
    var audio4 = new Audio("sounds/tom-4.mp3");
    audio4.play();
      break;

    case "j":
    var audio5 = new Audio("sounds/snare.mp3");
    audio5.play();
      break;

    case "k":
    var audio6 = new Audio("sounds/crash.mp3");
    audio6.play();
      break;

    case "l":
    var audio7 = new Audio("sounds/kick-bass.mp3");
    audio7.play();
      break;
    default:


  }
}

// to make animation when button is pressed
function buttonAnimated(currentkey){

var activatedButton = document.querySelector("." + currentkey);
  activatedButton.classList.add("pressed"); //you can add a new class to the button which gives an effect
  //for a certain time of 0.1 sec
setTimeout(function(){activatedButton.classList.remove("pressed");},  100);
//remove that class once again
}
