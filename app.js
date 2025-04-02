let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-contanier");
let msg = document.querySelector("#msg");

let turn0 = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetgame =()=>{
    turn0=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    })
})

const disabledboxes=() => {
    for (box of boxes) {
        box.disabled=true;

    }
};
const enabledboxes=() => {
    for (box of boxes) {
        box.disabled=false;
        box.innerText="";

    }
};

const showwinner =(winner)=>{
    msg.innerText=`congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkwinner = () => {
    for (pattern of winpatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showwinner(pos1val);
            }
        }

    }
};

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);