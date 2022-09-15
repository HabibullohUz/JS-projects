function submitForm() {
    let checked = document.querySelector("[name=genders]:checked").value;
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");

    output.innerText = 'Salom ' + (checked == 'erkak' ? 'Mr ' : 'Ms ') + input;
}



//1
// if (raqam > 0) alert('katta')  // bundan foydalanish tavsiya etilmidi
// else{alert('nol')}


// 2 if ichida if yozish

// let a = -4

// if (a > 0) {
//     if (a === 0) {
//         alert('nol')
//     }
//     else if (a < 0) {
//         alert('manfiy')

//     }
//     else (alert('musbat'))
// }