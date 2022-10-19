// kmputer random son tanlaydi
// siz random sonni topish kerak
// toki topkunizgacham divni ichida color siz inputga kiritgan sonni belgilab oladi

const input = document.querySelector('.input')
const inputId = document.getElementById('input')
const btn = document.getElementById('btn')
const form = document.querySelector('.form')
const correct = document.querySelector('.correct')
const wrong = document.querySelector('.wrong')
const container = document.querySelector('.container')
const formId = document.getElementById('form')
const resultDiv = document.querySelector(".resultDiv");

let num = ''
const randomNum = () => {
    num = Math.floor(Math.random() * 11)
    console.log(num)
}
randomNum();

formId.addEventListener('submit', (e) => {
    e.preventDefault()
    input.value = ''
})

input.addEventListener('input', () => {
    if (input.value !== "") {
        btn.removeAttribute("disabled")
    } else {
        btn.setAttribute("disabled", "");
    }
})

const helpFunc = () => {
    if (+input.value > 11 || +input.value < 0) {
        wrong.style.display = 'none'
        correct.style.display = 'none'
        container.style.border = '4px solid yellow'
        resultDiv.innerHTML = 'please enter a number between 0 and 10 🙄'
    } else if (+input.value > num) {
        resultDiv.innerHTML = "Big 👻";
    } else if (+input.value < num) {
        resultDiv.innerHTML = "Small 🤡";
    } else {
        resultDiv.innerHTML = "Correct 😎";
    }
}

function findNum() {

    if (btn.innerHTML === 'Continue') {
        wrong.style.display = 'none'
        correct.style.display = 'none'

        btn.innerHTML = "Find";
        btn.setAttribute("disabled", "");

        resultDiv.innerHTML = "";
        randomNum();

    } else {
        helpFunc();
        if (num === Number(input.value)) {
            container.style.border = '4px solid green'
            correct.style.display = 'block'
            wrong.style.display = 'none'

            btn.innerHTML = "Continue"
        } else {
            container.style.border = '4px solid red'
            wrong.style.display = 'block'
            correct.style.display = 'none'
        }
    }
}
