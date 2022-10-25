/* --------------------------------------------------------------------------------------------------------- */
//1. Har double clickda div tasodifiy rangga o'zgarsin
/* --------------------------------------------------------------------------------------------------------- */
const boxRandomcolor = document.querySelector('.boxRandomcolor')
boxRandomcolor.addEventListener('dblclick', () => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    boxRandomcolor.style.background = bgColor;
})


/* --------------------------------------------------------------------------------------------------------- */
//2. Divga kirilgan payt div dumoloq bo'lib qolsin. Chiqib ketilganda romb bo'lib qolsin
/* --------------------------------------------------------------------------------------------------------- */
const changedBox = document.querySelector('.changedBox')
var deg = 0;
changedBox.addEventListener('mouseover', () => {
    changedBox.style.borderRadius = '50%'
    changedBox.style.transform = `rotate(${deg}deg)`
    deg += 45;
})

changedBox.addEventListener('mouseout', () => {
    changedBox.style.borderRadius = '0'
    changedBox.style.transform = `rotate(${deg}deg)`
    deg += 45;
})


/* --------------------------------------------------------------------------------------------------------- */
/* 3. Image hosil qiling. 2ta Input hosil qiling. Input yoqilib
bo'lgandan keyin (btn bosilmasdan) ushbu imagening width va heighti ozgarsin */
/* --------------------------------------------------------------------------------------------------------- */
const width__input = document.querySelector('#width__input')
const height__input = document.querySelector('#height__input')
const img = document.getElementById('img')

width__input.addEventListener('input', () => {
    img.style = `width: ${width__input.value}px`
})

height__input.addEventListener('input', () => {
    img.style = `height: ${height__input.value}px`
})


/* --------------------------------------------------------------------------------------------------------- */
// 4. Input nuber hosil qiling. agar 100dan kattaroq son kiritilib
//       qolsa "100 dan katta son bo'lishi mumkin emas" degan matn chiqaring" va
//       inputning qiymatini 100ga tushirib qo'ying
/* --------------------------------------------------------------------------------------------------------- */
const inputNum = document.querySelector('#inputNum')

inputNum.addEventListener('input', () => {
    if (inputNum.value > 100) {
        inputNum.value = 100
        alert('Cannot be a number greater than 100')
    }
})

/* --------------------------------------------------------------------------------------------------------- */
/* Har bir navigationni aylanib chiqadigan function */
/* --------------------------------------------------------------------------------------------------------- */
const main = document.querySelector(".main-section");
const menuToggle = document.querySelector('.menuToggle')

menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
}

function changePage(e) {
    [1, 1, 1, 1].map((el, index) => {
        if (index + 1 == e) {
            console.log(e);
            main.children[index].classList.add("active-page");
        } else {
            main.children[index].classList.remove("active-page");
        }
    })
}

/* --------------------------------------------------------------------------------------------------------- */
//Random color hover title
/* --------------------------------------------------------------------------------------------------------- */
const title = document.querySelector('.title')

title.addEventListener('mousemove', () => {

    let red = Math.floor(Math.random() * 256)
    let green = Math.floor(Math.random() * 256)
    let blue = Math.floor(Math.random() * 256)

    let bgColor = "rgb(" + red + "," + green + "," + blue + ")"
    console.log(bgColor)

    title.style.color = bgColor

})