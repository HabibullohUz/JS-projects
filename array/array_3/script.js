//1
// const nums = [50, 100, 61, 45, 87, 14, 99, 76, 87, 43, 12];

// const pairNum = nums.filter((value) => value)

// asdwddwdwdwdw ----------------------------------------------------------------------------------------------------------


//2
const cars = ['Malibu', 'Tico', 'Damas', 'Matiz', 'Nexia', 'Malibu', 'Cobalt', 's']

// const getFive = cars.filter(car => car.length === 5)
// console.log(getFive)


// const getMalibu = cars.forEach((car, index) => {
//     const indexlar = []
//     if (car === 'Malibu') {
//         indexlar.push(index)
//     } else {
//         console.log('Malibu yoo')
//     }
// })


// find toq son ----------------------------------------------------------------------------------------------------------
//low code
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 1) {

//         console.log(i)
//     }
// }


// //best code
// for (let i = 1; i <= 100; i+=2) {

//         console.log(i)
// }
//  ----------------------------------------------------------------------------------------------------------


// other code
// for (let i = 99; i >= 33; i--) {
//     console.log(i)
// }

//  ----------------------------------------------------------------------------------------------------------

// let paragraphs = document.querySelectorAll('.numP')

// for (let i = 1; i < paragraphs.length; i++) {
//     if (i % 2 === 0) {
//         paragraphs[i].style = 'color:red'
//     }
//     else {
//         paragraphs[i].style = 'color:black'
//     }
// }
//  ----------------------------------------------------------------------------------------------------------
let numArray = [14, 6, 54, 87, 100, 10]
const stringarray = ['BMW', 'Mers', 'Chevrolet']
// 1.  numArray ni tartiblang
// 2.  numArrayni har bir elementini 10ga ko’paytiring.Original arrayni o'zgartiring
// 3.  numArrayni har bir elementidan 10ni ayiring.Yangi arrayga saqlab oling.
// 4.  numArrayning juft elementlarini 2ga bo’ling, toq elementlarini 3ga ko’paytiring.
// 5.  stringArrayning elementlarining so’nggiga ikki nuqta qo’yib chiqing.Original arrayni o'zgartiring
// 6.  numArraydan 54 va 87 qiymatlarini saqlovchi array ko’chirib oling.
// 7.  numArrayda 100 ni o’rniga 88 va 99 raqamlarini qo’ying.


//  ----------------------------------------------------------------------------------------------------------

//1)
// numArray.sort((a, b) => { return a - b })
// console.log(numArray)


//  ----------------------------------------------------------------------------------------------------------
//2)
// console.log(numArray)

// for (let i = 0; i < numArray.length; i++) {
//     numArray[i] *= 10
// }
// console.log(numArray)

//2.1
// let ten = 10

// numArray.forEach((value, index) => {
//     numArray[index] *= ten
// })
// console.log(numArray)


//2.2
// numArray = numArray.map(num => num * 10)
// console.log(numArray)


//2.3
// function kopaytirish(arr, index) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] *= index
//     }
//     return arr
// }
// let arr = kopaytirish([14, 6, 54, 87, 100, 10], 10)
// console.log(arr)

//2.4
// let newArr = numArray.filter(e => { return e * 10 })
// console.log(newArr)

//2.5
// numArray.forEach((e, i) => { return numArray[i] })

//2.5

//  ----------------------------------------------------------------------------------------------------------

//3



//4
// 4.  numArrayning juft elementlarini 2ga bo’ling, toq elementlarini 3ga ko’paytiring. xato

// let newArr = numArray.map((item, idx) => {
//     if (item % 2 === 0) {
//         item / 2;
//     }
//     else {
//         item * 3;
//     }
//     return item
// })

// console.log(newArr);


//  ----------------------------------------------------------------------------------------------------------


//0) tartiblash
// let arrNums = [2, 21, 3, 4, 554, 33, 2, 1, 545, 67, 78, 8, 5, 4, 3, 2, 1, 0]

// arrNums.sort((a, b) => {
//     if (a > b) return 1
//     else if (a < b) return -1
//     return 0
// })

// console.log(arrNums)
//  ----------------------------------------------------------------------------------------------------------

//0) tartiblash
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]
// let array2 = [11, 22, 33, 44, 5, 66, 7, 88, 9, 100] //5,7,9

// let newArray = array.filter(num => array2.indexOf(num) !== -1);
// console.log(newArray)

// let newArr = intersect_arrays(array, array2);
// console.log(newArr)


// learn
//* highter-order function
//yangi arrni ozgartiradi = pop() push() unshift() shift() splice() sort()

