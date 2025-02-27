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


const videoPlayBtn = document.querySelector(".material-wrapper");
const video = document.getElementById("video");

videoPlayBtn.addEventListener("click", (e) => {
    video.play()
})


const footerTemplate = document.querySelectorAll(".footer-template");

footerTemplate.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("footer-template_active");
    })
})
