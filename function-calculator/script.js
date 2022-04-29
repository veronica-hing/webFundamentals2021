var displayDiv = document.querySelector("#display");
//displayDiv.innerText = answer;

let answer = ""; //will cache the last answer
let typingNums = "";//will be made longer with each number press
let operation = "";

function press(num){
    typingNums+= num;
    displayDiv.innerText = typingNums;
}

function setOP(op){
    //need to have soemthing to add to for first round of things
    answer === "" ? answer = parseFloat(typingNums) : answer = answer;
    operation = op;
    typingNums = ""
}

function calculate(){
    switch(operation){
        case '+':
            answer += parseFloat(typingNums);
            break;
        case '-':
            answer -= parseFloat(typingNums);
            break;
        case '*':
            answer *= parseFloat(typingNums);
            break;
        case '/':
            answer /= parseFloat(typingNums);
            break;
    }
    displayDiv.innerText = answer;
}

function clr(){
    //reset to origs
    answer = "";
    typingNums = "";
    operation = "";
    displayDiv.innerText = typingNums;
}