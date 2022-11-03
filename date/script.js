const kitoblar = [
    new Kitob("Harry Potter", "Rowling", 300, 1999),
    new Kitob("LOTR", "Tolkien", 600, 1945),
    new Kitob("Shaytanat", "Tohir Malik", 200, 2000),
    new Kitob("Otgan kunlar", "Abdulla Qodiriy", 700, 1930),
];

function Kitob(nomi, avtor, betlarSoni, yil) {
    this.nom = nomi;
    this.avtor = avtor;
    this.betlarSoni = betlarSoni;
    this.yil = yil;
    this.date = new Date()
}

function mahsulotQoshish() {
    const nom = document.getElementById("nom").value;
    const avtor = document.getElementById("avtor").value;
    const betlarSoni = document.getElementById("betlarSoni").value;
    const yil = document.getElementById("yil").value;

    if (nom == "" && avtor == "" && betlarSoni == "" && yil == "") {
        alert("Hechnima kiritmadingiz");
        return;
    }

    const yangiKitob = new Kitob(nom, avtor, betlarSoni, yil);
    kitoblar.push(yangiKitob);
    displayBooks(kitoblar);

    document.getElementById("nom").value = "";
    document.getElementById("avtor").value = "";
    document.getElementById("betlarSoni").value = "";
    document.getElementById("yil").value = "";
}

function displayBooks(arr) {
    document.querySelector('.ota').innerHTML = '';
    arr.forEach((kitob) => {
        document.querySelector(".ota").innerHTML +=
            `<div class="bola">
        <h3>Kitob nomi:${kitob.nom}</h3>
        <h5>Avtor:${kitob.nom}</h5>
        <h5>Betlarsoni:${kitob.betlarSoni}</h5>
        <h5>yili:${kitob.yil}</h5>
        <h5 class="sana">${kitob.date.toLocaleString()}</h5>
        <button onclick="">ochirish</button>
    </div>` ;
    });
}

displayBooks(kitoblar);


document.getElementById('search').addEventListener('input', (e) => {
    const searchRegex = new RegExp(e.target.value, 'gi')
    const saralangarKitoblar = kitoblar.filter((kitob) => {
        return searchRegex.test(kitob.nom)
    })

    ekrangaChiqarish(saralangarKitoblar)
})

/* --------------------- */
const dateArray = [
    { ism: 'Eshmat', sana: new Date('1956-01-01') },
    { ism: 'Toshmat', sana: new Date('2006-05-04') },
    { ism: 'Anvar', sana: new Date('2003-04-03') },
    { ism: 'Bekzod', sana: new Date('1989-05-05') },
    { ism: 'Tolib', sana: new Date('1985-11-11') },
    { ism: 'Turdiali', sana: new Date('2002-10-25') },
    { ism: 'Teshavoy', sana: new Date('1997-08-17') },
]
/* --------------------- */


const box = document.querySelector('.box')

setTimeout(() => {
    box.innerHTML += `
    <div class="boxx">dwakjdbwjk</div>`
}, 1000)

clearTimeout(() => {
    box.innerHTML += `
    <div class="boxx">dwakjdbwjk</div>`
}, 2000)

