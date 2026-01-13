// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = 'Hey I’m red!';
redText.style.color = "red"

const blueText = document.createElement("h3");
blueText.classList.add("blueText");
blueText.textContent = 'I’m a blue h3!';
blueText.style.color = "blue"

const pinkDiv = document.createElement("div");
pinkDiv.classList.add("pinkDiv")
pinkDiv.setAttribute("style", "background-color: pink; border: 1px, solid, black;")

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = 'I’m in a div';
pinkDiv.appendChild(h1)

const p = document.createElement("p");
p.classList.add("p");
p.textContent = 'ME TOO!';
pinkDiv.appendChild(p)

container.appendChild(content);
container.appendChild(redText);
container.appendChild(blueText)
container.appendChild(pinkDiv)

function alertFunction(){
    alert("Hello World");
}
const btn2 = document.querySelector("#btn2");
btn2.onclick = alertFunction;

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click",function(e){
    console.log(e);
});
