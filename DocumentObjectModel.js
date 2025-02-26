console.log("1- What Is DOM ? And Select Elements");
console.log("-".repeat(20));

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myID = document.getElementById("my-div");
let myTag = document.getElementsByTagName("p");
let myClass = document.getElementsByClassName("my-span");
let mySelector= document.querySelector(".my-span");
let myAllSelector = document.querySelectorAll(".my-span");

console.log(myID);
console.log(myTag[1]);
console.log(myClass[1]);
console.log(mySelector);
console.log(myAllSelector[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].name.value);
console.log(document.links[1].href);




console.log("-".repeat(20));
console.log("2- Get, Set Elements And Attributes");
console.log("-".repeat(20));
/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute
*/

let myEle = document.querySelector(".js");

console.log(myEle.innerHTML);
console.log(myEle.textContent);

myEle.innerHTML = "Hi Maged <span>Eshak</span>";
myEle.textContent = "Hi Maged <span>Eshak</span>";

document.images[0].src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjE1so9vdok-71BKkeEdFJhO1ai33BDFN7w&s";
document.images[0].alt = "NTI img";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let link = document.querySelector(".link");

console.log(link.getAttribute("class"));
console.log(link.getAttribute("href"));

link.innerHTML = "X";
link.setAttribute("href", "https://x.com/home");
link.setAttribute("title", "X");

console.log("-".repeat(20));
console.log("3- Check Attributes And Examples"); 
console.log("-".repeat(20));
/*
DOM [Check Attributes]
    - Element.attributes
    - Element.hasAttribute
    - Element.hasAttributes
    - Element.removeAttribute
*/
let myP = document.getElementsByTagName("p")[0];
myP.setAttribute("title", "Paragraph 1");
myP.setAttribute("data-src", "");

console.log(myP.attributes);

if (myP.hasAttribute("title")) {
    if (myP.getAttribute("title" === "")) {
        myP.removeAttribute("title");
    } else {
            myP.setAttribute("title" , "New Paragraph");
    }
} else {
        console.log("Not Found");
}

if (myP.hasAttributes) {
        console.log("Has Attributes");
}

if (document.getElementsByTagName("hr")[0].hasAttributes()) {
    console.log(`Has Attributes => ${document.getElementsByTagName("hr")[0].attributes}`);
} else {
    console.log("Not Has Attributes");
} 


console.log("-".repeat(20));
console.log("4- Create and Append Elements");
console.log("-".repeat(20));

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/
let myHr = document.createElement("hr");
let myDiv = document.createElement("div");
let myAtt = document.createAttribute("data-custom");
let txt = document.createTextNode("Product One");
let comm = document.createComment("this is P one");

myDiv.className = "Product";
myDiv.setAttributeNode(myAtt);
myDiv.setAttribute("data-set", "Testing");

//Append to div
myDiv.appendChild(txt);
myDiv.prepend(comm);

//Append to body
document.body.appendChild(myHr);
document.body.appendChild(myDiv);

console.log("-".repeat(20));
console.log("5- Product With Title And Description Practice");
console.log("-".repeat(20));

let myDivElement = document.createElement("div");
let myHeadingElement = document.createElement("h2");
let myParagraphElement = document.createElement("p");

let TitleName = "" || "........";
let myHeadingText = document.createTextNode(`Product Title ${TitleName}`);
let myParagraphText = document.createTextNode("Product Discretion");

myDivElement.className = "producing";

//Add Text to Head
myHeadingElement.appendChild(myHeadingText);

//Add Text to Paragraph
myParagraphElement.appendChild(myParagraphText);

//Add to Div
myDivElement.appendChild(myHeadingElement);
myDivElement.appendChild(myParagraphElement);

//Append to body
document.body.appendChild(myHr);
document.body.appendChild(myDivElement);



console.log("-".repeat(20));
console.log("7- DOM Events");
console.log("-".repeat(20));



console.log("-".repeat(20));
console.log("8- Validate Form And Prevent Default");
console.log("-".repeat(20));