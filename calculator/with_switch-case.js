function calculator(qoshish, ayrish, kopaytirish, bolishs) {

    let a = document.getElementById("birinchiSon")
    let b = document.getElementById("ikkinchiSon")
    let ishora = document.getElementById("ishora")

    let natija


    switch (ishora) {
        case '+':
            natija === qoshish(a, b)
            break
        case '-':
            natija === ayrish(a, b)
            break
        case '*':
            natija === kopaytirish(a, b)
            break
        case '/':
            natija = bolishs(a, b)
            break
    }
    displayResult(natija)
}


function handleClick() {
    calculator(
        function (a, b) {
            return a + b
        },
        function (a, b) {
            return a - b
        },
        function (a, b) {
            return a * b
        },
        function (a, b) {
            return a / b
        }
    )
}

document.getElementById("result").onclick = function displayResult(natija) {
    let resultDiv = document.getElementById("resultNum")
    resultDiv.innerText = natija
    console.log(natija)
}