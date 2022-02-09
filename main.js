let currentAnswer = 0;
let num1 = '';
let num2 = '';


let bttn7 = document.getElementById('bttn7');


function getValue(id) {
    let element = document.getElementById(id).value;
    console.log(element);
}

bttn7.addEventListener('click', () => getValue(this.id));
