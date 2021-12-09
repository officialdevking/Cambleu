let theme = localStorage.getItem("theme")
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

if (theme === 'enabled') {
    darkMode()
}else{
    lightMode()
}

function darkMode() {
    theme = localStorage.getItem("theme")
    localStorage.setItem("theme", "enabled")
    var element = document.body;
    element.className = "dark-mode";

    let dark = document.querySelector('.bi-moon-stars-fill')
    dark.classList.add("toBe")

    let light = document.querySelector('.bi-brightness-high')
    light.classList.remove("toBe")
    
    let footer = document.querySelector("footer")
    footer.classList.add("backgroundColor")

    let color = document.querySelectorAll('.foot_2 a')
    Array.from(color).forEach(clr =>{
        clr.classList.add("textColor")
    })

}

function lightMode() {
    theme = localStorage.getItem("theme")
    localStorage.setItem("theme",  null)
    var element = document.body;
    element.className = "light-mode";

    let dark = document.querySelector('.bi-moon-stars-fill')
    dark.classList.remove("toBe")

    let light = document.querySelector('.bi-brightness-high')
    light.classList.add("toBe")

    let footer = document.querySelector("footer")
    footer.classList.remove("backgroundColor")

    let color = document.querySelectorAll('.foot_2 a')
    Array.from(color).forEach(clr =>{
        clr.classList.remove("textColor")
    })
}