let isLoggedIn = false ;
let username ;
let password;

while(!isLoggedIn) {
username = window.prompt ("Enter username");
password = window.prompt("enter password");

if (username === "snow" && password === "123") {
console.log("loggin");
isLoggedIn = true;

}else {
    console.log("wrong credentials")
}
}