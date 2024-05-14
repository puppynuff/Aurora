import { globalVariables } from "../main";
import { AuroraFile } from "../utils/AuroraFile";

export function setupFile(file_name: string, text: string) {
    const created_file: AuroraFile = new AuroraFile(file_name, text);

    globalVariables.saveFile(file_name, created_file);

    //* Create the button to switch files
    //TODO: Add the ability to close files.
    const file_name_button: HTMLButtonElement = document.createElement("button");
    file_name_button.innerText = file_name;
    file_name_button.classList.add("file_button");


    //* Create the text divs
    //TODO: Add colors
    let split_text: Array<string> = created_file.text.split("\n");
    
    for(let i = 0; i < split_text.length; i++) {
        const generated_div = document.createElement("div");
        generated_div.innerText = split_text[i];
        generated_div.classList.add("text-line");
        generated_div.style.color = "white";
        document.getElementById("file-content-holder")?.appendChild(generated_div);  
    }


    document.getElementById("file-name-holder")?.appendChild(file_name_button);
}

export function handleText(key: KeyboardEvent, current_div: HTMLDivElement) {
    switch(key.code) {
        case "Enter": {
            return;
        }

        default: {
            current_div.innerText += key.code;
            return;
        }
    }
}