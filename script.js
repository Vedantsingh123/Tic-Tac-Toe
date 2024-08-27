let boxes = document.querySelectorAll(".input");
let resetbtn = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newgm = document.querySelector(".new");

let turnX = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const reset = () => {
    turnX = true;
    enableinput();
};
const newgame = () => {
    turnX = true;
    msgcontainer.classList.add("hide");
    enableinput();
};
const enableinput = () => {
    for(input of boxes){
        input.disabled = false;
        input.innerText = "";
    }
};
newgm.addEventListener("click", newgame);
resetbtn.addEventListener("click", reset);
 
boxes.forEach((input) => {
    input.addEventListener("click" , () => {
    if(turnX){
        input.innerText = "X";
        turnX = false;
    }
    else{
        input.innerText = "O"
        turnX = true;
    }
    input.disabled = true;
    findwinner();
    });
});
const disableinput = () => {
    for(input of boxes){
        input.disabled = true;
    }
};
const showwinner = (winner) =>{
    msg.innerText = `Congratulation! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");  
    disableinput();
};
 
const findwinner = () =>{
    for(let pattern of winpatterns){
    let idxval1 = boxes[pattern[0]].innerText;
    let idxval2 = boxes[pattern[1]].innerText;
    let idxval3 = boxes[pattern[2]].innerText;
    if(idxval1 != "" && idxval2 != "" && idxval3 != ""){
        if(idxval1 === idxval2 && idxval2 === idxval3){
            showwinner(idxval1);
        }
     }
    }
};
