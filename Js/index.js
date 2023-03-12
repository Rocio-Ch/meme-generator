const $ = (selector) => document.querySelector(selector)

//funcion para ocultar cualquier elemento
//const hideElement = (element) => element.style.display = "none"

/* ####  HEADER BUTTONS AND EDIT MENU  #### */

/*   <!-- REMOVE HIDDEN ASIDE --> */
const unhiddenAside = () => {
    $("#menu-container").classList.remove("hidden")
}

/*   <!-- ADDING PADDING RIGHT FROM 701PX --> */
const paddingRight = () => {
    $("header").classList.add("widthTablet")
    $("main").classList.add("widthTablet")
    $("footer").classList.add("widthTablet")
}

/*   <!-- REMOVING PADDING RIGHT --> */
const paddingRightRemove = () => {
    $("header").classList.remove("widthTablet")
    $("main").classList.remove("widthTablet")
    $("footer").classList.remove("widthTablet")
}

/*   <!-- SWITCHING MENUS IN DESKTOP VERSION --> */
const menuImgDisplayDesktop = () => {
    if ($("#menu-img-editor").style.display = "none") {
        $("#menu-img-editor").style.display = "block"
    }
}

const menuTextDisplayDesktop = () => {
    if ($("#menu-img-editor").style.display = "block") {
        $("#menu-img-editor").style.display = "none"
    }
}

/* <!-- BTN IMG EDITOR --> */
$("#btn-img-menu").addEventListener("click", () => {
    unhiddenAside()
    $("#menu-text-editor").classList.add("hidden")
    $("#menu-img-editor").classList.remove("hidden")
    paddingRight()
    menuImgDisplayDesktop()
})



/* <!-- BTN TEXT EDITOR --> */
$("#btn-text-menu").addEventListener("click", () => {
    unhiddenAside()
    $("#menu-img-editor").classList.add("hidden")
    $("#menu-text-editor").classList.remove("hidden")
    paddingRight()
    menuTextDisplayDesktop()
})


/* <!-- BTN CLOSE MENU EDITOR --> */
$("#btn-close-menu").addEventListener("click", () => {
    if (!($("#menu-img-editor").classList.contains(".hidden")) || ($("#menu-text-editor").classList.contains(".hidden"))) {
            $("#menu-container").classList.add("hidden")
            paddingRightRemove()
    }
})



/*   ####  DARK & LIGHT MODE SWITCH  ####    */

const switchMode = () => {
    $("body").classList.toggle("light-mode")
    $(".btn-light-mode").classList.add("hidden")
    $(".btn-dark-mode").classList.remove("hidden")
}

$(".btn-light-mode").addEventListener("click", () => {
    switchMode()
})

$(".btn-dark-mode").addEventListener("click", () => {
    switchMode()
})


/*   ####  URL INPUT IMAGE ####   */

$("#input-url-img").addEventListener("input", () => {
    $(".img-meme").style.backgroundImage = `url(${$("#input-url-img").value})`                                   
})


/*   ####  INPUT BACKGROUND COLOR ####   */

$("#input-bc-colour").addEventListener("input", () => $(".img-meme").style.backgroundColor = $("#input-bc-colour").value)



/*   ####  BACKGROUND BLEND EFFECT ####   */

$("#select-colour-blend").addEventListener("click", () => {
    $(".img-meme").style.backgroundBlendMode = $("#select-colour-blend").value
})




