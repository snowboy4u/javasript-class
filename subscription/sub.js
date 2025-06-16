let subscribeBtn = document.getElementById(`subscribeBtn`)
let visaBtn = document.getElementById(`visaBtn`)
let masterBtn = document.getElementById("masterBtn")
let verveBtn = document.getElementById("verveBtn")
let submitBtn = document.getElementById("submitBtn")
let subscribeTxt = document.getElementById("subscribeTxt")
let paymentTxt = document.getElementById("paymentTxt")

submitBtn.onclick = function () {
if (subscribeBtn.checked) {
    subscribeTxt.textContent = `you have subscribe succesfully`;
} else {
    subscribeTxt.textContent = `you have not subscribed`;
} 
if (visaBtn.checked) {
paymentTxt.textContent = `you are paying with visa`;
}else if (masterBtn.checked) {
    paymentTxt.textContent =`you are paying with mastercard `;
}else if (verveBtn.checked) {
paymentTxt.textContent =`you are paying with card`;
}else {
    paymentTxt.textContent = `no payment option selected`;
}
};