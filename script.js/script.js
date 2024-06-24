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
