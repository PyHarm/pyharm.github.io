function shiftArr(arr, n){
    var res = [];
    for(var i=0; i<arr.length; i++){
        if(i+n>arr.length-1){
            res[i+n-arr.length] = arr[i];
            continue;
        }
        res[i+n] = arr[i];
    }
    return res;
}

function putNums(board, row, y){
    for(var j=0; j<9; j++){
        board[y].cells[j].innerText = row[j];
    }
}

function fillBoard(board){
    var nums;
    var selected;
    nums = [1,2,3,4,5,6,7,8,9];
    var row = [];

    for(var j=0; j<9; j++){
        selected = nums.splice(Math.floor(Math.random() * nums.length), 1)[0];
        row.push(selected);
    }

    putNums(board, row, 0);
    row = shiftArr(row, 3);
    putNums(board, row, 1);
    row = shiftArr(row, 3);
    putNums(board, row, 2);

    row = shiftArr(row, 1);
    putNums(board, row, 3);
    row = shiftArr(row, 3);
    putNums(board, row, 4);
    row = shiftArr(row, 3);
    putNums(board, row, 5);

    row = shiftArr(row, 1);
    putNums(board, row, 6);
    row = shiftArr(row, 3);
    putNums(board, row, 7);
    row = shiftArr(row, 3);
    putNums(board, row, 8);
}
