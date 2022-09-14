function calculator(qoshish, ayrish, kopaytirish, bolish) {

    let a = +document.getElementById('birinchiSon').value
    let b = +document.getElementById('ikkinchiSon').value
    let ishora = document.getElementById('ishora').value

    let natija;

    if (ishora === "+") {
        natija = qoshish(a, b);
    }
    else if (ishora === "-") {
        natija = ayrish(a, b);
    }
    else if (ishora === "*") {
        natija = kopaytirish(a, b);
    }
    else if (ishora === "/") {
        natija = bolish(a, b);
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

function displayResult(natija) {
    let resultDiv = document.getElementById("resultNum")
    resultDiv.innerText = natija
}
