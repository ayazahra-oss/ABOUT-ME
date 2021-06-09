'use strict';
/*
 let userName = prompt('Whats your name ?');
alert('welcome to our websit ' + userName );

console.log(userName);

let userAge= prompt('what your old ?').toLowerCase();
if(userAge ==='21'|| userAge === '21')
  alert('welcom to our websit'+ userAge);


  var catName = prompt('what your catName?');
alert('welcom to your cat'+ catName);


var yourDate= prompt('what is the Date Today?');
alert('Welcom any time'+yourDate);


let cat =prompt('if i love A cat?').toLowerCase();
if(cat=== 'yes' || cat=== 'y'){
  alert('You Have A correct Answer');
}
else if (cat==='no'||cat ==='n') {
  alert('You Have Uncorrect Answer');
}
else{
  alert('Please Enter Yes , No ,Y,N');
}

let coffee =prompt('if I love A coffee ?').toLowerCase();
if(coffee=='yes' || coffee=='y'){
  alert('you are right');
}
else if (coffee=='no' || coffee=='n'){
  alert('you are not right');
}else{
  alert('enter please yes or no or y or n ');
}
let question;
do {
  question = prompt('I love the camp?');
} while (question!== 'yes' && question!=='y' && question!=='no' && question!== 'n');{
  alert('plese inter yes or no or y or n');
}
console.log(question);

let carsName = ['Bugatti Chiron Super Sport +30','Hennessey Venom F5','Koenigsegg Agera RS','Hennessey Venom GT','Bugatti Veyron Super Sport','SSC Ultimate Aero','Koenigsegg Regera','Tesla Roadster','bmw I8','mustang ford'];
for(let i = 0; i < carsName.length; i++){
  console.log(carsName[i]);
}
*/


function userStatement(question , right , notRight){

  let userInput;
  do{
    userInput= prompt(question);

  } while(userInput !== 'yes' && userInput !== 'y' && userInput
    !== 'no' && userInput !== 'n');
  if ( userInput === 'yes' || userInput === 'y'){

    console.log(right);

    alert('good Answer');
    score++;
  } else {
    console.log(notRight);
    alert('the Answer is wrong');
  }
}

let score = 0;

userStatement('do I love cats?' , ' yes i love cats' , 'no i dont');

userStatement('Do I love A coffee' , 'yes i love it' , 'No i dont');

userStatement('do I love camping' , ' y its right' , ' unfortunately No');


userStatement('do I love Cars' , ' yes I do ' , ' no I dont');


function userState(question , right , notRight){

  let userInput;
  do{
    userInput= prompt(question);

  } while(userInput !== 'yes' && userInput !== 'y' && userInput
    !== 'no' && userInput !== 'n');
  if ( userInput === 'no' || userInput === 'n'){

    console.log(right);
    alert('good Answer');

    score++;
  } else {
    console.log(notRight);
    alert('the Answer is wrong');

  }
}

userState('Do I love milk' , ' no, I dont' , 'yes id do like it');


function correctAnswer (){

  let userAnswer = prompt('try to guess number in my mind ,  you only have for chances, lrtss get started ');

  for(let i =0 ; i<3 ; i++){

    if(userAnswer > 21){
      alert('too high');
      userAnswer = prompt(' try again');

    }else if( userAnswer < 21){
      alert('too low');
      userAnswer = prompt(' try again');

    }else if ( userAnswer === '21'){
      alert(' the answer is right');
      score++;
      break;
    }
  }
  alert('the answer is 21');
}
correctAnswer();

let carName = ['Bugatti',' Hennessey Venom F5 ','Koenigsegg RS','Hennessey Venom GT', 'Bugatti Sport' ,'SSC Ultimate Aero','Koenigsegg Regera','Tesla','bmw','mustang ford'];


function carSelect(){
  let car = prompt(' which is my favourite car? , you only have six attempts.');
  outerloop: for(let i= 0 ; i < 5 ; i++){
    for(let k = 0 ; k < carName.length ; k++){

      if(car === carName[k] ){

        alert('you got the correct answer');
        score++;
        break outerloop;
      }
    }
    car = prompt(' try again');
  }
}
carSelect();

alert( ' you got ' + score + '/ 7');
