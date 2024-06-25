var button = document.getElementById("hamburger");
var a = document.getElementById("menu_desktop");



button.addEventListener("click", function(){
    for (let i = 0; i < a.length; i++) {
        if (a[i].style.display == "none"){
            a[i].style.display = "block";
        }else{
            a[i].style.display = "none";
        }
    }
});

var button = document.getElementById("hamburger");
var menuMobile = document.getElementById("menu_mobile");

button.addEventListener("click", function(){
    if (menuMobile.style.display === "none") {
        menuMobile.style.display = "block";
    } else {
        menuMobile.style.display = "none";
    }
});

