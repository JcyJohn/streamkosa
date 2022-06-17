const toggleFAQ = (id, arrow) => {
    let currentElement = document.getElementById(id)
    let state = currentElement.classList.length > 1 ? true : false
    currentElement.className = state ? "single-faq" : "single-faq opened-faq"
    arrow.children[1].style.transform = state ? "rotate(225deg)" : "rotate(45deg)";
}