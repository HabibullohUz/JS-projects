let modal = document.getElementById('modal')
let kreditlarMenu = document.querySelector('.kreditlar-menu')


kreditlarMenu.addEventListener('mouseenter', () => {
        modal.classList.remove('show')
    })

kreditlarMenu.addEventListener('mouseout', () => {
        modal.classList.add('show')
    })