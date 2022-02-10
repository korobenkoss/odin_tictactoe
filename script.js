function Player(sign) {

    const currentSign = sign;

    const makeMove = (event) => {
        
        const currentRow = parseInt(event.target.parentElement.dataset.row);
        const currentColumn = parseInt(event.target.dataset.column);
        
        if(!event.target.classList.contains('busy')) {
            event.target.textContent = currentSign;
            GameBoard.board[currentRow - 1][currentColumn - 1] = currentSign;
            event.target.classList.add('busy');
            // console.log(GameBoard.board)
            GameBoard.checkWinner(GameBoard.board)
        }
    }

    return { makeMove, currentSign }
}

const GameBoard = (() => {
    let board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    let turnX = true;

    let playerOne = Player('X');
    let playerTwo = Player('O');
    const cells = document.querySelectorAll('.cell');
    // console.log(cells, cells.entries);
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            turnX ? playerOne.makeMove(e) : playerTwo.makeMove(e);
            turnX = !turnX;
        })
    })

    function checkWinner(b) {
        checkRow(b);
        checkColumn(b);
        checkDiagonalR2L(b);
        checkDiagonalL2R(b);
    }

    function checkRow(b) {
        for(let row = 0; row < b.length; row++) {
            let win = [];
            for(let col = 0; col < b[row].length; col++){
                win.push(b[row][col]);
            }
            console.log("win candidate: ", win)
            if(win.every(c => c === playerOne.currentSign)) {
                console.log("we have a winner 1");
                break;
            } else if(win.every(c => c === playerTwo.currentSign)) {
                console.log("we have winner 2");
                break;
            }
        }
        return;
    }

    function checkColumn(b) {
        for(let row = 0; row < b.length; row++) {
            let win = [];
            for(let col = 0; col < b[row].length; col++){
                win.push(b[col][row]);
            }
            console.log("win candidate: ", win)
            if(win.every(c => c === playerOne.currentSign)) {
                console.log("we have a winner 1");
                break;
            } else if(win.every(c => c === playerTwo.currentSign)) {
                console.log("we have winner 2");
                break;
            }
        }
        return;
    }

    function checkDiagonalR2L(b) {
        for(let row = 0; row < b.length; row++) {
            let win = [];
            for(let col = 0; col < b[row].length; col++){
                win.push(b[col][col]);
            }
            console.log("win candidate: ", win)
            if(win.every(c => c === playerOne.currentSign)) {
                console.log("we have a winner 1");
                break;
            } else if(win.every(c => c === playerTwo.currentSign)) {
                console.log("we have winner 2");
                break;
            }
        }
        return;
    }

    function checkDiagonalL2R(b) {
        for(let row = 0; row < b.length; row++) {
            let win = [];
            for(let col = 0; col < b[row].length; col++){
                win.push(b[col][b.length - 1 - col]);
            }
            console.log("win candidate: ", win)
            if(win.every(c => c === playerOne.currentSign)) {
                console.log("we have a winner 1");
                break;
            } else if(win.every(c => c === playerTwo.currentSign)) {
                console.log("we have winner 2");
                break;
            }
        }
        return;
    }



    return {board, checkWinner}
})()
