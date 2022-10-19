//1
// const numArray = [50, 60, 100, 70, 88, 95, 20];

// console.log(numArray)
// numArray.forEach((num, index, arr) => {
//     if (arr[index] + 10 > 100) {
//         arr[index] = 100
//     }
//     else {
//         arr[index] += 10
//     }
// })


// console.log(numArray)




//2
// const numArray = [50, 3, 5, 70, 15, 94, 11];

// const newArr = numArray.map((num, index, arr) => {
//     return num * num;
// })

// console.log(numArray)
// console.log(newArr)



//3
// const numArray = [50, 3, 5, 70, 15, 94, 11];

// const newArr = numArray.map((num, index, arr) => {
//     if (num % 2 === 1) { //toq bolsa kopaytir
//        return num * 3
//     }
//     else (num % 2 === 0) //juft bolsa bo'l
//         return num / 2

// })

// console.log(newArr) qisqartir


//4
// const studentlarIsmi = [
//     "Begzod Abdurahimov To'lqin o'g'li",
//     "Maftuna Muxtorova Shavkat qizi",
//     "Turdimamatov Shahzodbek",
//     "Abdumalik Inomov Otabek o'g'li",
//     "Asqarov Sardor Doniyor o'g'li",
//     "Fayzullayev Izzatilla Asatillaevich",
//     "Qodirjonov Boburjon Nodir o'g'li",
//     "Payg'ambarqulov Jamshidbek Davlatjon o'gli",
//     "Abdullayev Jonibek Ulug'bek o'g'li",
//     "Rashidov Ulug'bek Umirbek o'g'li",
//     "Abdullayev Qamariddin O'rinboy o'g'li",
//     "Xaydarov Abdulbosit MirOdil o'g'li",
//     "Olamgir Ibrohimov",
//     "Asralov Kamron Ibrohim o'gli",
//     "Saitqulov Suhrob Mansur o'g'li",
//     "Negmatulayev Umarbek Jo'rabek o'g'li",
//     "Ma'fura Agzamova",
//     "Nuriddinov  Habibulloh  Faxriddin o'g'li",
//     "MuhammadAmir Nosirov",
//     "Suhbatillo Ikromov",
// ];
// console.log(studentlarIsmi);

// const newArr = studentlarIsmi.slice().sort(); //slice() yengi ozgaruvchiga oladi sort()tartiblaydi
// console.log(newArr) // tartiblangan holati


//5
// const numArray = [4, 41, 5, 2, 22, 7]
// console.log(numArray)
// numArray.sort((a, b) => {
//     return a - b //a - z tartiblaydi
// })

// console.log(numArray)


// numArray.sort((a, b) => {
//     return b - a //z - a ga tartiblaydi
// })

// console.log(numArray)







// const newArr = studentlarIsmi.slice().sort(); //slice() yengi ozgaruvchiga oladi sort()tartiblaydi
// console.log(newArr) // tartiblangan holati

//* remember
//yangi arrni ozgartiradi = pop() push() unshift() shift() splice() sort()
//yangi arrni ozgartirmaydi = map() sort() find()  concat() slice()