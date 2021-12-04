const hamburger = document.querySelector('.bi-filter-right');
const cancel = document.querySelector('.bi-x-circle-fill');
let mobile = document.querySelector('.mobile');
const body = document.querySelector('body')

hamburger.addEventListener('click', ()=>{
    mobile.classList.remove('hide')
})

cancel.addEventListener('click', ()=>{
    mobile.classList.add('hide')
})

document.addEventListener('keyup', (e)=>{
    if (e.keyCode == 27) {
        mobile.classList.add('hide')
    }
})

