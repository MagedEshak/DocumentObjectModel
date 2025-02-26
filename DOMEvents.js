console.log("-".repeat(20));
console.log("7- DOM Events");
console.log("-".repeat(20));

/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
console.log("Clicked");
};

window.onresize = function () {
console.log("Scroll");
};
