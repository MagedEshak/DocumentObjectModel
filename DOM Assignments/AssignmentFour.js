console.log("-- التكليف 04 --");
console.log("----------------------");

let one = document.querySelector(".one");
let two = document.querySelector(".two");

var bottle = one.textContent;


one.textContent = two.textContent;

two.textContent = `${bottle} 2`;

one.setAttribute("title", one.textContent.toLowerCase());
two.setAttribute("title", bottle.toLowerCase());