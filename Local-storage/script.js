function login() {
    let ism = document.getElementById('ism').value
    let familiya = document.getElementById('familiya').value
    let yosh = document.getElementById('yosh').value
    let password = document.getElementById('password').value

    localStorage.setItem('ism', ism)
    localStorage.setItem('familiya', familiya)
    localStorage.setItem('yosh', yosh)
    localStorage.setItem('password', password)



    window.open('login.html')

}