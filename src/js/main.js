// const slider = document.querySelector(".reviews-slider");
// const sliderContainer = document.querySelector(".reviews-slider-container");
// const containerSlide = document.querySelectorAll(".reviews__slide");
// const prevbutton = document.querySelector(".reviews__navigation-button-prev")
// const nextbutton = document.querySelector(".reviews__navigation-button-next")
// const pagination = document.querySelector(".reviews__pagination");
// const tabsPagination = document.querySelectorAll(".reviews__pagination-tab");
// const containerSite = document.querySelector(".container");


// let indexSlide = 0;
// let slideScrollWidth;

// if(window.innerWidth <= 1500) {
//     slideScrollWidth = (sliderContainer.clientWidth / 12) * 3;
// } else if(window.innerWidth <= 1300) {
//     slideScrollWidth = (sliderContainer.clientWidth / 12) * 2;
// } else if(window.innerWidth <= 850) {
//     slideScrollWidth = (sliderContainer.clientWidth / 12);
// } else {
//     slideScrollWidth = (sliderContainer.clientWidth / 12) * 4
// }


// window.addEventListener("resize", (e) => {
//     console.log(slideScrollWidth)
//     // resizeWidthContainer()
  
//     slideScrollWidth = (sliderContainer.clientWidth / 12) * 4

//     if(window.innerWidth <= 1500) {
//         slideScrollWidth = (sliderContainer.clientWidth / 12) * 3;
//     } else if(window.innerWidth <= 1300) {
//         slideScrollWidth = (sliderContainer.clientWidth / 12) * 2;
//     } else if(window.innerWidth <= 850) {
//         slideScrollWidth = (sliderContainer.clientWidth / 4);
//     }else {
//         slideScrollWidth = (sliderContainer.clientWidth / 12) * 4
//     }
// })
 

// // containerSlide.forEach((item, index) => {
// //     item.style.width = `${slideWidth}px`
// // })

// function slideTab(index) {
//     tabsPagination.forEach((item, index) => {
//         item.classList.remove("reviews__pagination-tab-active")
//     })
//     tabsPagination[index].classList.add("reviews__pagination-tab-active")
// }


// function slideTabClick() {
//     tabsPagination.forEach((item, index) => {
//         // item.classList.remove("reviews__pagination-tab-active")

//         item.addEventListener('click', () => {
//             indexSlide = index
//             slideTab(index)
//             console.log(indexSlide)
//             if(indexSlide === 1) {
//                  sliderContainer.style.transform = `translate(-${slideScrollWidth}px)`
//             } else if (indexSlide === 2) {
//                 sliderContainer.style.transform = `translate(-${slideScrollWidth * 2}px)`
//             } else if (indexSlide === 0) {
//                  sliderContainer.style.transform = `translate(0px)`
//             }
//         })
//     })
// }
// slideTabClick()

// // }

// let resultvalueSlider = 0
// slideTab(indexSlide)
// nextbutton.addEventListener('click', (e) => {
//      sliderContainer.style.transform = `translate(0px)`
//     if(indexSlide < 2) {
//         indexSlide++

//         sliderContainer.style.transform = `translate(-${resultvalueSlider += slideScrollWidth}px)`
//         slideTab(indexSlide)
//     } else {
//         resultvalueSlider = 0
//         indexSlide = 0;
//         sliderContainer.style.transform = `translate(0px)`
//         slideTab(indexSlide)
//     }
// })
// prevbutton.addEventListener('click', (e) => {
//     if(indexSlide === 0) {
//         indexSlide = 2
//         sliderContainer.style.transform = `translate(-${resultvalueSlider += slideScrollWidth * 2}px)`
//         slideTab(indexSlide)
     
//     } else {

//         indexSlide--
//         sliderContainer.style.transform = `translate(-${resultvalueSlider -= slideScrollWidth  }px)`
//         slideTab(indexSlide)
//     }
// })

// window.onload = function(){
//     document.getElementById("video").play()
// }

import Swiper from "swiper";

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,  // Показывать 4 слайда
    slidesPerGroup: 4, // Перелистывать по 4 слайда
    // spaceBetween: 30,   // Расстояние между слайдами (необязательно)
    loop: false,       // Не зацикливать слайдер
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });



let item = document.querySelectorAll(".question-item");

item.forEach((item) => {
    console.log()
    
    item.addEventListener('click', (e) => {
       if(!item.classList.contains("question-item_active")) {
        item.childNodes[1].childNodes[3].style.transform = "rotate(180deg)";
        item.classList.add("question-item_active")
       } else {
            console.log("none")
            item.classList.remove("question-item_active")
            item.childNodes[1].childNodes[3].style.transform = "rotate(0deg)";
       }
    })
})