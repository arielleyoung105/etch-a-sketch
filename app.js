const board = document.querySelector('#board');
const button = document.querySelector('button');
let squares = 16;

for (let i = 0; i < (squares * squares); i++) {
    let div = document.createElement('div');
    board.appendChild(div);
}

let cell = document.querySelectorAll('#board div');

cell.forEach(box => {
    // box.style.height = '40px';
    box.className = 'cell';
})

board.addEventListener("mouseover", function(e) {
    if (e.target.className === 'cell') {
        e.target.style.backgroundColor = "#3b3b3b";
    }
})

button.addEventListener("click", function(e) {
    document.querySelectorAll('#board div').forEach(box => box.style.backgroundColor = "initial");

    squares = prompt(`
        BOARD RESET: How many units wide and tall should board be?
        Example: Type '16' and the board will be 16x16.
        `);

    if (squares <= 100) {
        board.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;
        board.style.gridTemplateRows = `repeat(${squares}, 1fr)`;

        if ((squares * squares) > cell.length) {
            for (let i = 0; i < ((squares * squares) - cell.length); i++) {
                let div = document.createElement('div');
                board.appendChild(div);
            }
            document.querySelectorAll('#board div').forEach(box => {
                box.className = 'cell';
            })
        } else if (cell.length > (squares * squares)) {
            for (let i = 0; i < (cell.length - (squares * squares)); i++) {
                board.removeChild(board.lastChild);
            }
        }
    } else {
        alert('Number must be 100 or smaller. Please try again.');
        squares = prompt(`
        BOARD RESET: How many units wide and tall should board be?
        Example: Type '16' and the board will be 16x16.
        `);
    }
})

