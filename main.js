let currentAnswer = 0;
let num1 = '';
let num2 = '';
let which = 1;
let validNumbers = ['1','2','3','4','5','6','7','8','9']



// the displays
let displayNumber = document.getElementById('currentNumber');
let displayEquation = document.getElementById('');


//Button for numbers
let bttn1 = document.getElementById('bttn1');
let bttn2 = document.getElementById('bttn2');
let bttn3 = document.getElementById('bttn3');
let bttn4 = document.getElementById('bttn4');
let bttn5 = document.getElementById('bttn5');
let bttn6 = document.getElementById('bttn6');
let bttn7 = document.getElementById('bttn7');
let bttn8 = document.getElementById('bttn8');
let bttn9 = document.getElementById('bttn9');
let bttn0 = document.getElementById('bttn0');

//Buttons for the operations 
let remainder = document.getElementById('bttnRemainder');
let divsion = document.getElementById('bttnDivison');
let multiply = document.getElementById('bttnMulti');
let subtract = document.getElementById('bttnSub');
let add = document.getElementById('bttnAdd');
let decmial  = document.getElementById('bttndecmial');
let power = document.getElementById('bttnPower');
let bttnEqual = document.getElementById('bttnEqual');

function getValue(event) {
    let clickedElement = event.target;
    let number = clickedElement.value;
    console.log(number);
    if (number == 'operation'){
        console.log('w');
    } else if (number != '0' || num1.length != 0){
        num1 += number;
        displayNumber.textContent = num1;
    }


}



bttn1.addEventListener('click', getValue);
bttn2.addEventListener('click', getValue);
bttn3.addEventListener('click', getValue);
bttn4.addEventListener('click', getValue);
bttn5.addEventListener('click', getValue);
bttn6.addEventListener('click', getValue);
bttn7.addEventListener('click', getValue);
bttn8.addEventListener('click', getValue);
bttn9.addEventListener('click', getValue);
bttn0.addEventListener('click', getValue);

remainder.addEventListener('click', getValue);
