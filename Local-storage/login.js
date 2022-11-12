function login() {
    let names = document.getElementById('ism').value
    let pass = document.getElementById('password').value

    let ism = localStorage.getItem('ism')
    let password = localStorage.getItem('password')



    console.log(names);
    console.log(pass);
    console.log(ism);
    console.log(password);

    if (names == ism && pass == password) {
        localStorage.setItem('loginq', 'true')
        window.open("./array-search_iphone/index.html")
    }
    else {
        alert('false')
        localStorage.setItem('loginq', 'false')
    }
}