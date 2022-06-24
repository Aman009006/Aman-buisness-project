import '../css/main.scss';
import toggleMenu from './modules/toggleMenu';
import getLocation from './modules/getLocation';

import {ModalOrder} from './modules/modalPageFunc'
getLocation();
toggleMenu();

const render = () => {
    ModalOrder.render();
    const btn = document.getElementById("open-modal");
    btn.onclick = ModalOrder.openModal;
};


document.addEventListener("DOMContentLoaded", render);

