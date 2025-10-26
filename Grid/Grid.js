let wrapperDiv = document.getElementById('wrapperDiv');
let reset = document.getElementById('Reset');
let GridN = document.getElementById('GridN');

GridN.addEventListener('click', () => {
    let gridNum = parseInt(prompt('Enter grid size <=100'));
    if (isNaN(gridNum) || gridNum <= 0) {
        alert("Please enter a valid positive number!");
        return;
    }
    if (gridNum > 100) {
        alert("Please enter a number less than or equal to 100 to avoid lag.");
        return;
    }

    createGrid(gridNum);
});

function createGrid(size) {
    wrapperDiv.innerHTML = ''; 
    wrapperDiv.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    wrapperDiv.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomColor();
        });
        wrapperDiv.appendChild(cell);
    }
}

reset.addEventListener('click', () => {
    wrapperDiv.innerHTML = '';
});

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
