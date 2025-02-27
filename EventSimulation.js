console.log("-".repeat(20));
console.log("1- Event Simulation – Click, Focus, Blur");
console.log("-".repeat(20));


let one = document.querySelector(".one");
let two = document.querySelector(".two");

// window.onload = function () {
//     two.focus();
// };

// one.onblur = function () {
//     document.links[0].click();
// };

one.onblur = function () {
    if (one.value !== "" && one.value.length === 2) {
        two.focus();
    } else {
        one.focus();
    }
};

