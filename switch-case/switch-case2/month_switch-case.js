function handleClick() {
    let input = +document.getElementById("input").value;
    let num ='1 dan 12 gacham son kiriting'

    switch (input) {
        case 1:
            num = "Yanvar";
            break;
        case 2:
            num = "Fevral";
            break;
        case 3:
            num = "Mart";
            break;
        case 4:
            num = "Aprel";
            break;
        case 5:
            num = "May";
            break;
        case 6:
            num = "Iyun";
            break;
        case 7:
            num = "Iyul";
            break;
        case 8:
            num = "Avgust";
            break;
        case 9:
            num = "Sentabr";
            break;
        case 10:
            num = "Oktabr";
            break;
        case 11:
            num = "Noyabr";
            break;
        case 12:
            num = "Dekabr";
            break;
        default:
            num = "Bunday oy mavjud emas";
    }
    displayMonth(num)
}

function displayMonth(num) {
    document.getElementById("output").innerText = num
}