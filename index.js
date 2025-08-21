let fill = document.querySelectorAll(".fill");





fill.forEach((fill) => {
let target = parseInt(fill.getAttribute("data-target"));
let duration = 1000 / target;
let width = 0;

let chatBox = fill.parentElement.querySelector(".chat-box");


let interval = setInterval(() => {
width++;
fill.style.width = width + "%";
chatBox.innerText = width + "%";
chatBox.style.left  = width + "%";

if(width >= target) clearInterval(interval);

} ,duration)

});