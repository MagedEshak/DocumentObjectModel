console.log("-- التكليف 03 --");
console.log("----------------------");

let dollarInput = document.querySelector("[name = 'dollar']");
let divTra = document.querySelector(".result");

document.forms[0].onsubmit = function (e) {
    let inputValid = false;
    
    console.log(dollarInput.value);
    console.log(dollarInput.value.length);

    if (dollarInput.value !== "") {
        let traValue = dollarInput.value * 50.63;

        divTra.textContent = `{${dollarInput.value}} USD Dollar = {${traValue.toFixed(2)}} Egyptian Pound`;
    } else {
        alert("Please Input Value");
}

    if (inputValid === false) {
        e.preventDefault();
    }

};

