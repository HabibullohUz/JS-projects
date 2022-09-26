// const carArr = ['Audi', 'Jiguli', 'Spark', 'Malibu', 'Tico', 'Damas']

// console.log(carArr)

// ----------------------------------------------------------------------
//4 indexdan 1 tasini ocir
// carArr.splice(4,1)
// console.log(carArr)

// carArr.splice(0,2)
// console.log(carArr)


// ----------------------------------------------------------------------
//2 indexdan boshlab 2 tasini nusxalaydi hundaini qoshadi
// carArr.splice(2, 2, "hundai")
// console.log(carArr)
// carArr.splice(2, 0, "hundai") //


// ----------------------------------------------------------------------
// 0 -indexdan 3 tasini nusxalab oladi
// let car = carArr.slice(0, 3)
// console.log(car)

// let car1 = carArr.slice(1, 5) // 1dan 5gacha yangi array oberadi
// console.log(car1)


// ----------------------------------------------------------------------
// console.log(carArr[3]) //arr dan 3 - indexni oladi



// ----------------------------------------------------------------------
const carArr1 = ['Audi', ' Jiguli', ' Spark', ' Malibu', ' Tico', ' Damas', ' Opel', ' Toyota', ' Matiz', ' Nexia'];

const output = document.getElementById('output').innerHTML = carArr1

function findIndex() {
    let search = document.getElementById('search').value
    console.log(search)
    let index = carArr1.indexOf(search)
    console.log(index)
    carArr1[index].innerHTML = output
}
