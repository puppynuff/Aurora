//! This is unneeded currently
//! Just keeping in case I think I'll need it later on

//* This is made to import the topbar
//* It just didn't work because of how tauri works.
//* Buttons couldn't access the code, and I couldn't trigger the code past starting load.

export function importHTML(return_function: (element: Element) => any) {
    let tags = document.getElementsByTagName("*");
    for (let i = 0; i < tags.length; i++) {
        let element = tags[i];

        let file = element.getAttribute("aurora-import-html");

        if (file) {
            let xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        element.innerHTML = this.responseText;
                    }

                    if (this.status === 404) {
                        element.innerHTML = "Page not found";
                    }

                    element.removeAttribute("aurora-import-html");
                    importHTML(return_function);
                }
            }

            xhttp.open("GET", file, true);
            xhttp.send();
            return return_function(element);
        }
    }
}