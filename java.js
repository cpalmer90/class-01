
let name = prompt("Enter your name: ");
document.getElementById("paragraph").innerHTML = name;


let user;
let myFavAnimal;
let answer;
let myJoke
let who
alert("Hello, Welcome to my site");

function userName(){

    user = prompt("Lets get to know each other better; lets start with telling me your name");
    alert(" Great i can already tell we are going to be best friends " + user);
    document.getElementById("paragraph").innerHTML = user;
}
userName();

function favAnimal(){

    animal = prompt(user + " what is your favourite Animal?").toLowerCase();
    console.log(animal)
    document.getElementById("paragraph").innerHTML = animal;

if(animal === " dog"){
myFavAnimal = " Cat"
} else if (animal === " Cat"){
    myFavAnimal = " pangolin"
} else {
    myFavAnimal = " Liger"
}
alert("Cool " + animal + " is an anamzing animal. My favourite animal is pretty much a " + myFavAnimal);
}

favAnimal();

function joke(){

    answer = prompt(user + " would you like to hear a joke?").toLowerCase();
    console.log(answer)

    if (answer === "yes"){
        myJoke = prompt("knock,knock")

if (myJoke === "whos there"){
    who = prompt("disk")
    }
    if (who === "disk who"){
                alert("Disk is a recording, please leave your message after the beep!");
    }
    }
}
joke();

alert(" it feels like ive know you a lifetime already " + " your name is " +  user + " your favourite animal is a " +  animal + " and you love my jokes");

alert("now i know about you, its time for you to learn about me; please read my site to learn more, thank you =]");