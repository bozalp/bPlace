const canva = document.getElementById("canva");
const colors = document.getElementById("colors");
const emptyBox = document.getElementById("empty-box");

let selectedColor = "#fff";

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const white = document.getElementById("white");
const black = document.getElementById("black");

colorsButtons = [red, green, blue, black, white];

for (let i = 0; i < 25; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 25; j++) {
        const cell = document.createElement("td");
        row.appendChild(cell);
        //cell.style.backgroundColor="gray";
    }
    canva.appendChild(row);
}

const buttons = document.querySelectorAll('td');
buttons.forEach(b => {
    b.addEventListener('click', () =>
        b.style.backgroundColor = selectedColor
    );
})


colorsButtons.forEach(b => {
    b.addEventListener('click', () => {
            selectedColor = b.style.backgroundColor;
    });
})