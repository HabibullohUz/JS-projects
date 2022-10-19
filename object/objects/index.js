// const toyxonaObject = { narxi: 2500000, nomi: 'Florensia', parkovka: 'mavjud', odamSigimi: 400 }

// console.log(`To'yxona nomi ${toyxonaObject.nomi}.Narxi ${toyxonaObject.narxi}.Avtoturargoh ${toyxonaObject.parkovka}.Odam sig'imi: ${toyxonaObject.odamSigimi}`);


// for (const key in toyxonaObject) {
//     console.log(toyxonaObject[key] )
// }

// for (const iterator of toyxonaObject) {
//     console.log(iterator)
// }

//hight order function
// map(()=>{})




// function form() {
//     const name = document.getElementsByClassName('name').value
//     const surname = document.getElementsByClassName('surname').value
//     const age = document.getElementsByClassName('age').value

//     student = {
//         name: Habibulloh,
//         surname: Nuriddinov,
//         age: 20,
//         salomlashish: function () {
//             alert(`Salom mening ismim ${this.name}. Men${this.age} yoshdaman`)
//         }
//     }
//     console.log(student);
//     document.getElementById('btn').disabled = false
// }

// function salom() {
//     student.salomlashish();
// }



//constructor

// function Student(name, surname, age, exam, isMarried, laptop) {

//     this.name = name
//     this.surname = surname
//     this.age = age
//     this.exam = exam
//     this.isMarried = isMarried
//     this.laptop = laptop
// }

// const student_1 = new Student('Habibulloh', 'Nuriddinov', 20, 100, true, { brand: 'Macbook', ram: 16, color: 'graphite' })
// const student_2 = new Student('Ali', 'Alinazarov', 23, 68, false, { brand: 'Acer', ram: 8, color: 'black' })
// const student_3 = new Student('Humoyun', 'Chilonov', 24, 80, true, { brand: 'Samsung', ram: 32, color: 'blue' })
// const student_4 = new Student('Halilulloh', 'Nuriddinov', 25, 20, false, { brand: 'Hp', ram: 64, color: 'grey' })

// const studentArr = [student_1, student_2, student_3, student_4]

// // studentArr.sort((a, b) => {
// //     return a.exam - b.exam
// // })
// // console.log(studentArr)

// const passedExam = studentArr.filter(student => student.exam >= 60)
// console.log(passedExam)

// const isMarried = studentArr.filter(student => student.isMarried === true)
// console.log(isMarried)

// studentArr.sort(a, b => a.laptop.ram - b.laptop.ram)
// console.log(studentArr)


// function add(a, b) {
//     let res = a / b
//     return res
// }

// let newAdd = add(16, 4)
// console.log(newAdd)

// const arr = ['mashina', 'alisa', 'mango']
// console.log(arr.toString()) //arr malumotlarini faqat vergul bilan ochiradi
// console.log(arr.join('/')) // bu esa qoshimcha simvollar bn achratish imkoni beradi

// console.log(arr.pop()) //arrni oxirgi elementini ochiradi
// console.log(arr.push('Jingalamo')) //arrni oxiriga malumot qowadi
// console.log(arr)

// console.log(arr.shift()) //arrni boshidagi elementini ochiradi
// console.log(arr.unshift('Mallamo')) // arrni boshiga malumot qowadi
// console.log(arr)

// let arrCars = ['Audi', 'BMW', 'Mersades Bens', 'Lambargini']
// const concatArr = arr.concat(arrCars) //concat metodi 2 arrni birlashtiradi
// console.log(concatArr)

// console.log(arrCars.includes('Audi'))


//*---* string, boolen, number ===> primative data type
//*---* object ===> murakkab malumot turi


// object 2 level -------------------------------------------------------------------------------------------------------------------------

//*--------original arrni ozgartirmay sort qilish-------*
// const arr = [6, 3, 1, 4]

// const copyArr = [...arr]

// copyArr.sort((a, b) => {return a - b})
// console.log(copyArr)


// ---------------------------------------------------------
// ojectning ichidagi xossani bor yoki yoqligini tekshirish

// function myFunction(objectParam, propertyName) {
//     if (objectParam.hasOwnProperty(propertyName)) {
//         console.log(objectParam[propertyName])
//     }
//     else {
//         console.log("Bunday xossa nomi mavjud emas");
//     }
// }


// const market = { nom: "Shaxzod", hajm: "katta", rang: "jigarrang" };
// myFunction(market, "hajm")

// ---------------------------------------------------------

function myFunction(objectParam, propertyName) {
    if (objectParam.hasOwnProperty(propertyName)) {
        console.log(objectParam[propertyName])
    }
    else {
        console.log("Bunday xossa nomi mavjud emas");
    }
}


const market = { nom: "Shaxzod", hajm: "katta", rang: "jigarrang" };
console.log(Object.keys(market))
myFunction(market, "hajm")
