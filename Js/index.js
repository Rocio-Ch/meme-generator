const $ = (selector) => document.querySelector(selector)

/* ####  HEADER BUTTONS AND EDIT MENU  #### */

/* const hiddenMenuContainer = () => {
    $("#menu-container").classList.remove("hidden")
} 
 */
/* <!-- BTN IMG EDITOR --> */
/* $("#btn-img-menu").addEventListener("click", () => {
    hiddenMenuContainer()
    $("#menu-img-editor").classList.remove("hidden")
    $("#menu-text-editor").classList.add("hidden")
}) */

/* <!-- BTN TEXT EDITOR --> */
/* $("#btn-text-menu").addEventListener("click", () => {
    hiddenMenuContainer()
    $("#menu-text-editor").classList.remove("hidden")
    $("#menu-img-editor").classList.add("hidden")
}) */

/* <!-- BTN CLOSE MENU EDITOR --> */
/* $("#btn-close-menu").addEventListener("click", () => {
    if (!($("#menu-img-editor").classList.contains(".hidden")) || ($("#menu-text-editor").classList.contains(".hidden"))) {
            $("#menu-container").classList.add("hidden")
    }
})
 */


/*    #### DARK & LIGHT MODE SWITCH ####    */

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


/* BUTTONS MENU */

/* if ($("#menu-container").classList.contains("hidden")) {
    ("#menu-container").classList.remove("hidden")
} else {
    $("#btn-close-menu").classList.add("hidden")
}
 */

/* $("#btn-img-menu").addEventListener("click", () => {
    if ($("#menu-container").classList.contains("hidden")) {
        $("#menu-container").classList.remove("hidden")
        $("#menu-img-editor").classList.remove("hidden")
    }
}) */


//CHEKEAR ESTA KK
$("#btn-img-menu").addEventListener("click", () => {
    if (!$("#menu-img-editor").classList.contains("hidden")) {
        $("#menu-img-editor").classList.add("hidden")
    }
})



$("#btn-text-menu").addEventListener("click", () => {
    if ($("#menu-container").classList.contains("hidden")) {
        $("#menu-container").classList.remove("hidden")
        $("#menu-img-editor").classList.remove("hidden")

    }
})


$("#btn-close-menu").addEventListener("click", () => {
    if (!($("#menu-img-editor").classList.contains(".hidden")) || ($("#menu-text-editor").classList.contains(".hidden"))) {
            $("#menu-container").classList.add("hidden")
    }
})


