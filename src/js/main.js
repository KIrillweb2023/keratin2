const slider = document.querySelector(".reviews-slider");
const sliderContainer = document.querySelector(".reviews-slider-container");
const containerSlide = document.querySelectorAll(".reviews__slide");
const prevbutton = document.querySelector(".reviews__navigation-button-prev")
const nextbutton = document.querySelector(".reviews__navigation-button-next")
const pagination = document.querySelector(".reviews__pagination");
const tabsPagination = document.querySelectorAll(".reviews__pagination-tab");
const containerSite = document.querySelector(".container");


let indexSlide = 0;

// function foreachChilds() {
const slideWidth = containerSite.clientWidth / 4 - 20;
const slideScrollWidth = containerSite.clientWidth + (containerSite.clientWidth - 1300)

containerSlide.forEach((item, index) => {
    item.style.width = `${slideWidth}px`
})

function slideTab(index) {
    tabsPagination.forEach((item, index) => {
        item.classList.remove("reviews__pagination-tab-active")
    })
    tabsPagination[index].classList.add("reviews__pagination-tab-active")
}


function slideTabClick() {
    tabsPagination.forEach((item, index) => {
        // item.classList.remove("reviews__pagination-tab-active")

        item.addEventListener('click', () => {
            indexSlide = index + 1
            slideTab(index)
            console.log(indexSlide)
            if(indexSlide === 1) {
                 sliderContainer.style.transform = `translate(-${slideScrollWidth}px)`
            } else if (indexSlide === 2) {
                sliderContainer.style.transform = `translate(-${slideScrollWidth * 2}px)`
            } else if (indexSlide === 0) {
                 sliderContainer.style.transform = `translate(0px)`
            }
        })
    })
}
slideTabClick()

// }


slideTab(indexSlide)
nextbutton.addEventListener('click', (e) => {
    console.log(indexSlide)
    if(indexSlide < 2) {
        indexSlide++
        sliderContainer.style.transform += `translate(-${slideScrollWidth}px)`
        slideTab(indexSlide)
    } else {
        indexSlide = 0;
        sliderContainer.style.transform = `translate(0px)`
        slideTab(indexSlide)
    }
})
prevbutton.addEventListener('click', (e) => {
    if(indexSlide === 0) {
        indexSlide = 2
        sliderContainer.style.transform += `translate(-${slideScrollWidth * 2}px)`
        slideTab(indexSlide)
    } else {
        indexSlide--
        sliderContainer.style.transform += `translate(${slideScrollWidth}px)`
        slideTab(indexSlide)
    }
})
function resizeWidthContainer() {
    console.log(slider.clientWidth)
    sliderContainer.style.width = `${slider.clientWidth + 2712}px`
}


resizeWidthContainer()
window.addEventListener("resize", (e) => {
    console.log("ok")
    resizeWidthContainer()
})