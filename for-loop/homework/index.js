// // ---------- Homework ---------- //

// // 1)  Berilgan ikki sonning orasidagi sonlar yig’indisini aniqlab qaytaruvchi funksiya tuzing.
function addFunc() {
    const a = +document.getElementById('input_x').value
    const b = +document.getElementById('input_y').value
    const result = document.querySelector('.result')

    let sum = 0

    for (let i = 1 + a; i < b; i++) {
        sum += i
    }
    result.innerHTML = sum
}



// // 2)   Math kutubxonasi tomonidan taqdim qilingan pow(x, y) funksiyasini o’zingiz tuzing.Ma’lumki, pow(x, y) funksiyasi x ni y darajasiga chiqarib natijani qaytaradi.

function powFunc() {
    const x = document.getElementById('inputX').value
    const y = document.getElementById('inputY').value
    const output = document.querySelector('.output')

    let res = x;

    if (y == 0) {
        res = 1;
    }
    for (let i = 1; i < y; i++) {
        res *= x;
    }
    output.innerHTML = res;
}

// 3) 1 dan 100 gacham bo'lgan tub sonlari ekranga chiqarish

function showPrimes() {
    const result_box = document.querySelector('.result_box')

    for (var counter = 0; counter <= 100; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter % i === 0 && i !== counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
            console.log(counter);
            result_box.innerHTML += (`${counter} `)
        }
    }
}


const task_content = document.querySelectorAll('task_content')
task_content.forEach(task => {
    task.addEventListener('click', function () {
        task_content.forEach(btn => {
            btn.classList.add('active')
            this.classList.remove('active')
        })
    })
})