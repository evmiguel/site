const heading = document.querySelector('h1')
const headingText = heading.textContent;
const splitText = headingText.split("");
heading.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    heading.innerHTML += "<span>" + splitText[i] + "</span>";
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
