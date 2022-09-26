// Quyidagi function expressionlarni arrow function yordamida yozing.
// 1) const x = function () {
//     console.log(‘1’);
//     console.log(‘2’);
// }
// 2) const x = function () {
//     return 5 * 5;
// }
// 3) const x = function (num1, num2) {
//     console.log(num1 - num2);
// }
// 4) const x = function (a) {
//     return a * a;
// }

//qisqargani
//1
const a = () => { console.log('1'); console.log('2') }
//2
const b = () => 5 * 5;
//3
const c = (num1, num2) => console.log(num1 - num2);
//4
const d = a => a * a;
