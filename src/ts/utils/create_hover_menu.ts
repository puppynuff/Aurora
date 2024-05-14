export function createHoverMenu(buttons: Array<HTMLButtonElement | HTMLDivElement>, elementRightPos: string, elementTopPos: string) {
    const HOVER_MENU = document.createElement("div");
    HOVER_MENU.id = "active-hover-menu";

    HOVER_MENU.style.position = "absolute";
    HOVER_MENU.style.left = elementRightPos;
    HOVER_MENU.style.top = elementTopPos;
    HOVER_MENU.style.width = "100px";

    for(let i = 0; i < buttons.length; i++) {
        HOVER_MENU.appendChild(buttons[i]);
    }


    console.log("Created!");

    return HOVER_MENU;
}