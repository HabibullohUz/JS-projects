function salomlashish(functionA, functionB) {

    let yosh = prompt("Yoshingizni kiriting")
    if (yosh >= 30) {
        functionA()
    }
    else functionB()
}

function handleClick() {
    salomlashish(() => { alert("Assalamu Alaykum") }, () => { alert("Salom Bro ✌️") })

    // kod qisqartirildi // functionni ochirib arrow function ishlatildi
}
