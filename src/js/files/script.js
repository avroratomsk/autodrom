// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// let btnHideContentMenu = document.querySelector('.header-utp__btn');
// if (btnHideContentMenu) {
//     btnHideContentMenu.addEventListener('click', openHideContentMenu)

//     function openHideContentMenu() {
//         this.classList.toggle('_active');
//         document.querySelector('.hidden-content').classList.toggle('_active')
//     }
// }

// const btnBurger = document.querySelector('.header-utp__burger');
// if (btnBurger) {
//     btnBurger.addEventListener('click', () => {
//         document.querySelector('.mega-menu').classList.add('_show-menu')
//     })
// }

// const btnCloseMenu = document.querySelector('.mega-menu__close');
// if (btnCloseMenu) {
//     btnCloseMenu.addEventListener('click', () => {
//         document.querySelector('.mega-menu').classList.remove('_show-menu')
//     })
// }

// let tabTrigger = document.querySelectorAll('.tab__trigger');
// if (tabTrigger.length > 0) {
//     tabTrigger.forEach(trigger => {
//         trigger.addEventListener('click', switchActiveClass)
//     })

//     function switchActiveClass() {
//         let dataAttr = this.dataset.id;
//         let tabContent = document.querySelectorAll('.tab');

//         if (tabContent.length > 0) {
//             tabContent.forEach(tab => {
//                 if (dataAttr === tab.dataset.id) {
//                     tab.classList.add('_active')
//                 } else {
//                     tab.classList.remove('_active')
//                 }
//             })
//         }
//     }
// } 

let menuItem = document.querySelectorAll('.menu__item-sub');

if (menuItem) {
  menuItem.forEach(item => {
    item.addEventListener('click', function (e) {
      this.classList.toggle('_show')
    })
  })
}

let buttonsEnroll = document.querySelectorAll('.card-service__btn');

if (buttonsEnroll) {
  buttonsEnroll.forEach(item => {
    item.addEventListener('click', function (e) {

      let dataName = this.dataset.name;
      let inputHideEnrollPopup = document.querySelector('.input__name');

      if (inputHideEnrollPopup) {
        inputHideEnrollPopup.value = dataName;
      } else {
        alert('Нету такого инпута')
      }

    })
  })
}

