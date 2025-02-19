const slider = document.querySelector(".reviews-slider");
const sliderContainer = document.querySelector(".reviews-slider-container");
const containerSlide = document.querySelectorAll(".reviews__slide");
const prevbutton = document.querySelector(".reviews__navigation-button-prev")
const nextbutton = document.querySelector(".reviews__navigation-button-next")
const pagination = document.querySelector(".reviews__pagination");
const tabsPagination = document.querySelectorAll(".reviews__pagination-tab");


// function foreachChilds() {
    containerSlide.forEach((item, index) => {
        item.style.width = 309 + "px"
    })

function slideTab(index) {
    tabsPagination.forEach((item, index) => {
        item.classList.remove("reviews__pagination-tab-active")
    })
    tabsPagination[index - 1].classList.add("reviews__pagination-tab-active")
    // console.log(tabsPagination[0].classList.add("reviews__pagination-tab-active"))
}
  

// }

let indexSlide = 1;
slideTab(indexSlide)
nextbutton.addEventListener('click', (e) => {
   
    if(indexSlide < 3) {
        indexSlide++
        sliderContainer.style.transform += `translate(-${1360}px)`
        slideTab(indexSlide)
    } else {
        indexSlide = 1;
        sliderContainer.style.transform = `translate(0px)`
        slideTab(indexSlide)
    }
})
prevbutton.addEventListener('click', (e) => {
   
    if(indexSlide === 1) {
        indexSlide = 3
        sliderContainer.style.transform += `translate(-${1360 * 2}px)`
        slideTab(indexSlide)
    } else {
        indexSlide--
        sliderContainer.style.transform += `translate(${1360}px)`
        slideTab(indexSlide)
    }
})
function resizeWidthContainer() {
    console.log(slider.clientWidth)
    sliderContainer.style.width = `${slider.clientWidth + 2712}px`
}
// foreachChilds()
resizeWidthContainer()
window.addEventListener("resize", (e) => {
    console.log("ok")
    resizeWidthContainer()
})