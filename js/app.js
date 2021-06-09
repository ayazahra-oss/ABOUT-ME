'use strict';

let userName = prompt("Whats your name ?");
alert("welcome to our websit " + userName );

console.log(userName);
let userAge= prompt("what your old ?").toLowerCase();
if(userAge ==='21'|| userAge === '21')
alert("welcom to our websit"+ userAge);

var catName= prompt("what your catName?");
alert("welcom to your cat"+ catName);

var yourDate= prompt("what is the Date Today?")
alert("Welcom any time"+yourDate);

let cat =prompt("if i love A cat?").toLowerCase();
if(cat=== "yes" || cat=== "y"){
    alert("You Have A correct Answer");
}
else if (cat=="no"||cat =="n") {
    alert("You Have Uncorrect Answer");
}
else{
    alert("Please Enter Yes , No ,Y,N");
}

let coffee =prompt("if I love A coffee ?").toLowerCase();
if(coffee=="yes" || coffee=="y"){
    alert("you are right");
}
else if (coffee=="no" || coffee=="n"){
    alert("you are not right");
}else{
    alert("enter please yes or no or y or n ");
}
let question; 
do {
    question = prompt("I love the camp?");
} while (question!== 'yes' && question!=='y' && question!=='no' && question!== 'n');{
    alert("plese inter yes or no or y or n");
}
console.log(question);

let carsName = ['Bugatti Chiron Super Sport +30','Hennessey Venom F5','Koenigsegg Agera RS','Hennessey Venom GT','Bugatti Veyron Super Sport','SSC Ultimate Aero','Koenigsegg Regera','Tesla Roadster','bmw I8','mustang ford']
for(let i = 0; i < carsName.length; i++){
     console.log(carsName[i]);
}
