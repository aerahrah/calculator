let displayText = [];
let value = 0;
let mode = "";
let firstNum;
let secondNum;
let tempNum;

const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const displayType = document.querySelector(".typed-answer");
const equal = document.querySelector(".equal");
const answerDisplay = document.querySelector(".calculated-answer");
const del = document.querySelector(".delete");
const clear = document.querySelector(".reset");


del.addEventListener("click", () =>{
    displayText.pop();
    displayType.textContent = displayText.join("");
});

equal.addEventListener("click", ()=>{
    operator();
    displayText = [];
});

clear.addEventListener("click", ()=>{
    displayText =[];
    displayType.textContent = "";
    answerDisplay.textContent ="";
});

digits.forEach(element => {
    element.addEventListener("click", ()=>{
            displayText.push(element.textContent);
            displayType.textContent = displayText.join("");
        });
});

operators.forEach(element => {
    element.addEventListener("click", ()=>{
        let str = displayText.join("");
        if(str.includes("+")||str.includes("-")||str.includes("x")||str.includes("÷")){
            if(str.includes("+",str.length-1)||str.includes("-",str.length-1)||str.includes("x",str.length-1)||str.includes("÷",str.length-1)){
                displayText.pop();
                mode = element.textContent; 
                displayText.push(element.textContent);
                displayType.textContent = displayText.join("");
            }else{
                displayText.pop();
            }
   
        }else{
            if(displayText.length === 0){
                if(firstNum===undefined && displayType.textContent == ""){
                    displayText.push(0);
                }else if(firstNum == undefined){
                    displayText.push(displayType.textContent);

                }else displayText.push(answerDisplay.textContent);
            }
            mode = element.textContent;
            displayText.push(element.textContent);   
            displayType.textContent = displayText.join("");       
        }
    });
});

let operator = () =>{
    let str = displayText.join("").split(mode);
    console.log(str);
    if(str.length <=1 && str.length >=0){
        if(firstNum == undefined) answerDisplay.textContent = displayType.textContent;
        else if(secondNum == ""||displayText == 0) answerDisplay.textContent = firstNum; 
    }else{
        firstNum = str[0];
        secondNum = str[1];
        console.log(firstNum);
        console.log(secondNum);
        if(secondNum == "") answerDisplay.textContent = firstNum;
        else{
            if(mode == "x") firstNum = firstNum*secondNum;
            else if(mode == "÷") firstNum = firstNum/secondNum;
            else if(mode == "+") firstNum = parseInt(firstNum)+parseInt(secondNum);
            else if(mode == "-") firstNum = firstNum-secondNum;
            answerDisplay.textContent = firstNum;
        }
    }
};
