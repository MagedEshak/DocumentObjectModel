console.log("-".repeat(20));
console.log("2- ClassList Object And Methods");
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
console.log("3- CSS Styling And Stylesheet");
console.log("-".repeat(20));


element.style.color = "red";
element.style.fontSize = "50px";

element.style.cssText = "font-size: 70px; font-weight: 900; color: green;";

element.style.removeProperty("color");
element.style.setProperty("background-color", "red", "important");

element.style.removeProperty("background-color");
console.log(document.styleSheets[0].cssRules[0].style.removeProperty("line-height"));
console.log(document.styleSheets[0].cssRules[0].style.setProperty("color", "blue"));

console.log("-".repeat(20));
console.log("4- Before, After, Prepend, Append, Remove");
console.log("-".repeat(20));

/*
    DOM [Deal With Elements]
    - before [Element || String]
    - after [Element || String]
    - append [Element || String]
    - prepend [Element || String]
    - remove
*/

let ele = document.getElementById("my-sDiv");
let createP = document.createElement("p");

createP.append("This a Paragraph");

ele.before(createP); //add element in before element
ele.after(createP); // add element in after element
ele.append(" End"); // add element in the end of element
ele.prepend("HI "); // add element in the top of element
ele.remove(); // remove completely from document

