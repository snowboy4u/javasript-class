let welcometnx = document.getElementById("welcometnx");
let input = document.getElementById("input");
let enterbtn = document.getElementById("enterbtn");
let username ;

enterbtn.onclick = function () {
username = input.value ;
welcometnx.textContent = `welcome ${username}`

} ;