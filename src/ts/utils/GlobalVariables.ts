import { AuroraFile } from "./AuroraFile";

export class GlobalVariables {
    #selectionBoxOpen: boolean;
    #selectionBoxUpdateTime: number;
    #files: {
        [file_name: string]: AuroraFile | null
    }

    #themes: Array<{
        name: string;
        css_location: string;
    }>

    constructor() {
        this.#selectionBoxOpen = false;
        this.#selectionBoxUpdateTime = 0;
        this.#themes = [{
            name: "dark",
            css_location: "/src/css/dark.css"
        }, {
            name: "light",
            css_location: "/src/css/light.css"
        }];

        this.#files = {};
    }

    getThemes() {
        return this.#themes;
    }

    addTheme(themeData: {name: string;
        css_location: string;
    }) {
        this.#themes.push(themeData);
    }

    getSelectionBoxOpen() {
        console.log(this.#selectionBoxUpdateTime);
        if(this.#selectionBoxUpdateTime == new Date().getTime()) return false;
        return this.#selectionBoxOpen;
    }
    
    setSelectionBoxOpen(opened: boolean) {
        this.#selectionBoxUpdateTime = new Date().getTime();
        this.#selectionBoxOpen = opened;
    }

    getFile(file_name: string) {
        return this.#files[file_name];
    }

    saveFile(file_name: string, file: AuroraFile) {
        this.#files[file_name] = file;
        return;
    }

    deleteFile(file_name: string) {
        this.#files[file_name] = null;
    }

}