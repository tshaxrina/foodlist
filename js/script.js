let modal_btns = document.querySelectorAll('[data-modal]')
let modal_btns_close = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')

modal_btns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('show', 'fade')
    }
})

modal_btns_close.forEach(btn => {
    btn.onclick = () => {
        modal.classList.remove('show', 'fade')
    }
})

let tabs = document.querySelectorAll('.tabcontent')
let tabs_btn = document.querySelectorAll('.tabheader__item')

function changeContent(n) {
    tabs.forEach(el => el.classList.add('hide', 'fide'))
    tabs[n].classList.remove('hide')    
}

let prev = 0

tabs_btn.forEach((btn, idx) => {
    btn.onclick = () => {
        tabs_btn[prev].classList.remove('tabheader__item_active')
        btn.classList.add('tabheader__item_active')
        changeContent(idx)
        prev = idx
    }
}
)

changeContent(0)


let pr = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let slides = document.querySelectorAll('.offer__slide')
let current = document.querySelector('#current')
let total = document.querySelector('#total')
total.innerHTML = slides.length


let slideIndex = 0

function slideShow(n) {

    if(n > slides.length - 1) {
        slideIndex = 0
    }
    if(n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('fade','hide'))
    slides[slideIndex].classList.remove('hide')
}

slideShow(slideIndex)

next.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
    current.innerHTML = slideIndex + 1
}

pr.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
    current.innerHTML = slideIndex + 1
}


