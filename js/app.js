'use strict';

let score = 0;

let userinput = prompt('do I love cats?').toLowerCase();
console.log('userinput');

if (userinput === 'yes' || userinput === 'y')
{alert('it is right');

} else if(userinput === 'no' || userinput === 'n'){
  alert('it is not right');
  score++;


}else{
  alert('please inter yes or no or y or n');
}

let Q2 = prompt('do I love camping?').toLowerCase();
console.log('Q2');
if (Q2 === 'yes' || Q2=== 'y'){
  alert('good, it is right');
}else if(Q2=== 'no' || Q2=== 'n'){
  alert('it is wrong');
  score++;


}else{
  alert('inter agian please');
}
let Q3 = prompt('Do I love milk?').toLowerCase();
console.log('Q3');
if(Q3 === 'yes' || Q3 === 'n'){
  alert('it is not right');
}else if (Q3 === 'no' || Q3=== 'n'){
  alert('it is right');

  score++;

}else {
  alert('try agian');
}

let coffee =prompt('if I love A coffee ?').toLowerCase();
console.log('coffee');

if(coffee=='yes' || coffee=='y'){
  alert('you are right');
}
else if (coffee=='no' || coffee=='n'){
  alert('you are not right');
  score++;

}else{
  alert('enter please yes or no or y or n ');
}

let Q4= prompt('do I love cars').toLowerCase();
console.log('Q4');

if (Q4 === 'yes' || 'y'){
  alert( 'yes correct')


}else if(Q4=== 'no' || Q4 === 'n'){
  alert('no uncorrect');
  score++

}else{
  alert('try again');
}



let usernub = prompt('try to guess number in my mind ,you only have for chances, lrtss get started');
for(let z ; z> 5 ; z++)
{

  if(usernub > 21){
    alert('too high');
    usernub = prompt(' try again');

  }
  else if( usernub < 21){
    alert('too low');
    usernub = prompt(' try again');
  }
  else if(usernub === 21){
    alert('correct answer')
    score++
    break;
  }
  
 if(usernub!==21)
  {alert('the correct answer is 21');}




/*let userAge= prompt('what your old ?').toLowerCase();
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
console.log(question);*/



let favcars = ['hennessey Venom F5','mercedes','tesla','bmw I8','mustang ford'];
for(let i = 0; i < 6 ; i++)
{


  let car = prompt('which is my favourite car? , you only have six attempts.').toLowerCase();
  if (car === favcars[0] || car === favcars[1] || car === favcars[2] || car === favcars[3] || car === favcars[4])
  {
    alert('it is right, good job');
    // eslint-disable-next-line no-unused-vars
    score++;
    break;


  }


  else if(i===5)
  {
    alert('my favcars are hennessey Venom F5,mercedes,tesla,bmw I8,mustang ford ');
  }
  else
  {
    alert('try again');
  }

}
alert( ' you got ' + score + '/ 7');


/*
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

alert( ' you got ' + score + '/ 7')*/
