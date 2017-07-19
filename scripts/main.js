// elements

ANCHOR = "a";
LIST_ITEM = "li";
MENU_ELEMENT = "menu-element";
MENU_DATA_TYPE = "['menu-item']";
MAIN_MENU_PARENT_CLASS = '.main-menu';
IMAGE_ELEMENT = ""
MAIN_MENU = document.querySelector(MAIN_MENU_PARENT_CLASS);

function createElement(element, name, dataType, parent, text) {
    var newElement = document.createElement(element);
    newElement.className = name;
    newElement.setAttribute("date-type", dataType);
    newElement.textContent = text;
    document.querySelector(parent).appendChild(newElement);
}   

createElement(ANCHOR, MENU_ELEMENT,MENU_DATA_TYPE, MAIN_MENU_PARENT_CLASS, "item 1");
createElement(ANCHOR, MENU_ELEMENT,MENU_DATA_TYPE, MAIN_MENU_PARENT_CLASS, "item 2");
createElement(ANCHOR, MENU_ELEMENT,MENU_DATA_TYPE, MAIN_MENU_PARENT_CLASS, "item 3");
createElement(ANCHOR, MENU_ELEMENT,MENU_DATA_TYPE, MAIN_MENU_PARENT_CLASS, "item 4");
createElement(ANCHOR, MENU_ELEMENT,MENU_DATA_TYPE, MAIN_MENU_PARENT_CLASS, "item 5");


function logoClick(element) {
    var logo = document.querySelector('[data-type="icon"]');
    logo.addEventListener('click', function() {
        element.classList.toggle('transformed')
    })
}

logoClick(MAIN_MENU);





