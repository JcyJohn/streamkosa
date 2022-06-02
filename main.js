const toggleFAQ = (id,arrow) =>{
    let currentElement = document.getElementById(id)
    let state = currentElement.classList.length > 1 ? true : false
    currentElement.className = state ? "single-faq" : "single-faq opened-faq"
    arrow.children[1].style.transform = state ? "rotate(225deg)" : "rotate(45deg)" ;
}

const navBar = document.getElementById("navbar")
const exploreNav = document.getElementById("explore-navbar")

const changeShadow = () => {
    if (navBar!== null){
        // console.log(scrollY)
        let G = 16
        let B = 17
        if (scrollY >= 700 && scrollY<=1000){
            let value = scrollY - 700;
            // Y = mX + B 0.02 x X-value + 10
            G = (0.02 * value) + 10;
            B = (0.03 * value) + 10;
            
            // console.log("I am working")
            navBar.style.background = `linear-gradient(0deg, rgba(10,${G},${B},0) 0%, rgba(10,${G},${B},.9528186274509804) 19%, rgba(10,${10},${10},1) 100%)`
            
            // Get transition values
            // rgb(10, 16, 17) // 
        }else if(scrollY > 1000){
            navBar.style.background = `linear-gradient(0deg, rgba(10,${G},${B},0) 0%, rgba(10,${G},${B},.9528186274509804) 19%, rgba(10,${10},${10},1) 100%)`
        }else if(scrollY < 700){
            navBar.style.background = `linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,.9528186274509804) 19%, rgba(10,10,10,1) 100%)`
        }
    }

    if (exploreNav !== null){
        // console.log(scrollY)
        let O = .65

        if (scrollY >= 1 && scrollY <= 240 ){
            O = .60 + (scrollY / 1000)
            console.log(O);
            exploreNav.style.paddingBottom = `${300-scrollY}px`
            exploreNav.style.background = `linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,${O}) 55%, rgb(10,10,10) 100%)`
        }else if(scrollY > 240){
            exploreNav.style.paddingBottom = `${60}px`
            exploreNav.style.background = `linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,.84) 55%, rgb(10,10,10) 100%)`
        }else if(scrollY <= 0){
            exploreNav.style.paddingBottom = `${300}px`
            exploreNav.style.background = `linear-gradient(0deg, rgba(10,10,10,0) 0%, rgba(10,10,10,.60) 55%, rgb(10,10,10) 100%)`
        }
    }
}

//  Adds an event listener that listen to scroll on the body
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

const scrollShow = (element, left, right) =>{
    //  console.log(element.scrollLeft , " ---- ", element.scrollWidth - window.innerWidth + 8 )
    
    if ((element.scrollWidth - window.innerWidth + 8)  <= 10){
        right.style.opacity = 0
    }
   
    if(element.scrollLeft < 100){
        left.style.opacity = element.scrollLeft /100
    }else if (element.scrollLeft >= 100){
        left.style.opacity = 1
    }
    if (element.scrollLeft > element.scrollWidth - window.innerWidth - 98){
        right.style.opacity = ((element.scrollWidth - window.innerWidth) - element.scrollLeft )/100
        // console.log(right.style.opacity)
    }else{
        right.style.opacity = 1
    }


    left.style.display    = left.style.opacity <= 0 ?"none" : "flex"
    right.style.display  = right.style.opacity <= 0 ?"none" : "flex"
   
}

const scrollVertical = (elementId, isleft ) => {
    let element = document.getElementById(elementId);

    if (isleft === true){
        element.scrollLeft = element.scrollLeft-400;
    }else{
        element.scrollLeft = element.scrollLeft+400;
    }
   
}


changeShadow()
past_Livestream.addEventListener("scroll",()=>{ scrollShow(past_Livestream, pls_Left, pls_Right)})
upComing_LiveStream.addEventListener("scroll",()=>{scrollShow(upComing_LiveStream, ucl_Left, ucl_Right)})
featuredArtist.addEventListener("scroll",()=>{scrollShow(featuredArtist, fa_Left, fa_Right)})

window.addEventListener("resize", () =>{
    scrollShow(upComing_LiveStream, ucl_Left, ucl_Right)
    scrollShow(past_Livestream, pls_Left, pls_Right)
    scrollShow(featuredArtist, fa_Left, fa_Right)
})

scrollShow(upComing_LiveStream, ucl_Left, ucl_Right)
scrollShow(past_Livestream, pls_Left, pls_Right)
scrollShow(featuredArtist, fa_Left, fa_Right)
