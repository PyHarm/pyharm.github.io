function erase(board, x, y){
    board[y].cells[x].innerText = " ";
    board[y].cells[x].style.backgroundColor = "rgba(0,0,0,0.6)";
}

function putBlanks(board, n){
    var blanks = [];
    var ran;
    var visited = [];
    while(blanks.length < n){
        ran = Math.floor(Math.random() * 81);
        while(visited.includes(ran)){
            ran = Math.floor(Math.random() * 81);
        }

        visited.push(ran);
        erase(board, ran%9, Math.floor(ran/9));
        blanks.push(board[Math.floor(ran/9)].cells[ran%9]);
    }
    return blanks;
}
