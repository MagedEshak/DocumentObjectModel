console.log("-- التكليف 05 --");
console.log("----------------------");

let img = document.querySelectorAll("img");

img.forEach(function (e) {
    
    if (e.hasAttribute("alt") === true) {
        e.setAttribute("alt", "Old");
    } else {
            e.setAttribute("alt", "Elzero New");
    }
});