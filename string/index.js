// prompt yordamida matn surang va kiritilgan matnning so'nggi harfini ekranga chiqaring

/* let songiHarfiniOlish = prompt('matn kiriting')
console.log(songiHarfiniOlish.charAt(songiHarfiniOlish.length - 1)) */


/* ----------------------------------------------------------------------------------------- */
const studentString = `Begzod Abdurahimov To'lqin o'g'li
Turdimamatov Shahzodbek Musajon o'g'li
Abdumalik Inomov Otabek o'g'li
Asqarov Sardor Doniyor o'g'li
Fayzullayev Izzatilla Asatillaevich
Qodirjonov Boburjon Nodir o'g'li
Payg'ambarqulov Jamshidbek Davlatjon o'gli
Abdullayev Jonibek Ulug'bek o'g'li
Rashidov Ulug'bek Umirbek o'g'li
Solihova Madina
Abdullayev Qamariddin O'rinboy o'g'li
Xaydarov Abdulbosit MirOdil o'g'li
Abdullayeva Charoz
Asralov Kamron Ibrohim o'gli
Saitqulov Suhrob Mansur o'g'li
Agzamova Ma'fura
Nuriddinov  Habibulloh  Faxriddin o'g'li
Ibrohimov Olamgir Abdulla o'g'li
Ibrohimova Gulyi
Nosirov MuhammadAmir Farxod`;

const studentArray = studentString.split('\n').map((student) => {
    const familiya = student.split(' ')[0];
    // return familiya.charAt(familiya.length - 1) === 'a' ? 'Ms. ' + student : 'Mr. ' + student //long code
    return (familiya.charAt(familiya.length - 1) === 'a' ? 'Ms. ' : ' Mr. ') + student //short code
});
// console.log(studentArray)


/* ----------------------------------------------------------------------------------------- */
const matn = 'Ona vatanim O\'zbekiston';

const bulak = matn.slice(4, 11)

// console.log(bulak) // output: vatanim


/* ----------------------------------------------------------------------------------------- */
const cleaEmpty = '              Ona vatanim O\'zbekiston                 ';

const newClearEmpty = cleaEmpty.trim()

// console.log(newClearEmpty) // output: clear empty place


/* ----------------------------------------------------------------------------------------- */
//"Mening ismim Eshmat". Eshmat ni Toshmatga aylantiring (/g)

let myName = 'Mening ismim Habibulloh'

myName.replace('Nuriddinov')
// console.log(myName)


/* ----------------------------Homework------------------------------------------------------------- */
