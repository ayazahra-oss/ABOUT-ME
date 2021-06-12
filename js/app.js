'use strict';
let p=prompt('Please Inter Your Name');
alert('Hello '+p+' You Are Welcom');

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

    alert(right);

    score++;
  } else {
    alert(notRight);

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
alert('Goodbay '+p);
