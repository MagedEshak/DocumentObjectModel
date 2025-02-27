console.log("-".repeat(20));
console.log("6- ClassList Object And Methods");
console.log("-".repeat(20));

/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
};

console.log("-".repeat(20));
console.log("6- CSS Styling And Stylesheet");
console.log("-".repeat(20));