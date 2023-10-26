const heading = document.querySelector('.welcome')
const headingText = heading.textContent;
console.log(headingText.trim())
const splitText = headingText.trim().split('');
heading.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    if (splitText[i] === ' ') {
        heading.innerHTML += "&nbsp"
    } 
    else {
        heading.innerHTML += "<span>" + splitText[i] + "</span>";
    }
}
    

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = heading.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;

    if (char === splitText.length) {
        clearInterval(timer);
        return;
    }
}
