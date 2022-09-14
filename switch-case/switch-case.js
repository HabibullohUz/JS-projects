// let weekDays = prompt("Enter the days of the week")


let btn = document.getElementById("btn")
btn.addEventListener('click', function weekDays() {

    let input = +document.getElementById("input").value
    let box = document.getElementById("box")
    box.innerHTML = "Haftaning " + input + " kuni 📅"

    console.log("haftaning ", input, " kuni")

    switch (input) {
        case 1:
            alert("Monday")
            break;
        case 2:
            alert("Tuesday")
            break;
        case 3:
            alert("Wednesday")
            break;
        case 4:
            alert("Thursday")
            break;
        case 5:
            alert("Friday")
            break;
        case 6:
            alert("Saturday")
            break;
        case 7:
            alert("Sunday")
            break;
    }

})