const canva = document.getElementById("canva");
const colors = document.getElementById("colors");
const emptyBox = document.getElementById("empty-box");

let selectedColor = "#fff";

colorsButtons = [];
colorHexCodes = [
    "#ff4500",
    "#ffa800",
    "#ffd635",
    "#00a368",
    "#7eed56",
    "#2450a4",
    "#3690ea",
    "#51e9f4",
    "#811e9f",
    "#b44ac0",
    "#ff99aa",
    "#9c6926",
    "#000",
    "#898d90",
    "#d4d7d9",
    "#fff",
]

CreateMatrix();
CreateColorsButton();
SelectBoxColor();
ChangeBoxColor();

function CreateColorsButton() {

    for (let i = 0; i < colorHexCodes.length; i++) {
        const button = document.createElement("button");
        button.style.backgroundColor = colorHexCodes[i];
        button.className = "color-button";
        colorsButtons[i] = button;
        colors.appendChild(button);
    }
}

function CreateMatrix() {
    for (let i = 0; i < 25; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 25; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
            //cell.style.backgroundColor="gray";
        }
        canva.appendChild(row);
    }
}

function SelectBoxColor() {
    const buttons = document.querySelectorAll('td');
    buttons.forEach(b => {
        b.addEventListener('click', () =>
            b.style.backgroundColor = selectedColor
        );
    })
}

function ChangeBoxColor() {
    colorsButtons.forEach(b => {
        b.addEventListener('click', () => {
            selectedColor = b.style.backgroundColor;
        });
    })
}