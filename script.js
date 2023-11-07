console.log("script.js");
console.clear();

const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

var len = 4;

let isNum = false;
let isChars = true;
let isSymbols = false;

let numbers = "0987654321";
let characters = "qwertyuiopasdfghjklzxcvbnm";
let symbols = "!@#$%^&*()[]{}|/?><~";

let charCheck = document.querySelector("input[name='chars']");
let symbolCheck = document.querySelector("input[name='symbols']");
let numCheck  = document.querySelector("input[name='numbers']");

function getchars(){
    let tempChars = "";
    
    if (numCheck.checked == true) {
        isNum = true;
    }else{
        isNum = false;
    }

    if (charCheck.checked == true) {
        isChars = true;
    }else{
        isChars = false
    }

    if (symbolCheck.checked == true) {
        isSymbols = true;
    }else{
        isSymbols = false;
    }

    if (isNum) {
        tempChars += numbers;
    }

    if (isChars) {
        tempChars += characters;
    }

    if (isSymbols) {
        tempChars += symbols;
    }

    return tempChars;

}

function generatePassword(){

    let chars = getchars()

    var pass = "";

    while (pass.length < len) {
        let randomIndex = Math.floor(Math.random()*(chars.length));
        pass += chars[randomIndex];
    }

    return pass;

}


let checkboxes = document.querySelectorAll("input[type='checkbox']");

btn.addEventListener('click', () =>{
    len = document.getElementById("len").value;

    checkboxes.forEach(box => {
        box.addEventListener('click', ()=> {
            btn.disabled = false;
            if (charCheck.checked == false) {
                if (numCheck.checked == false) {
                    if (symbolCheck.checked == false) {
                        btn.disabled = true;
                    }
                }
            }
        });
    });

    result.innerText = generatePassword();
});


result.innerHTML = generatePassword();

const radiobtns = document.querySelectorAll("input[type='radio']");

radiobtns.forEach(radio => {
    radio.addEventListener('click', ()=>{
        radiobtns.forEach(rbtn => {
            rbtn.parentElement.classList.remove("active");
        });
        radio.parentElement.classList.add('active');
    });
});

const checkboxbtns = document.querySelectorAll("input[type='checkbox']");

checkboxbtns.forEach(checkbox => {
    checkbox.addEventListener('click', ()=>{
        if (checkbox.checked == true) {
            checkbox.parentElement.classList.add('active');
        }else{
            checkbox.parentElement.classList.remove('active');
        }
    });
});

const copyButton = document.getElementById("copy");
const resultElement = document.getElementById("result");

copyButton.addEventListener("click", function() {
    // Create a range to select the text within the result element
    const range = document.createRange();
    range.selectNode(resultElement);
    // Select the text within the range
    window.getSelection().removeAllRanges(); // Clear any previous selection
    window.getSelection().addRange(range);
    // Copy the selected text to the clipboard
    document.execCommand("copy");
    // Deselect the text
    window.getSelection().removeAllRanges();
    // Optionally, provide user feedback
    copyButton.textContent = "Copied!";
    setTimeout(function() {
        copyButton.textContent = "Copy";
    }, 1500);
});

let range = document.getElementById("len");

range.addEventListener("input", ()=>{
    document.querySelector(".len-val").innerHTML = range.value;
});