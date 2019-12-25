function check(board){
    var sum;
    for(var i=0; i<9; i++){
        sum = 0;
        for(var j=0; j<9; j++){
            if(board[i].cells[j].innerText == " "){
                continue;
            }
            sum += parseInt(board[i].cells[j].innerText);
        }

        if(sum != 45){
            return false;
        }
    }

    for(var i=0; i<9; i++){
        sum = 0;
        for(var j=0; j<9; j++){
            if(board[j].cells[i].innerText == " "){
                continue;
            }
            sum += parseInt(board[i].cells[j].innerText);
        }

        if(sum != 45){
            return false;
        }
    }

    return true;
}
