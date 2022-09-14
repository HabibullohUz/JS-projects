
let a = document.getElementById("birinchiSon")
let b = document.getElementById("ikkinchiSon")
let ishora = document.getElementById("ishora")
let resultDiv = document.getElementById("resultNum")
let res = document.querySelector("#result")
let temp = '+';

calculate = (aSon, bSon, temp) => {
    return eval(`${aSon} ${temp} ${bSon}`);
}

ishora.addEventListener('change', (e) => {
    temp = e.target.value;
    resultDiv.innerText = calculate(a.value, b.value, temp)
})

res.addEventListener('click', () => {
    resultDiv.innerText = calculate(a.value, b.value, temp)
})