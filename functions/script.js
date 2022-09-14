function salomlashish(functionA, functionB) {

    let yosh = prompt("Yoshingizni kiriting")
    if (yosh >= 30) {
        functionA()
    }
    else functionB()
}

function handleClick() {
    salomlashish(qariSalomlashish, yoshSalomlashish)
}

function qariSalomlashish() {
    alert("Assalamu Alaykum")
}

function yoshSalomlashish() {
    alert("Salom Bro ✌️")
}
