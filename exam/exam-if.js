function exam() {

    let math = +document.getElementById("math").value
    let physics = +document.getElementById("physics").value
    let history = +document.getElementById("history").value
    let natija = math + physics + history

    if (math >= 85 && physics >= 65 && history >= 80) {

        alert("You have been accepted to university")
    }
    else {
        alert("You failed the exam")
    }



    function displayResult(natija) {
        let resultDiv = document.getElementById("resultDiv")
        resultDiv.innerText = natija
    }
}
