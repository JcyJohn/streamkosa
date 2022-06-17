
document.addEventListener("scroll", changeShadow)

const upComing_LiveStream = document.getElementById("upcoming-liveStream")
const ucl_Left = document.getElementById("ucl-left")
const ucl_Right = document.getElementById("ucl-right")

const past_Livestream = document.getElementById("past-liveStream")
const pls_Left = document.getElementById("pls-left")
const pls_Right = document.getElementById("pls-right")

const featuredArtist = document.getElementById("featuredArtist")
const fa_Left = document.getElementById("fa-left")
const fa_Right = document.getElementById("fa-right")

const scrollShow = (element, left, right) => {
    //  console.log(element.scrollLeft , " ---- ", element.scrollWidth - window.innerWidth + 8 )

    if ((element.scrollWidth - window.innerWidth + 8) <= 10) {
        right.style.opacity = 0
    }

    if (element.scrollLeft < 100) {
        left.style.opacity = element.scrollLeft / 100
    } else if (element.scrollLeft >= 100) {
        left.style.opacity = 1
    }
    if (element.scrollLeft > element.scrollWidth - window.innerWidth - 98) {
        right.style.opacity = ((element.scrollWidth - window.innerWidth) - element.scrollLeft) / 100
        // console.log(right.style.opacity)
    } else {
        right.style.opacity = 1
    }


    left.style.display = left.style.opacity <= 0 ? "none" : "flex"
    right.style.display = right.style.opacity <= 0 ? "none" : "flex"

}

const scrollVertical = (elementId, isleft) => {
    let element = document.getElementById(elementId);

    if (isleft === true) {
        element.scrollLeft = element.scrollLeft - 400;
    } else {
        element.scrollLeft = element.scrollLeft + 400;
    }

}
past_Livestream.addEventListener("scroll", () => { scrollShow(past_Livestream, pls_Left, pls_Right) })
upComing_LiveStream.addEventListener("scroll", () => { scrollShow(upComing_LiveStream, ucl_Left, ucl_Right) })
featuredArtist.addEventListener("scroll", () => { scrollShow(featuredArtist, fa_Left, fa_Right) })

window.addEventListener("resize", () => {
    scrollShow(upComing_LiveStream, ucl_Left, ucl_Right)
    scrollShow(past_Livestream, pls_Left, pls_Right)
    scrollShow(featuredArtist, fa_Left, fa_Right)
})

scrollShow(upComing_LiveStream, ucl_Left, ucl_Right)
scrollShow(past_Livestream, pls_Left, pls_Right)
scrollShow(featuredArtist, fa_Left, fa_Right)
