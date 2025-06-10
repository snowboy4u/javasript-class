let countervalue = document.getElementById("counter_value");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let count = 0


increase.onclick = function () {
count++;
countervalue.textContent = count ;
} ;

decrease.onclick = function () {
count--;
countervalue.textContent = count ;
} ;


reset.onclick = function () {
count = 0 ;
countervalue.textContent = count ;

}
