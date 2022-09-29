const studentlarIsmi = [
    "Begzod Abdurahimov To'lqin o'g'li",
    "Maftuna Muxtorova Shavkat qizi",
    "Turdimamatov Shahzodbek",
    "Abdumalik Inomov Otabek o'g'li",
    "Asqarov Sardor Doniyor o'g'li",
    "Fayzullayev Izzatilla Asatillaevich",
    "Qodirjonov Boburjon Nodir o'g'li",
    "Payg'ambarqulov Jamshidbek Davlatjon o'gli",
    "Abdullayev Jonibek Ulug'bek o'g'li",
    "Rashidov Ulug'bek Umirbek o'g'li",
    "Abdullayev Qamariddin O'rinboy o'g'li",
    "Xaydarov Abdulbosit MirOdil o'g'li",
    "Olamgir Ibrohimov",
    "Asralov Kamron Ibrohim o'gli",
    "Saitqulov Suhrob Mansur o'g'li",
    "Negmatulayev Umarbek Jo'rabek o'g'li",
    "Ma'fura Agzamova",
    "Nuriddinov Habibulloh Faxriddin o'g'li",
    "MuhammadAmir Nosirov",
    "Suhbatillo Ikromov",
];

const output = document.getElementById('output').innerHTML = studentlarIsmi




function sortFunc() {
    studentlarIsmi.sort()
    console.log(studentlarIsmi)

}
sortFunc()




function reverseFunc() {
    studentlarIsmi.sort()
    studentlarIsmi.reverse()
    console.log(studentlarIsmi)
}
reverseFunc()
