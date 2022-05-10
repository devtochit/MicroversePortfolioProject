const sideNav = document.querySelector(".sideNav")
const overlay = document.querySelector(".overlay")
const ham = document.querySelector(".ham")
const menuX = document.querySelector(".menuX")
const menuItems = document.querySelectorAll(".menuLink")


menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleHambuger)
})

ham.addEventListener('click', toggleHambuger)
menuX.addEventListener('click', toggleHambuger)
overlay.addEventListener('click', toggleHambuger)




function toggleHambuger() {
    overlay.classList.toggle('showOverlay')
    sideNav.classList.toggle('showNav')
}
