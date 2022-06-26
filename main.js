const navBar = document.getElementById("navbar")
const exploreNav = document.getElementById("explore-navbar")

const changeShadow = () => {
    // This is to change the shadow 
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
            // console.log(O);
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

changeShadow()

const toggleHam =() =>{
//   /  console.log("toggled menu")

    const mobile_nav =  document.getElementById("mobile-nav-bar")
    const isOpened = mobile_nav.classList.contains("show-mobile-menu") 
    mobile_nav.className  = isOpened ? "mobile-menu" : "mobile-menu show-mobile-menu"
}


const ToggleStreamingDevices = () =>{
    const streamDev = document.getElementById("streaming-devices-con");
    document.getElementById("overlay").style.display = streamDev.classList.contains("hide-stream") ? "block" : "none";
    streamDev.className = streamDev.classList.contains("hide-stream") ? "streaming-devices" : "streaming-devices hide-stream"
}
