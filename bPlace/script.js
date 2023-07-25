const canva = document.getElementById("canva");
const emptyBox = document.getElementById("empty-box");

for (let i = 0; i < 20; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 20; j++) {
        const cell = document.createElement("td");
       // cell.textContent = `${i + 1},${j + 1}`; // Hücre içine sırasını yazabilirsiniz, isteğe bağlı.
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



//bunu fonksyiona çevir bitince
/*let x, y = 0;
for (let i = 1; i <= 100; i++) {
    const newBox = document.createElement("div");
    newBox.className = "empty-box";

    newBox.style.left = x + 'px';
    if (i > )
        x += 20.25;
    newBox.style.top = y + 'px';
    if (i % 10 === 1) {
        y += 20.25;
        x = 0;
    }
    canva.appendChild(newBox);
    newBox.style.position = "absolute";
}*/