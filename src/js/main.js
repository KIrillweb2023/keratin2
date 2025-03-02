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


const hamburger = document.querySelector(".header-hamburger");
const elementMenu = document.querySelector(".header-nav")
const elementMenuTab = document.querySelectorAll(".header-nav-list_item__link")

hamburger.addEventListener("click", (e) => {
    elementMenu.classList.toggle("header-nav_active")
    if(elementMenu.classList.contains("header-nav_active")) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = ""
    }
})

elementMenuTab.forEach((item) => {
    item.addEventListener("click", (e) => {
        elementMenu.classList.remove("header-nav_active");
          document.body.style.overflow = "";
    })
})


// const videoPlayBtn = document.querySelector(".material-wrapper");
// const videoRest = document.querySelector(".material-template");
// const video = document.getElementById("video");

// videoPlayBtn.addEventListener("click", (e) => {
//     if(video.paused){
//         videoPlayBtn.classList.add("material-wrapper_play")
//         video.play()

//         videoPlayBtn.style.opacity = "0"
//         setTimeout(() => {
//             videoPlayBtn.style.display = "none"
//         }, 400)
//     } 
// })


const footerTemplate = document.querySelectorAll(".footer-template");

footerTemplate.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("footer-template_active");
    })
})

const tabsTouchContainer = document.querySelector(".material-field")
const tabsViewContainer = document.querySelector(".material-tab")
const tabsTouchMaterial = document.querySelectorAll(".material-field_touch");
const tabsViewMaterial = document.querySelectorAll(".material-template_video");

function removeClassActiveTab() {
    tabsTouchMaterial.forEach((item) => {
        item.classList.remove("material-field_touch__active");
    })
}
function removeClassActiveTabView() {
    tabsViewMaterial.forEach((item) => {
        item.classList.remove("material-template_video__active");
    })
}

function addClassActiveTab(i) {
    removeClassActiveTab();
    tabsTouchContainer.children[i].classList.add("material-field_touch__active")
}
function addClassActiveTabView(i) {
    removeClassActiveTabView();
    tabsViewContainer.children[i].classList.add("material-template_video__active")
    // console.log(tabsViewContainer.children[i])
}

// addClassActiveTab(1)
// addClassActiveTabView(0)

function onClickEventTab() {
    tabsTouchMaterial.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            addClassActiveTab(index)
            addClassActiveTabView(index)
        })
    })
}

onClickEventTab()


const next = document.querySelector(".reviews-pag_next")
const prev = document.querySelector(".reviews-pag_prev")
const containerSlide = document.querySelector(".reviews-slider-container")
const widthSlide = containerSlide.children[0].clientWidth;

let transformSlide = 0
let indexSlide = 0

window.addEventListener("resize", () => {
    
    nextSlide()
    prevSlide()
})


function nextSlide() {
    next.addEventListener("click", (e) => {
        indexSlide === 4 ? (indexSlide = 0, transformSlide = 0) : (indexSlide++, transformSlide += widthSlide + 15);
        containerSlide.style.transform = `translateX(-${transformSlide}px)`;
        console.log(indexSlide)
    })
}

function prevSlide() {
    prev.addEventListener("click", (e) => {
        indexSlide === 0 ? (indexSlide = 4, transformSlide += widthSlide * 3 + 45) : (indexSlide--, transformSlide -= widthSlide + 15) ;
        containerSlide.style.transform = `translateX(-${transformSlide}px)`;
        console.log(indexSlide)
    })
}

nextSlide()
prevSlide()

const modalForm = document.querySelector(".modal");
const modalContinue = document.querySelector(".continue");
const closeModalForm = document.querySelector(".modal-close");
const closeModalContinue = document.querySelector(".continue-btn");
const openModalForm = document.querySelector(".home-attribute-block_btn");

openModalForm.addEventListener('click', (e) => {
    modalForm.classList.add('modal-active')
});

closeModalForm.addEventListener("click", (e) => {
    modalForm.classList.remove('modal-active')
})

closeModalContinue.addEventListener("click", (e) => {
    modalContinue.classList.remove('continue_active')
})


const formCheck = document.querySelector(".modal-form_check");
formCheck.addEventListener("click", (e) => {
    formCheck.classList.toggle("modal-form_check__active")
})

