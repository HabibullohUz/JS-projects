function shablon(ism, yosh, fam) {
    this.ism = ism
    this.yosh = yosh
    this.fam = fam
}
const myArr = []
function qoshish() {
    let ism = document.getElementById('ism').value
    let yosh = document.getElementById('yosh').value
    let fam = document.getElementById('fam').value
    myArr.push(new shablon(ism, yosh, fam))
    console.log(myArr);
    console.log(myArr[0].ism)
}


function ufcshablon(name, age, from, wins, losses) {
    this.name = name
    this.age = age
    this.from = from
    this.wins = wins
    this.losses = losses
}
const ufcFighters = [
    new ufcshablon('Islam Makhachev', 30, 'Russia', 17, 1),
    new ufcshablon('Isreal Adesanya', 34, 'New Zealand', 21, 6),
    new ufcshablon('Alex Volkanoski', 29, 'Australia', 40, 30),
    new ufcshablon('Charles Oliviera', 35, 'Brasil', 7, 0)
]



// ---------------------------------------------------------------------------------------------------
let golib = 0
let golibismi;
ufcFighters.forEach((v, i, arr) => {
    if (v.wins - v.losses > golib) {
        golib = v.wins - v.losses
        golibismi = v.name
    }
})
console.log(golibismi);
