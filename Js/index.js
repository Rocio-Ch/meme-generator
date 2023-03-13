const $ = (selector) => document.querySelector(selector)

                                    /* ####  HEADER BUTTONS AND EDIT MENU  #### */


/*   <!-- REMOVE HIDDEN ASIDE --> */
const unhiddenAside = () => $("#menu-container").classList.remove("hidden")

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

$(".btn-light-mode").addEventListener("click", () => switchMode())

$(".btn-dark-mode").addEventListener("click", () => switchMode())




                                    /*   ####  IMAGE MENU EDITOR ####   */


/*   <!-- URL INPUT IMAGE -->  */
$("#input-url-img").addEventListener("input", () => $(".img-meme").style.backgroundImage = `url(${$("#input-url-img").value})`)


/*   <!--  INPUT BACKGROUND COLOR -->   */
$("#input-bc-colour").addEventListener("input", () => {
    $(".img-meme").style.backgroundColor = $("#input-bc-colour").value
    $("#text-bc-colour").innerText = `${$("#input-bc-colour").value}`
})


/*  <!-- BACKGROUND BLEND EFFECT -->   */
$("#select-colour-blend").addEventListener("click", () => $(".img-meme").style.backgroundBlendMode = $("#select-colour-blend").value)



                                     /*  ####   MENU FILTERS  ####   */


$("#brightness-line").addEventListener("click", () => $(".img-meme").style.filter = `brightness(${$("#brightness-line").value})`)

$("#opacity-line").addEventListener("click", () => $(".img-meme").style.filter = `opacity(${$("#opacity-line").value})`)

$("#contrast-line").addEventListener("click", () => $(".img-meme").style.filter = `contrast(${$("#contrast-line").value}%)`)

$("#blur-line").addEventListener("click", () => $(".img-meme").style.filter = `blur(${$("#blur-line").value}px)`)

$("#grayscale-line").addEventListener("click", () => $(".img-meme").style.filter = `grayscale(${$("#grayscale-line").value}%)`)

$("#sepia-line").addEventListener("click", () => $(".img-meme").style.filter = `sepia(${$("#sepia-line").value}%)`)

$("#hue-line").addEventListener("click", () => $(".img-meme").style.filter = `hue-rotate(${$("#hue-line").value}deg)`)

$("#saturation-line").addEventListener("click", () => $(".img-meme").style.filter = `saturate(${$("#saturation-line").value}%)`)

$("#negative-line").addEventListener("click", () => $(".img-meme").style.filter = `invert(${$("#negative-line").value})`)


/*   <!--  RESET FILTERS -->   */

$("#btn-reset-filters").addEventListener("click", () => {
    //no tengo idea D: googlear luego
})


                                   /*   ####  TEXT EDITOR MENU ####   */


/*   <!--  INPUT TOP TEXT -->   */
$("#input-top-text").addEventListener("input", () => $(".meme-top-text").innerText = `${$("#input-top-text").value}`)



/*   <!--  INPUT BOTTOM TEXT -->   */
$("#input-bottom-text").addEventListener("input", () => $(".meme-bottom-text").innerText = `${$("#input-bottom-text").value}`)



/*   <!--  CHECKBOX TOP TEXT & BOTTOM TEXT  -->   */

$("#without-top-text").addEventListener("input", () => {
    if ($("#without-top-text").checked) {
        $(".meme-top-text").classList.add("hidden")
        $(".img-meme").style.backgroundPosition = "center"
    } else {
        $(".meme-top-text").classList.remove("hidden")
    }
})


$("#without-bottom-text").addEventListener("input", () => {
    if ($("#without-bottom-text").checked) {
        $(".meme-bottom-text").classList.add("hidden")
        $(".img-meme").style.backgroundPosition = "center"
    } else {
        $(".meme-bottom-text").classList.remove("hidden")
    }
})


                                    /*   ####  FONT FAMILY  ####   */

