// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


let linkCatalog = document.querySelectorAll('.menu-catalog__link');

if (linkCatalog.length > 0) {
    linkCatalog.forEach(link => {
        link.addEventListener('mouseover', function (e) {
            link.classList.add('_active');
            let dataAttr = link.dataset.id;

            document.querySelector(".menu-catalog__right div[data-id=" + dataAttr + "]").classList.add('_active');

        })

        link.addEventListener('mouseout', function (e) {
            link.classList.remove('_active');
            let dataAttr = link.dataset.id;

            document.querySelector(".menu-catalog__right div[data-id=" + dataAttr + "]").classList.remove('_active');
        })
    })
}


let menu__btn = document.querySelector('.menu__btn');
let menu_catalog = document.querySelector('.menu-catalog');
if (menu__btn) {
    menu__btn.addEventListener('click', function (e) {
        if (e.target.classList.contains('menu__btn') || e.target.closest('.menu__btn')) {
            this.classList.toggle('_active');
            if (menu_catalog) {
                menu_catalog.classList.toggle('_active');
            }
        }
    })
}

function addEvent(elemList, nameEvent, nameFunc) {

}