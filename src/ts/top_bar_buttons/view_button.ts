import { globalVariables } from "../main";
import { createHoverMenu } from "../utils/create_hover_menu";

export async function initializeViewButton() {
    const VIEW_BUTTON = document.getElementById("view-button");

    if(!VIEW_BUTTON) return;

    VIEW_BUTTON.onclick = () => {
        if(document.getElementById("selection-box") && document.getElementById("selection-box")?.classList.contains("view-button")) return;

        const SELECTION_BOX = document.createElement("div");
        SELECTION_BOX.classList.add("view-button");

        SELECTION_BOX.id = "selection-box";
        SELECTION_BOX.style.height = "50px";
        SELECTION_BOX.style.width = "100px";
        SELECTION_BOX.style.position = "absolute";
        SELECTION_BOX.style.zIndex = "100";
        SELECTION_BOX.style.borderRadius = "0px";
        
        //* Create the buttons, and menus
        let theme_buttons: Array<HTMLButtonElement> = [];
        
        for(let i = 0; i < globalVariables.getThemes().length; i++) {
            let generated_button = document.createElement("button");
            generated_button.textContent = globalVariables.getThemes()[i].name;

            generated_button.onclick = () => {
                document.getElementById("theme")?.setAttribute("href",  globalVariables.getThemes()[i].css_location);
            }

            generated_button.style.width = "98px";
            generated_button.style.borderRadius = "0px";

            theme_buttons.push(generated_button);
        }

        const THEME_HOVER_DIV = document.createElement("div");
        THEME_HOVER_DIV.innerText = "Themes >";
        THEME_HOVER_DIV.classList.add("selection-hover-button");

        THEME_HOVER_DIV.onmouseenter = () => {
            //* 0px makes the top the same level as the hover element
            //* 98px is the smallest number in which you still can hover over the created element.
            THEME_HOVER_DIV.appendChild(createHoverMenu(theme_buttons, `98px`, `0px`));
        }

        THEME_HOVER_DIV.onmouseleave = () => {
            console.log(THEME_HOVER_DIV.childNodes.forEach((child) => {
                if(child.textContent == "Themes >") return;
                child.remove();
            }));
        }
        
        SELECTION_BOX.appendChild(THEME_HOVER_DIV);
        VIEW_BUTTON.appendChild(SELECTION_BOX);
        globalVariables.setSelectionBoxOpen(true);
    };
}