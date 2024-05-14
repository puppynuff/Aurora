//* Onclick does not work through html for some reason
//* I need to manually add the events through code.

import { appWindow } from "@tauri-apps/api/window";
import { initializeViewButton } from "./top_bar_buttons/view_button";
import { GlobalVariables } from "./utils/GlobalVariables";
import { setupFile } from "./textarea/textHandler";

//* Create Global Variables class
export const globalVariables = new GlobalVariables();

//* Handle topbar buttons
initializeViewButton();
document.getElementById('titlebar-minimize')?.addEventListener('click', () => appWindow.minimize());
document.getElementById('titlebar-maximize')?.addEventListener('click', () => appWindow.toggleMaximize());
document.getElementById('titlebar-close')?.addEventListener('click', () => appWindow.close());

document.onclick = () => {
    if(globalVariables.getSelectionBoxOpen() == true) {
        document.getElementById("selection-box")?.remove();
        globalVariables.setSelectionBoxOpen(false);
    }
}


setupFile("main.ts", `//* Onclick does not work through html for some reason
//* I need to manually add the events through code.

import { appWindow } from "@tauri-apps/api/window";
import { initializeViewButton } from "./top_bar_buttons/view_button";
import { GlobalVariables } from "./utils/GlobalVariables";
import { setupFile } from "./textarea/textHandler";

//* Create Global Variables class
export const globalVariables = new GlobalVariables();

//* Handle topbar buttons
initializeViewButton();
document.getElementById('titlebar-minimize')?.addEventListener('click', () => appWindow.minimize());
document.getElementById('titlebar-maximize')?.addEventListener('click', () => appWindow.toggleMaximize());
document.getElementById('titlebar-close')?.addEventListener('click', () => appWindow.close());

document.onclick = () => {
    if(globalVariables.getSelectionBoxOpen() == true) {
        document.getElementById("selection-box")?.remove();
        globalVariables.setSelectionBoxOpen(false);
    }
}`);