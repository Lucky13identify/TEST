const magicBtn = document.querySelector(".js-magic-btn");

/*
 * document.querySelector(selector) -возвращает первое совпадение, если не нашло - null
 и document.querySelectorAll(selector) возвращает все совпадения, если не нашло - []
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */

const navEl = document.querySelector(".site-nav");
console.log("navEl", navEl);

const navLinksEl = document.querySelectorAll(".site-nav__link");
console.log("navLinksEl", navLinksEl);

// Скрипт выполняеться после построения дерева (HTML)
/*
 * Document.querySelector* и Element.querySelector*
 */
