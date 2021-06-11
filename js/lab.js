'use strict';

let score = 0;

let userinput = prompt('do I love cats?').toLowerCase();
console.log('userinput');

if (userinput === 'yes' || userinput === 'y')
{alert('it is right');
score++;

} else if(userinput === 'no' || userinput === 'n'){
  alert('it is not right');
 


}else{
  alert('please inter yes or no or y or n');
}

let Q2 = prompt('do I love camping?').toLowerCase();
console.log('Q2');
if (Q2 === 'yes' || Q2=== 'y'){
  alert('good, it is right');
  score++;
}else if(Q2=== 'no' || Q2=== 'n'){
  alert('it is wrong');
  


}else{
  alert('inter agian please');
}
let Q3 = prompt('Do I love milk?').toLowerCase();
console.log('Q3');
if(Q3 === 'yes' || Q3 === 'y'){
  alert('it is not right');
}else if (Q3 === 'no' || Q3=== 'n'){
  alert('it is right');

  score++;

}else {
  alert('try agian');
}

let coffee =prompt('if I love A coffee ?').toLowerCase();
console.log('coffee');

if(coffee==='yes' || coffee==='y'){
  alert('you are right');
  score++;
}
else if (coffee==='no' || coffee==='n'){
  alert('you are not right');
  

}else{
  alert('enter please yes or no or y or n ');
}

let Q4= prompt('do I love cars').toLowerCase();
console.log('Q4');

if (Q4 === 'yes' || Q4 ==='y'){
  alert( 'yes correct');
  score++;


}else if(Q4=== 'no' || Q4 === 'n'){
  alert('no uncorrect');
  

}else{
  alert('try again');
}

let g=prompt("try to guess number in my mind ,you only have for chances, lrtss get started");
var guess=parseInt(g);

for(var i =0;i<3;i++)
{
   if(guess===21)
   {alert("Thats Correct Ansewr ");
   score++;
   break;
}
else if(guess>21){
    alert("thats high Hot..! ");
    guess=parseInt(prompt("guess agen?"));
}
else if(guess<21)
{
    alert("Thats Low Cold..!");
    guess=parseInt(prompt("guess age?"));
}

}
if(guess!==21)
alert("Tha Correct Answer Is 21");



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






