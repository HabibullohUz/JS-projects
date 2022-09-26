// const  = ['Olamga nur sochgan Oy', 'Umar ibn Xattob', 'Abdulhamidxon II', 'Sahro arsloni']

// console.log(movies[1])


const studentlar = ["Begzod Abdurahimov To'lqin o'g'li", 'Maftuna Muxtorova Shavkat qizi', 'Turdimamatov Shahzodbek', "Abdumalik Inomov Otabek o'g'li", "Abduhamidov Zokir Nodir o'g'li", "Asqarov Sardor Doniyor o'g'li", 'Fayzullayev Izzatilla Asatillaevich', "Qodirjonov Boburjon Nodir o'g'li", "Payg'ambarqulov Jamshidbek Davlatjon o'gli", "Abdullayev Jonibek Ulug'bek o'g'li", "Rashidov Ulug'bek Umirbek o'g'li", "Abdullayev Qamariddin O'rinboy o'g'li", "Xaydarov Abdulbosit MirOdil o'g'li", "Asralov Kamron Ibrohim o'gli", "Saitqulov Suhrob Mansur o'g'li", "Negmatulayev Umarbek Jo'rabek o'g'li", "Ma'fura Agzamova", "Nuriddinov  Habibulloh  Faxriddin o'g'li", 'MuhammadAmir Nosirov', 'Suhbatillo Ikromov']


let output = document.getElementById('students')

// 1--------------------------------------------------------------------------------------------
// oxiriga qoshib oxiridan ociradi

function studentArray() {
    output.innerText = studentlar.join(', ')
}

function ochiribtashlash() {
    studentlar.pop()
    studentArray();
}


function qoshish() {

    let inputAdd = document.getElementById('input')

    if (inputAdd.value) {
        studentlar.push(inputAdd.value)
        studentArray()
    } else {
        alert('Inputga ma\'lumot kiriting')
    }

    inputAdd.value = ""
}

studentArray();


//2--------------------------------------------------------------------------------------------
//boshiga qoshib boshidan ociradi
// function studentArray() {
//     output.innerText = studentlar.join(', ')
// }

// function ochiribtashlash() {
//     studentlar.shift()
//     studentArray();
// }


// function qoshish() {

//     let inputAdd = document.getElementById('input')

//     if (inputAdd.value) {
//         studentlar.unshift(inputAdd.value)
//         studentArray()
//     } else {
//         alert('Inputga ma\'lumot kiriting')
//     }

//     inputAdd.value = ""
// }

// studentArray();
