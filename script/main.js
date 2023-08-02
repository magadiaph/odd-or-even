let userNumber = document.querySelector("#userNumber");
let display = document.querySelector("#display");

function checkNumber() {
    let x = userNumber.value / 2;

    if (parseInt(userNumber.value) % 2 == 0) {
        display.innerHTML = "Yep. An even number.";
    } else if (parseInt(userNumber.value) % 2 !== 0) {
        display.innerHTML = "This is an odd number.";
    } else if (parseInt(userNumber.value) == 0) {
            display.innerHTML = "This is an even number.";
    } else {
        display.innerHTML = "Please enter a valid number.";
    }
}
