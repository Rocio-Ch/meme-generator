
/* <!-- SELECT WITH QUERY SELECTOR --> */
const $ = (selector) => document.querySelector(selector)

/*   <!-- ADD & REMOVE CLASS --> */
const addClass = (element, clas) => element.classList.add(clas)
const removeClass = (element, clas) => element.classList.remove(clas)


                                    /* ####  HEADER BUTTONS AND EDIT MENU  #### */

/* <!-- BTN IMG EDITOR --> */
$("#btn-img-menu").addEventListener("click", () => {
    removeClass($("#menu-container"), "d-none")
    addClass($("#menu-text-editor"), "d-none")
    removeClass($("#menu-img-editor"), "d-none")
    paddingRightAdd()
})


/* <!-- BTN TEXT EDITOR --> */
$("#btn-text-menu").addEventListener("click", () => {
    removeClass($("#menu-container"), "d-none")
    addClass($("#menu-img-editor"), "d-none")
    removeClass($("#menu-text-editor"), "d-none")
    paddingRightAdd()
})


/* <!-- BTN CLOSE MENU EDITOR --> */
$("#btn-close-menu").addEventListener("click", () => {
    if (!($("#menu-img-editor").classList.contains(".d-none")) || ($("#menu-text-editor").classList.contains(".d-none"))) {
            addClass($("#menu-container"), "d-none")
            paddingRightRemove()
    }
})



                                    /*   ####  DARK & LIGHT MODE SWITCH  ####    */

const switchMode = () => {
    $("body").classList.toggle("light-mode")
    $(".btn-light-mode").classList.toggle("d-none")
    $(".btn-dark-mode").classList.toggle("d-none")
}

$(".btn-light-mode").addEventListener("click", switchMode)
$(".btn-dark-mode").addEventListener("click", switchMode)




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


const newValueFilters = () => {
    $(".img-meme").style.filter = `brightness(${$("#brightness-line").value}) opacity(${$("#opacity-line").value}) contrast(${$("#contrast-line").value}%) blur(${$("#blur-line").value}px) grayscale(${$("#grayscale-line").value}%) sepia(${$("#sepia-line").value}%) hue-rotate(${$("#hue-line").value}deg) saturate(${$("#saturation-line").value}%) invert(${$("#negative-line").value})`
}

$("#brightness-line").addEventListener("input", newValueFilters)
$("#opacity-line").addEventListener("input", newValueFilters)
$("#contrast-line").addEventListener("input", newValueFilters)
$("#blur-line").addEventListener("input", newValueFilters)
$("#grayscale-line").addEventListener("input", newValueFilters)
$("#sepia-line").addEventListener("input", newValueFilters)
$("#hue-line").addEventListener("input", newValueFilters)
$("#saturation-line").addEventListener("input", newValueFilters)
$("#negative-line").addEventListener("input", newValueFilters)


/*   <!--  RESET FILTERS -->   */

$("#btn-reset-filters").addEventListener("click", () => {
    $("#brightness-line").value = 1
    $("#opacity-line").value = 1
    $("#contrast-line").value = 100
    $("#blur-line").value = 0
    $("#grayscale-line").value = 0
    $("#sepia-line").value = 0
    $("#hue-line").value = 1
    $("#saturation-line").value = 100
    $("#negative-line").value = 0
    $(".img-meme").style.filter = "none"
})


                                   /*   ####  TEXT EDITOR MENU ####   */


/*   <!--  INPUT TOP TEXT -->   */
$("#input-top-text").addEventListener("input", () => $(".meme-top-text").innerText = `${$("#input-top-text").value}`)



/*   <!--  INPUT BOTTOM TEXT -->   */
$("#input-bottom-text").addEventListener("input", () => $(".meme-bottom-text").innerText = `${$("#input-bottom-text").value}`)



/*   <!--  CHECKBOX TOP TEXT & BOTTOM TEXT  -->   */

$("#without-top-text").addEventListener("input", () => {
    if ($("#without-top-text").checked) {
        addClass($(".meme-top-text"), "d-none")
        $(".img-meme").style.backgroundPosition = "center"
    } else {
        removeClass($(".meme-top-text"), "d-none")
    }
})


