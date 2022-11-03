password.addEventListener('input', (e) => {
    if (e.target.value >= 8) {
        console.log('8 ta ')
    } else {
        console.log('wrong')
    }
})
// PASSWORD tekshirish:
// Oninputda tekshiring
// 1. uzunligi 8 tadan kam bo'lmasin
// 2. katta harf mavjud bo'lsin
// 3. kichik harf mavjud bo'lsin
// 4. son mavjud bo'lsin

/* ------------------------------------------------------------------------------------------------------------------------------------- */
let matn = `Lionel Andrés Messi[note 1](Spanish pronunciation: [ljoˈnel anˈdɾes ˈmesi](listen); born 24 June 1987), is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint - Germain and captains the Argentina national team.Widely regarded as one of the greatest players of all time, Messi has won a record seven Ballon d'Or awards,[note 2] a record six European Golden Shoes, and in 2020 was named to the Ballon d'Or Dream Team.Until leaving the club in 2021, he had spent his entire professional career with Barcelona, where he won a club - record 35 trophies, including ten La Liga titles, seven Copa del Rey titles and four UEFA Champions Leagues.A prolific goalscorer and creative playmaker, Messi holds the records for most goals in La Liga(474), most goals in a La Liga and European league season(50), most hat - tricks in La Liga(36) and the UEFA Champions League(8), and most assists in La Liga(192), a La Liga season(21) and the Copa América(17).He also holds the record for most international goals by a South American male(90).Messi has scored over 780 senior career goals for club and country, and has the most goals by a player for a single club.`

console.log(matn)

let innerText = prompt(`so'z kiriting`)

innerText = matn.replace(/Messi/gi, innerText.value)
console.log(innerText)

/* ------------------------------------------------------------------------------------------------------------------------------------- */
// const inputText = document.querySelector('#inputText').value
// const replaceText = document.querySelector('#replaceText').value

// function changeText() {
//     inputText
// }


/* ------------------------------------------------------------------------------------------------------------------------------------- */
