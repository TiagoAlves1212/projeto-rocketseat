const html = document.documentElement
const img = document.querySelector('img')

const toggleMode = () => {
    html.classList.toggle('light')

    if (html.classList.contains('light')) {
        img.src = '../img/avatar-light.png'
    }

    else {
        img.src = '../img/avatar.png'
    }
}