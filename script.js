const canva = document.getElementById("canva");
const emptyBox = document.getElementById("empty-box");

for (let i = 0; i < 20; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 20; j++) {
        const cell = document.createElement("td");
        row.appendChild(cell);
        //cell.style.backgroundColor="gray";
    }
    canva.appendChild(row);
}

const buttons = document.querySelectorAll('td');
buttons.forEach(b => {
    b.addEventListener('click', ()=>
    b.style.backgroundColor="red"
    );
})