$("#without-bottom-text").addEventListener("input", () => {
    if ($("#without-bottom-text").checked) {
        addClass($(".meme-bottom-text"), "d-none")
        $(".img-meme").style.backgroundPosition = "center"
    } else {
        removeClass($(".meme-bottom-text"), "d-none")
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


const justifyContent = (element, align) => element.style.justifyContent = align

/*   <!--  TEXT ALIN LEFT   -->   */
$("#btn-text-left").addEventListener("click", () => {
    justifyContent($(".meme-top-text"), "left")
    justifyContent($(".meme-bottom-text"), "left")
})


/*   <!--  TEXT ALIN CENTER   -->   */
$("#btn-text-center").addEventListener("click", () => {
    justifyContent($(".meme-top-text"), "center")
    justifyContent($(".meme-bottom-text"), "center")
})


/*   <!--  TEXT ALIN RIGHT   -->   */
$("#btn-text-rigth").addEventListener("click", () => {
    justifyContent($(".meme-top-text"), "right")
    justifyContent($(".meme-bottom-text"), "right")
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

const elementPosition = (element, position) => element.style.position = position
const changeColor = (element, color) => element.style.backgroundColor = color

$("#transparent-background").addEventListener("input", () => {
    if ($("#transparent-background").checked) {
        elementPosition($(".meme-container"), "relative")
        elementPosition($(".meme-top-text"), "absolute")
        elementPosition($(".meme-bottom-text"), "absolute")
        changeColor($(".meme-top-text"), "transparent")
        changeColor($(".meme-bottom-text"), "transparent")
        $(".meme-top-text").style.top = "0"
        $(".meme-top-text").style.zIndex = "1"
        $(".meme-bottom-text").style.bottom = "0"
        $("#input-bc-colour-text").setAttribute("disabled", true)
    } else {
        elementPosition($(".meme-container"), "static")
        elementPosition($(".meme-top-text"), "static")
        elementPosition($(".meme-bottom-text"), "static")
        $(".meme-top-text").style.backgroundColor = `${$("#input-bc-colour-text").value}`
        $(".meme-bottom-text").style.backgroundColor = `${$("#input-bc-colour-text").value}`
        $("#input-bc-colour-text").removeAttribute("disabled")
    }
})


                                   /*   ####  OUTLINE TEXT  ####   */

const addingOutlineLight = () => {
    addClass($(".meme-top-text"), "outline-light")
    addClass($(".meme-bottom-text"), "outline-light")
}

const addingOutlineDark = () => {
    addClass($(".meme-top-text"), "outline-dark")
    addClass($(".meme-bottom-text"), "outline-dark")
}

const removingOutlineLight = () => {
    removeClass($(".meme-top-text"), "outline-light")
    removeClass($(".meme-bottom-text"), "outline-light")
}

const removingOutlineDark = () => {
    removeClass($(".meme-top-text"), "outline-dark")
    removeClass($(".meme-bottom-text"), "outline-dark")
}



/*   <!--  OUTLINE TEXT LIGHT   -->   */
$("#outline--light").addEventListener("click", () => {
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

                                   /*   ####  PADDING TEXT  ####   */
                                   
$("#padding-text").addEventListener("click", () => {
    $(".meme-top-text").style.paddingTop = `${$("#padding-text").value}px`
    $(".meme-top-text").style.paddingBottom = `${$("#padding-text").value}px`
    $(".meme-bottom-text").style.paddingTop = `${$("#padding-text").value}px`
    $(".meme-bottom-text").style.paddingBottom = `${$("#padding-text").value}px`
})


                                   /*   ####  LINE HEIGHT  ####   */

$("#menu-input-line-height").addEventListener("click", () => {
    $(".meme-top-text").style.lineHeight= $("#menu-input-line-height").value
    $(".meme-bottom-text").style.lineHeight= $("#menu-input-line-height").value
})


                                   /*   ####  DOWNLOAD MEME BUTTON  ####   */

const downloadMeme = () => {
    domtoimage.toBlob($(".meme-container")).then((blob) => {
        saveAs(blob, "my-meme.png")
      })
}

$("#btn-download-meme").addEventListener('click', downloadMeme)


/*   <!-- ADDING PADDING RIGHT FROM 701PX --> */
const paddingRightAdd = () => {
    addClass($("header"), "widthTablet")
    addClass($("main"), "widthTablet")
    addClass($("footer"), "widthTablet")
}

/*   <!-- REMOVING PADDING RIGHT --> */
const paddingRightRemove = () => {
    removeClass($("header"), "widthTablet")
    removeClass($("main"), "widthTablet")
    removeClass($("footer"), "widthTablet")
}

/* MODIFY VALUE INPUT NUMBER FOR TEXT MEME FONT SIZE & SWITCHING MENUS IN DESKTOP VERSION*/

const displaySmallSize = () => {
    $("#input-font-size").value = "18"
    $(".meme-top-text").style.fontSize = $("#input-font-size")
    $(".meme-bottom-text").style.fontSize = $("#input-font-size")
}

const displayMediumSize = () => {
    $("#input-font-size").value = "35"
    if (!$("#menu-container").classList.contains("d-none")) {
        paddingRightAdd()
    }
    $(".meme-top-text").style.fontSize = $("#input-font-size")
    $(".meme-bottom-text").style.fontSize = $("#input-font-size")
}

const displayFullSize = () => {
    $("#input-font-size").value = "40"
    $(".meme-top-text").style.fontSize = $("#input-font-size")
    $(".meme-bottom-text").style.fontSize = $("#input-font-size")
    removeClass($("#menu-container"), "d-none")
}

const resize = () => {
    if (window.innerWidth >= 320 && window.innerWidth <= 700) {
        displaySmallSize()
    } else if (window.innerWidth >= 701 && window.innerWidth <= 1300) {
        displayMediumSize()
    } else if (window.innerWidth >= 1301) {
        displayFullSize()
    }
}


window.addEventListener("resize", (resize))

/*  LOAD EVENT IS FIRED WHEN THE WHOLE PAGE HAS LOADED */
window.addEventListener("load", () => {
    resize()
    removeClass($("#menu-img-editor"), "d-none")
})