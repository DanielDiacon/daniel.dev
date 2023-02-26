
// menu burger <=>
let body = document.querySelector('body');
let burger = document.getElementById('burger');
let menu = document.getElementById('menu');
let submenu = document.getElementById('submenu');
let dropdown = document.getElementById('dropdown');
let dropdownMenu = document.getElementById('dropdownMenu');
let dropdownSettings = document.getElementById('dropdownSettings');
let dropdownSettingsMenu = document.getElementById('dropdownSettingsMenu');


burger.onclick = function () {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   dropdownSettingsMenu.classList.remove('active');
   dropdownSettings.classList.remove('active');

};
dropdown.onclick = function () {
   dropdownMenu.classList.toggle('active');
   dropdown.classList.toggle('active');
   submenu.classList.toggle('active');
   dropdownSettingsMenu.classList.remove('active');
   dropdownSettings.classList.remove('active');
};
dropdownSettings.onclick = function () {
   dropdownSettingsMenu.classList.toggle('active');
   dropdownSettings.classList.toggle('active');
   burger.classList.remove('active');
   menu.classList.remove('active');
   submenu.classList.remove('active');
};
document.onclick = function (e) {
   if (e.target.id !== 'dropdown' && e.target.id !== 'dropdownMenu'
   ) {
      dropdownMenu.classList.remove('active');
      dropdown.classList.remove('active');
      submenu.classList.remove('active');
   }
};

//  animation for scroll <=>
//ScrollOut({
//   targets: '.title , .text , .block'
//});

// loading page <=>
const loader = document.getElementById("loader");
window.addEventListener("load", function () {
   loader.style.display = "none";
});

