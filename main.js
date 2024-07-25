let resetbtn = document.querySelector("#resetbtn");
let boxes = document.querySelectorAll(".box");
let turnO = true;
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let clickCount = 0;
 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const enableBoxes = () =>{
    boxes.forEach((box) => {
        box.innerHTML = "";
        box.disabled = false;
    })
    turnO = true;
    msgContainer.classList.add("hide");
    clickCount = 0;
}
const draw = () =>{
    msg.innerText = "It is a draw";
    msgContainer.classList.remove("hide");
    clickCount = 0;
}
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        if (turnO){
            box.innerText = "O";
            box.style.color = "#003366";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "#F08080";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
        clickCount++;
        if (clickCount == 9 && !checkWin()){
            draw();
        }
    })
})
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
}
const checkWin = () => {
    for (pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3!= ""){
             if (pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
                msgContainer.classList.remove("hide");
                boxes.forEach((box) => {
                    box.disabled = true;
                })
                clickCount = 0;
                return true;
             }
        }
    }
    return false;
}
resetbtn.addEventListener("click",enableBoxes);
newbtn.addEventListener("click", enableBoxes);
