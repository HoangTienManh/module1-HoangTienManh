// ----- slider --------
window.addEventListener("load", function() {
    let slider = document.querySelector(".slider")
    let prev = document.querySelector(".prev_div")
    let next = document.querySelector(".next_div")
    let sliderImgs = document.querySelector(".slider_imgs")
    let sliderItem = document.querySelectorAll(".slider_imgs .slider_item")
    
    let sliderImgsLength = sliderItem.length
    let sliderImgWidth = sliderItem[0].offsetWidth

    let position = 0
    let index = 0
    prev.addEventListener("click", function() {
        verifyPrevNext(-1)
    })
    next.addEventListener("click", function() {
        verifyPrevNext(1)
    })
    function verifyPrevNext(direction) {
        if (direction === 1) {
            if (index < sliderImgsLength - 1) {
                index ++
                position -= sliderImgWidth
                sliderImgs.style = `transform: translateX(${position}px)`
            }
            else {
                return
            }
        }
        else if (direction == -1) {
            if (index > 0) {
                index --
                position += sliderImgWidth
                sliderImgs.style = `transform: translateX(${position}px)`
            }
            else {
                return
            }
        }
    }
// ---- cart ------
})
    let cart = document.querySelector(".cart img")
    let modal = document.querySelector(".modal")
    let shutdown = document.querySelector(".shutdown")
    
    cart.addEventListener("click", function () {
        modal.classList.toggle("hidden")
    })
    shutdown.addEventListener("click", function () {
        modal.classList.add("hidden")
    })

