console.log("-- التكليف 04 --");
console.log("----------------------");

let one = document.querySelector(".one");
let two = document.querySelector(".two");

var butt = one.textContent;


one.textContent = two.textContent;

two.textContent = `${butt} 2`;


one.setAttribute("title", one.textContent.toLowerCase());
two.setAttribute("title", butt.toLowerCase());