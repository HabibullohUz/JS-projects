//agar a number bolsa a ga b ni qoshish

// function sum(a, b) {

//     if (typeof (a) === 'number' && typeof (b) === 'number') {
//         console.log(a + b)
//     }
//     else {
//         console.log('son kiriting')
//     }
// }

// sum(12, 20)



// ---------------------------------------------------------------------------------------------------------


//nomer kiritilganmi va numbermi ga tekshiradi

// function sum(a, b) {

//     if ((!isNaN(a) && !isNaN(b)) && (a !== undefined && b !== undefined)) {
//         console.log(a + b)
//     }
//     else {
//         console.log('Son kiriting')
//     }
// }

// sum(40,40)


// ---------------------------------------------------------------------------------------------------------



// function generateCircle(bgClor = 'red') {
//     document.body.innerHTML += `<div class="circle" style="background-color: ${bgClor}" ></div>`
// }

// generateCircle('#ff7800');
// generateCircle('rgb(145, 200, 255)');
// generateCircle('brown');
// generateCircle();
// generateCircle();
// generateCircle();

// ---------------------------------------------------------------------------------------------------------


// function sum() {
//     let yigindi = 0
//     for (let i = 0; i < arguments.length; i++) {
//         yigindi += arguments[i];
//     }
//     console.log(yigindi);
// }

// sum(10, 5, 10, 10, 90);

function gameLevel1() {
    let a = Math.floor(Math.random() * (100 - 10) + 10)
    let b = Math.floor(Math.random() * (100 - 10) + 10)
    console.log(a)
    let sum = a + b
    let answer = +prompt(`${a} + ${b} = ?`)

    if (answer === sum) {
        alert('Correct answer')
    }
    else {
        alert('tugadi')
    }
}

gameLevel1()