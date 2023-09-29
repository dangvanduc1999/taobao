const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
        },
        "@0.70": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@0.85": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.20": {
            slidesPerView: 3,
            spaceBetween: 20,
        },
 
        "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

const elementTabOnMinTablets =  document.querySelectorAll("ul.ul-tab li")
elementTabOnMinTablets.forEach(ele => {
    ele.addEventListener("click", (e) => {
        const currentClass = ele.classList
        if(currentClass.contains("active")) {
            return;
        }
        const atrr = ele.getAttribute("data-href")
        const contentTab = document.querySelector(atrr)
        
        const currentTabActive = document.querySelector("ul.ul-tab li.active")
        const attrOfcurrenttabActive = currentTabActive.getAttribute("data-href")
        const currentContentActive = document.querySelector(attrOfcurrenttabActive)
        currentTabActive.classList.remove("active")
        currentContentActive.classList.remove("active")
        currentClass.add("active")
        contentTab.classList.add("active")
    })
})

const eleTabsOnMobile = document.querySelectorAll(".tabmobile .tab-name")

eleTabsOnMobile.forEach(ele => {
    ele.addEventListener("click", e => {
        const currentTitle = ele.querySelector("h3")
        const currentDes = ele.querySelector("div")
        if (currentTitle.classList.contains("active")) {
            currentTitle.classList.remove("active")
            currentDes.classList.remove("active")
        } else {
            currentTitle.classList.add("active")
            currentDes.classList.add("active")
        }
    })
})
