import SlimeInit from "./modules/Slider";

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



const formFooter = document.querySelector(".footer-form");
const formModal = document.querySelector(".modal-form");


mailerPush(formFooter, "name-footer-input", "number-footer-input", "email-footer-input", "message-footer-input")
mailerPush(formModal, "name-modal-input", "number-modal-input", "email-modal-input", "message-modal-input")

function mailerPush(form, nameID, numberID, emailID, messageID) {
    form.addEventListener('submit',  function(event) {
        event.preventDefault();
    
     
        const nameI = document.getElementById(nameID).value;
        const emailI = document.getElementById(emailID).value;
        const numberI = document.getElementById(numberID).value;
        const messageI = document.getElementById(messageID).value;
    
        const formData = new FormData();
        formData.append('name', nameI);
        formData.append('email', emailI);
        formData.append('number', numberI);
        formData.append('message', messageI);
        console.log(formData);
    
         fetch('mailer/smart.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
               
                return response.text()
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            form.reset();
           console.log(data)
        })
        .catch(error => {
           console.log(error)
        });
    });
}


document.addEventListener("DOMContentLoaded", (e) => {

    const Slime = new SlimeInit({
        sliderClass: ".reviews",
        navigation: {
            nextSlideBtn: ".reviews-navigation-next",
            prevSlideBtn: ".reviews-navigation-prev"
        },
        previewSlides: 4,
        speedSlider: 0.6,
        previewScrollSlide: 3,
        pagination: true,
        breakpoints: [
            {
                breakpointSize: 1300,
                previewScrollSlide: 3,
                previewSlides: 3
            },
            {
                breakpointSize: 900,
                previewScrollSlide: 2,
                previewSlides: 2
            },
            {
                breakpointSize: 600,
                previewScrollSlide: 1,
                previewSlides: 1
            }
        ]
    });

    Slime.InitSlider(); 

})