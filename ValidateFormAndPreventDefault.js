console.log("-".repeat(20));
console.log("8- Validate Form And Prevent Default");
console.log("-".repeat(20));

// document.links[0].onmouseenter = function (event) {
//     console.log(event)
// }

let userInput = document.querySelector("[name = 'username']");
let ageInput = document.querySelector("[name = 'age']");

document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;

    console.log(userInput.value);
    console.log(userInput.value.length);

    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true; 
    }
    if (ageInput.value !== "") {
        ageValid = true;
    }
    
    if (userValid === false || ageValid === false) {
        e.preventDefault(); // preventDefault() =>  منع التصرف الافتراضي للحدث
    }
};

document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
};