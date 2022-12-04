let icon = document.querySelector(".muno-ico");
let menu = document.querySelector(".menu_list");
let iconclos = document.querySelector(".del-icon");

icon.addEventListener("click", function () {
    if (icon.classList.contains("muno-ico")){
        menu.style.right = 0;
    }
})

iconclos.addEventListener("click", function () {
     if (iconclos.classList.contains("icon-clos")) {
            menu.style.right = "-250px";
        }
})