$("#font-family-select").addEventListener("click", () => {
    $(".meme-top-text").style.fontFamily = $("#font-family-select").value
    $(".meme-bottom-text").style.fontFamily = $("#font-family-select").value
})


                                    /*   ####  FONT SIZE  ####   */

$("#input-font-size").addEventListener("click", () => {
    $(".meme-top-text").style.fontSize = `${$("#input-font-size").value}px`
    $(".meme-bottom-text").style.fontSize = `${$("#input-font-size").value}px`
})


                                    /*   ####  TEXT ALIGN  ####   */

/*   <!--  TEXT ALIN LEFT   -->   */
$("#btn-text-left").addEventListener("click", () => {
    $(".meme-top-text").style.justifyContent = "left"
    $(".meme-bottom-text").style.justifyContent = "left"
})


/*   <!--  TEXT ALIN CENTER   -->   */
$("#btn-text-center").addEventListener("click", () => {
    $(".meme-top-text").style.justifyContent = "center"
    $(".meme-bottom-text").style.justifyContent = "center"
})


/*   <!--  TEXT ALIN RIGHT   -->   */
$("#btn-text-rigth").addEventListener("click", () => {
    $(".meme-top-text").style.justifyContent = "right" 
    $(".meme-bottom-text").style.justifyContent = "right"
})


                                   /*   ####  COLOR TEXT & BACKGROUND COLOR  ####   */

/*   <!--  INPUT COLOR TEXT   -->   */
$("#input-text-colour").addEventListener("input", () => {
    $(".meme-top-text").style.color = `${$("#input-text-colour").value}`
    $(".meme-bottom-text").style.color = `${$("#input-text-colour").value}`
    $("#text-colour").innerText = `${$("#input-text-colour").value}`
})

/*   <!--  BACKGROUND COLOR TEXT   -->   */
$("#input-bc-colour-text").addEventListener("input", () => {
    $(".meme-top-text").style.backgroundColor = `${$("#input-bc-colour-text").value}`
    $(".meme-bottom-text").style.backgroundColor = `${$("#input-bc-colour-text").value}`
    $(".bc-colour-text").innerText = `${$("#input-bc-colour-text").value}`
})



                                   /*   ####  BACKGROUND TEXT TRANSPARENT CHECKED  ####   */


$("#transparent-background").addEventListener("input", () => {
    if ($("#transparent-background").checked) {
        $(".meme-top-text").style.backgroundColor = "transparent"
        $(".meme-bottom-text").style.backgroundColor = "transparent"
    } else {
        $(".meme-top-text").style.backgroundColor = "#FFFFFF"
        $(".meme-bottom-text").style.backgroundColor = "#FFFFFF"
    }
})


                                   /*   ####  OUTLINE TEXT  ####   */

const addingOutlineLight = () => {
    $(".meme-top-text").classList.add("outline-light")
    $(".meme-bottom-text").classList.add("outline-light")
}

const addingOutlineDark = () => {
    $(".meme-top-text").classList.add("outline-dark")
    $(".meme-bottom-text").classList.add("outline-dark")
}

const removingOutlineLight = () => {
    $(".meme-top-text").classList.remove("outline-light")
    $(".meme-bottom-text").classList.remove("outline-light")
}

const removingOutlineDark = () => {
    $(".meme-top-text").classList.remove("outline-dark")
    $(".meme-bottom-text").classList.remove("outline-dark")
}



/*   <!--  OUTLINE TEXT LIGHT   -->   */
$("#outline--white").addEventListener("click", () => {
    addingOutlineLight()
    removingOutlineDark()
})

/*   <!--  OUTLINE TEXT DARK   -->   */
$("#outline--dark").addEventListener("click", () => {
    addingOutlineDark()
    removingOutlineLight()
})


/*   <!--  OUTLINE TEXT NONE   -->   */
$("#outline--none").addEventListener("click", () => {
    removingOutlineDark()
    removingOutlineLight()
})

