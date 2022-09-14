let btn = document.getElementById("btn")
let box = document.getElementById("box")

days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function daysMap(num=1) {
    return days.filter((item, idx) => idx + 1 === num).join('');
}
btn.addEventListener('click', () => {
    let input = document.getElementById("input").value
    box.innerText = daysMap(input);

})

