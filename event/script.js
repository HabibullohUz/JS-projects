/* ----------------------------------------------------------------- */
const main = document.querySelector('.main')
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    main.style.display = 'block'
    preloader.style.display = 'none'
})

/* ----------------------------------------------------------------- */
window.addEventListener('resize', () => {
    document.querySelector('#text').innerText = `${window.innerWidth} x ${window.innerHeight}`
})

window.addEventListener('scroll', () => {

    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})


/* ----------------------------------------------------------------- */
window.addEventListener('keydown', (event) => {
    main.innerHTML += ''
    main.innerHTML += event.key
})
/* ----------------------------------------------------------------- */
