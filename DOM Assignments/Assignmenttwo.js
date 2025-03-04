console.log("-- التكليف 02 --");
console.log("----------------------");

let img = document.querySelectorAll("img");

console.log(img);

img.forEach(function (ele) {
    ele.setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    ele.setAttribute("alt", "Elzero Logo");
});

document.body.style.backgroundColor = "black";