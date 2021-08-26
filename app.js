const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#lucky-number")
const checkNumberButton = document.querySelector("#check-number")
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
    if(sum % luckyNumber == 0) {
        outputBox.innerText =  "Your B'day is lucky !";
    } else {
        outputBox.innerText = "You make your own luck !";
    }
}

function checkBirthDateIsLucky() {
    const birthDate = dateOfBirth.value;
    const sum = calculateSum(birthDate);
    if(sum > 0 && birthDate) {
        outputBox.innerText = "Please enter correct values."
    }
    compareValues(sum, luckyNumber.value);
}

function calculateSum(birthDate) {
    birthDate = birthDate.replaceAll("-","");
    let sum = 0;
    for(let index=0;index<birthDate.length;index++) {
        sum += (birthDate.charAt(index) - '0');
    }
    return sum;
}

checkNumberButton.addEventListener('click', checkBirthDateIsLucky)