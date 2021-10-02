function slideMenu() {
    var slider = document.getElementById("menu-slide");
    slider.style.height = window.innerHeight - 60 + "px";

    if(slider.style.top == "56px") {
        slider.style.top = "-425px"
    }
    else {
        slider.style.top = "56px";
    }
}