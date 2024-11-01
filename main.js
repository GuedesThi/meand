/*// * tags <a>
const linkUbuntu = document.getElementById("linkUbuntu");
const linkMint = document.getElementById("linkMint");

// * tags <select> (onde os <option> estão dentro)
const ubuntuVersionSelect = document.getElementById("optUbuntu");
const mintVersionSelect = document.getElementById("optMint");

// * se clicar no link (<a>) do Ubuntu
linkUbuntu.addEventListener("click", (event) => {
    event.preventDefault(); // ! Evita redirecionamento automático

    const selectedVersion = ubuntuVersionSelect.value; // * valor selecionado em <option>

    if (selectedVersion === "24.4.01 LTS") {
        window.location.href = "./ubuntu/v2441/index.html";
    } else if (selectedVersion === "22.4.05 LTS") {
        window.location.href = "./ubuntu/v2245/index.html";
    } else {
        alert("Selecione uma versão válida.");
    }

});

// * se clicar no link (<a>) do Mint
linkMint.addEventListener("click", (event) => {
    event.preventDefault(); // ! Evita redirecionamento automático

    const selectedVersion = mintVersionSelect.value;  // * valor selecionado em <option>

    if (selectedVersion === "LMDE 6 Faye") {
        window.location.href = "./mint/lmde6/index.html";
    } else if (selectedVersion === "LMDE 3 Cindy") {
        window.location.href = "./mint/lmde3/index.html";
    } else {
        alert("Selecione uma versão válida.");
    }
});
*/