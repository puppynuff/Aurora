export class AuroraFile {
    text: string;
    #saved_text: string;
    #name: string;

    constructor(name: string, text: string) {
        this.text = text;
        this.#name = name;
        this.#saved_text = text;
    }

    rename(new_name: string) {
        //TODO: Update name through backend
        this.#name = new_name;
    }

    getName() {
        return this.#name;
    }

    saveFile() {
        //TODO: Update this to send the save info to backend
        this.#saved_text = this.text;


        this.#saved_text;
    }
}