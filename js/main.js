const menuBurguer = document.querySelector(".menuBurguer");
const navBar = document.querySelector(".navbar")
const Mblur = document.querySelector(".montionBlur")

menuBurguer.addEventListener("click", function() {
    if(!menuBurguer.classList.contains("menuBurguerClose")){
        menuBurguer.classList.add("menuBurguerClose");
        menuBurguer.classList.remove("menuBurguer");

        navBar.style.display = "flex"
        Mblur.style.display = "block"

    }else{
        menuBurguer.classList.remove("menuBurguerClose");
        menuBurguer.classList.add("menuBurguer");
        navBar.style.display = "none"
        Mblur.style.display = "none"
    }
});
