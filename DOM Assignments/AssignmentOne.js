console.log("----------------------");
console.log("-- حل التكليفات --");
console.log("----------------------");

console.log("-- التكليف 01 --");
console.log("----------------------");

console.log("1-",document.getElementById("elzero"));
console.log("2-",document.getElementsByClassName("element")[0]);
console.log("3-",document.getElementsByTagName("div")[0]);
console.log("4-",document.getElementsByName("js")[0]);
console.log("5-",document.querySelector("#elzero"));
console.log("6-",document.querySelector(".element"));
console.log("7-",document.querySelector("div"));
console.log("8-",document.querySelector("[name = 'js']"));
console.log("9-",document.querySelectorAll(".element")[0]);
console.log("10-",document.querySelectorAll("#elzero")[0]);
console.log("11-",document.querySelectorAll("[name = 'js']")[0]);
console.log("12-",document.querySelectorAll("div")[0]);
console.log("13-",document.body.firstElementChild);
console.log("14-",document.body.childNodes[3]);

console.log("-hasAttribute('id'):-",document.getElementById("elzero").hasAttribute('id'));

console.log("-getAttribute('id'):-",document.getElementById("elzero").getAttribute('id'));



