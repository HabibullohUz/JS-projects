function salomlashish(functionA, functionB) {

    let yosh = prompt("Yoshingizni kiriting")
    if (yosh >= 30) {
        functionA()
    }
    else functionB()
}

function handleClick() {
    salomlashish(function () { alert("Assalamu Alaykum")}, function () { alert("Salom Bro ✌️") })
}

//kod qisqartirildi

// function qariSalomlashish() {
//     alert("Assalamu Alaykum")
// }

// function yoshSalomlashish() {      // bu funksiya
//     alert("Salom Bro ✌️")
// }
