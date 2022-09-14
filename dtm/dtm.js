// Foydalanuvchidan Kimyo, Matematika va Fizika imtihonlaridan to’plagan ballarini so’rang.
// Agar Kimyoning balli kamida 80 ga teng bo’lsa va Fizikaning balli minimum 65 bo’lsa va           Matematikadan eng kami 85 ball to’plangan bo’lsa, ekranga “Siz universitetga qabul qilindingiz” matnini chiqaring.Aks holda, “Sizning imtihondan o’ta olmadingiz” matnini chiqaring.

// Masalan:
// Kimyo: 86
// Fizika: 70
// Matematika: 90
// Siz universitetga qabul qilindingiz

// -----------------------------------------
//     Kimyo: 45
// Fizika: 60
// Matematika: 32
// Sizning imtihondan o’ta olmadingiz

let math = document.querySelector("math").value
let physics = document.querySelector("physics").value
let history = document.querySelector("history").value

if (math >= 85 && physics >= 65 && history >= 80) {
    alert("You have been accepted to university")
} else {
    alert("You failed the exam")
}

document.querySelector("btn").onClick = function saveFunction() {

}
