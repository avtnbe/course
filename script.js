menu = document.getElementById('m-img');
navigation = document.getElementById('navigation');

function enabler(){
    if (menu.src.includes("menu-nav.png")){
        menu.src = "src/x-menu.png";
        navigation.style.display = "flex";
    } else {
        menu.src = "src/menu-nav.png";
        navigation.style.display = "none";
    }
}

window.addEventListener("resize", function (){
    if (window.innerWidth > 950){
        navigation.style.removeProperty("display");
        menu.src = "src/menu-nav.png";
    }
}, true)