// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


let btnHideContentMenu = document.querySelector('.header-utp__btn');

if (btnHideContentMenu) {
    btnHideContentMenu.addEventListener('click', openHideContentMenu)

    function openHideContentMenu() {
        this.classList.toggle('_active');
        document.querySelector('.hidden-content').classList.toggle('_active')
    }
}