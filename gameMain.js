var table;
var buttons;
var bo;
var buts;
var again;
var congrats;

var howManyBlanks;
var filledCells;
var blanks;
var nums;
var active;


function allNine(){
    for(var i=0; i<9; i++){
        if(nums[i] == 9){
            buttons[Math.floor(i/5)].cells[i%5].style.backgroundColor = "rgba(244, 229, 66)"
        }
    }
}


function setSize(){
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    var ratio = 9/10;
    var hratio = 7/10;
    var fontRatio = 1/14;
    var againFontRatio = 1/16;
    var size;
    if(height <= width){
        size = height * hratio;
    }
    else{
        size = width * ratio;
    }
    bo.style.width = size + "px";
    bo.style.height = size + "px";
    bo.style.fontSize = size*fontRatio + "px";
    buts.style.fontSize = size*fontRatio + "px";
    congrats.style.fontSize = size*fontRatio + "px";
    again.style.fontSize = size*againFontRatio + "px";
}


function markNums(){
    for(var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            if(table[i].cells[j].innerText == active.innerText){
                table[i].cells[j].style.backgroundColor = "rgba(224, 44, 98)"
                continue;
            }

            if(blanks.includes(table[i].cells[j])){
                table[i].cells[j].style.backgroundColor = "rgba(0, 0, 0, 0.6)"
            }
            else{
                table[i].cells[j].style.backgroundColor = "rgba(0, 0, 0,0.4)"
            }
        }
    }
}


function changeActiveNum(event){
    if(nums[parseInt(active.innerText)-1] == 9){
        active.style.backgroundColor = "rgba(244, 229, 66)"
    }
    else{
        active.style.backgroundColor = "rgba(0, 0, 0, 0.4)"
    }
    active = this;
    markNums();
    allNine();
    active.style.backgroundColor = "rgba(224,44,98)";
}


function putNumber(event){
    if(blanks.includes(this)){
        if(active.innerText == "X"){
            if(this.innerText != " "){
                nums[parseInt(this.innerText)-1]--;
                filledCells--;
                if(nums[parseInt(this.innerText)-1]){
                    buttons[Math.floor((parseInt(this.innerText)-1)/5)].cells[(parseInt(this.innerText)-1)%5].style.backgroundColor = "rgba(119, 119, 119)"
                }
                this.innerText = " ";
            }
        }
        else{
            if(this.innerText != active.innerText){
                if(this.innerText == ""){
                    filledCells++;
                }
                else{
                    nums[parseInt(this.innerText)-1]--;
                }
                this.innerText = active.innerText;
                nums[parseInt(this.innerText)-1]++;
                this.style.backgroundColor = "rgba(224,44,98)";
            }
            else{
                filledCells--;
                nums[parseInt(this.innerText)-1]--;
                this.innerText = " ";
                this.style.backgroundColor = "rgba(0,0,0,0.6)";
            }
        }
    }

    if(filledCells == 81){
        if(check(table)){
            document.getElementById("main").style.display = "none";
            document.getElementById("congrats").style.display = "initial";
        }
    }
}


function restart(event){
    window.location.replace(window.location.pathname + window.location.search + window.location.hash);
}


function main(){
    table = document.getElementById("bo").rows;
    buttons = document.getElementById("buttons").rows;
    bo = document.getElementById("bo");
    buts = document.getElementById("buttons");
    again = document.getElementById("again");
    congrats = document.getElementById("congrats");

    fillBoard(table);
    howManyBlanks = 37;
    filledCells = 81 - howManyBlanks;
    blanks = putBlanks(table, howManyBlanks);
    nums = [0,0,0,0,0,0,0,0,0];

    setSize();
    active = buttons[1].cells[4];

    for(var i=0; i<9; i++){
        for(var j=0; j<9; j++){
            if(table[i].cells[j].innerText != " "){
                nums[parseInt(table[i].cells[j].innerText)-1]++;
            }
        }
    }
    allNine();
    
    again.addEventListener("click", restart);
    for(var i=0; i<2; i++){
        for(var j=0; j<5; j++){
          buttons[i].cells[j].addEventListener("click", changeActiveNum);
        }
    }

    for(var i=0; i<9; i++){
        for(var j=0; j<9; j++){
          table[i].cells[j].addEventListener("click", putNumber);
        }
    }
}


window.addEventListener("resize", setSize);
window.addEventListener("load", main, false);
