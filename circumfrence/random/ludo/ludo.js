let roll = document.getElementById (`roll`);
let dice1;
let dice2;
let min = 1;
let max = 6;

roll.onclick = function () {
dice1 = Math.floor(Math.random () * max) + min;
document.getElementById("dice1").textContent = `Dice1: ${dice1}`;
dice2 =Math.floor(Math.random() * max) + min;
document.getElementById("dice2").textContent = `Dice2: ${dice2}`;


};