document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
});

let menu_state = false;
function menu_animation() {
  if (menu_state === false) {
    menu.classList.remove("drive-in");
    menu.classList.add("drive-out");
    menu_state = true;
  } else {
    menu.classList.remove("drive-out");
    menu.classList.add("drive-in");
    menu_state = false;
  }
}
